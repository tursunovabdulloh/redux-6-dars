import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function ProductModal({ setRefresh }) {
  const [productData, setProductData] = useState({
    title: "",
    stock: "",
    image: "",
    price: "",
    rating: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productData);

    const docRef = await addDoc(collection(db, "products"), {
      ...productData,
    });
    console.log(docRef);
    setProductData({ title: "", stock: "", image: "", price: "", rating: "" });
    document.getElementById("my_modal_3").closest("dialog").close();
    setRefresh((prev) => !prev);
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-5">Create a Product!</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label w-full">
              <span className="label-text text-left">Products Title</span>
            </div>
            <input
              type="text"
              value={productData.title}
              onChange={(e) =>
                setProductData({ ...productData, title: e.target.value })
              }
              placeholder="Enter product name..."
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label w-full">
              <span className="label-text text-left">Products stock</span>
            </div>
            <input
              type="number"
              value={productData.stock}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  stock: Number(e.target.value),
                })
              }
              placeholder="Enter product stock..."
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </label>{" "}
          <label className="form-control w-full max-w-xs">
            <div className="label w-full">
              <span className="label-text text-left">Products Image Link</span>
            </div>
            <input
              type="url"
              value={productData.image}
              onChange={(e) =>
                setProductData({ ...productData, image: e.target.value })
              }
              placeholder="Enter product image link..."
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </label>{" "}
          <label className="form-control w-full max-w-xs">
            <div className="label w-full">
              <span className="label-text text-left">Product Price</span>
            </div>
            <input
              type="number"
              value={productData.price}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  price: Number(e.target.value),
                })
              }
              placeholder="Enter product price..."
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mb-5">
            <div className="label w-full">
              <span className="label-text text-left">Raiting</span>
            </div>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => setProductData({ ...productData, rating: 0.5 })}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => setProductData({ ...productData, rating: 1 })}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => setProductData({ ...productData, rating: 1.5 })}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => setProductData({ ...productData, rating: 2 })}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => setProductData({ ...productData, rating: 2.5 })}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => setProductData({ ...productData, rating: 3 })}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => setProductData({ ...productData, rating: 3.5 })}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => setProductData({ ...productData, rating: 4 })}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-1"
                onChange={() => setProductData({ ...productData, rating: 4.5 })}
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-green-500 mask mask-star-2 mask-half-2"
                onChange={() => setProductData({ ...productData, rating: 5 })}
              />
            </div>
          </label>
          <button
            type="submit"
            className="btn btn-outline btn-primary w-full max-w-xs text-[16px]"
          >
            <p className="text-white">Create</p>
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default ProductModal;
