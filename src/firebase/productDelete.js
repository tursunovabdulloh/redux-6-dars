import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./config";

export async function DeleteItem(path, Itemid) {
  const docRef = await deleteDoc(doc(db, path, Itemid));
  console.log(docRef);
}
