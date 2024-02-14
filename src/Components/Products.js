import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      //   console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((product) =>
        // <div className="card" key={product.id}>
        //   {<img src={product.image} alt="Alt" />}
        //   {/* <h4>{product.title}</h4> */}
        // </div>
        console.log(product)
      )}
    </div>
  );
};

export default Products;
