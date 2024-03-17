import React from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";

const Product = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters

  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="product">
      {product ? (
        <div className="product-details">
          <div className="left">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="right">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button> {/* Add button functionality */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
