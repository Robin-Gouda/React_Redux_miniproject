import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setP] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setP(data);
      // console.log(data);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button className="btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
