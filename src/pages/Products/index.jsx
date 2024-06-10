import React, { useState } from "react";
import useGetData from "../../hooks/useGetData";
import ProductModal from "../../components/ProductModal";

function Products() {
  const { data, isPending, error } = useGetData({ collectionName: "products" });
  const [openModal, setOpenModal] = useState(false);
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
          <div className="grid grid-rows-3 mt-10 pb-10">
            {data.map(
              ({ id, title, description, image, price, raiting, stock }) => (
                <div key={id} className="product">
                  <div className="card w-[320px] bg-base-100 shadow-md shadow-primary">
                    <figure>
                      <img src={image} alt="" width={250} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{title}</h2>
                      <p className="text-lg">{price}$</p>
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
      <ProductModal closeModal={setOpenModal} />
    </section>
  );
}

export default Products;
