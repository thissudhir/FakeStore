// Products.jsx
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <div className="top">
        <h1>Products</h1>
        <div className="bottom">
          {products.length > 0 ? (
            products.map((product) => <Card item={product} key={product.id} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
