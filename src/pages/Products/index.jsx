import React from "react";
import useGetData from "../../hooks/useGetData";

function Products() {
  const { data, isPending, error } = useGetData({ collectionName: "products" });
  return (
    <section>
      <div className="container">
        <div
          className="flex justify-between items-center
        pt-5  pb-3 border-b-4"
        >
          <h1>Products</h1>
          <button className="btn btn-circle btn-outline btn-md">Add</button>
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
          <div className="mt-10">
            {data.map(
              ({ id, title, description, image, price, raiting, stock }) => (
                <div key={id} className="product">
                  <div className="card w-96 bg-base-100 shadow-md shadow-primary">
                    <figure className="">
                      <img src={image} alt="" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{title}</h2>
                      <p>{description}</p>
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
    </section>
  );
}

export default Products;
