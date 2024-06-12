import { useState, useEffect, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useGetData({
  collectionName,
  refresh,
  filter = "price",
}) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  +useEffect(() => {
    const getData = async () => {
      const documents = [];
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setData(documents);
      } catch (error) {
        setError({ status: true, message: error.message });
      } finally {
        setIsPending(false);
      }
    };
    if (collectionName) {
      getData();
    } else {
      setIsPending(false);
      setError({ status: true, message: "Collection name is required." });
    }
  }, [refresh]);

  const FilterData = useMemo(() => {
    if (filter === null) {
      return data;
    }
    if (filter === "title") {
      return data.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    if (filter === "!title") {
      return data.sort(function (a, b) {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
    }
    return data.sort((a, b) => b[`${filter}`] - a[`${filter}`]);
  }, [filter, data]);
  return { data, FilterData, isPending, error };
}
