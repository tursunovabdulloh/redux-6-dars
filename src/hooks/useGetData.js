import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useGetData({
  collectionName,
  refresh,
  filter = "rating",
}) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    const getData = async () => {
      const documents = [];
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });

        setData(documents.sort((a, b) => b[`${filter}`] - a[`${filter}`]));
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

  return { data, isPending, error };
}
