import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

async function useGetData({ collectionName }) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "Hatolik yuz bedi ertaga hatolik ikkiyuz berar ekan",
  });

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };
    getData();
  }, []);
  return;
}
export default useGetData;
