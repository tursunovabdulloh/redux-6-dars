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
        {!isPending && error.message && (
          <div className="mt-10">
            {data.map((product) => (
              <div key={product.id} className="product">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
