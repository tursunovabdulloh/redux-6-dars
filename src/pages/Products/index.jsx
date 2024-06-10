import React, { useState } from "react";
import useGetData from "../../hooks/useGetData";
import ProductModal from "../../components/ProductModal";

function Products() {
  const [refresh, setRefresh] = useState(false);
  const { data, isPending, error } = useGetData({
    collectionName: "products",
    refresh,
  });
  return (
    <section>
      <div className="container">
        <div
          className="flex justify-between items-center
             pt-5  pb-3 border-b-4"
        >
          <h1>Products</h1>
          <button
            onClick={() => {
              document.getElementById("my_modal_3").showModal();
            }}
            className="flex items-center justify-center btn btn-square btn-outline btn-sm  px-8 "
          >
            <p className="text-md">Add</p>
          </button>
        </div>
        {isPending && (
          <div className="mt-10 flex justify-center items-center">
            <span
              style={{ zoom: 5 }}
              className="loading loading-spinner text"
            ></span>
          </div>
        )}
        {error.status && <p className="text-red-500">{error.message}</p>}
        {!isPending && !error.status && (
          <div className="grid gap-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  md:gap-24 xl:gap-x-48 mt-10 pb-20 strech">
            {data.map(
              ({ id, title, description, image, price, raiting, stock }) => (
                <div
                  key={id}
                  className="product flex justify-self-center items-stretch"
                >
                  <div className="card w-[320px] bg-base-100 shadow-[0_3px_10px_0] shadow-primary">
                    <figure>
                      <img src={image} alt="" width={250} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Title: {title}</h2>
                      <p className="text-lg">Price: {price}$</p>
                      <p>Stock: {stock}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <ProductModal setRefresh={setRefresh} />
    </section>
  );
}

export default Products;
