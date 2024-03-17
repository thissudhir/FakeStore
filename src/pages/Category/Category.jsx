import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";
import "./Category.scss";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "https://fakestoreapi.com/products";
        if (category) {
          // Append the category to the URL
          url += `?category=${encodeURIComponent(category)}`; // Ensure category is encoded
        }
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        // Filter products by category if category is provided
        const filteredProducts = category
          ? data.filter((product) => product.category === category)
          : data;
        setProducts(filteredProducts);
        console.log("Fetched category data:", filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="category">
      <div className="top">
        <h1>{category}</h1>
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

export default Category;
