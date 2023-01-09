import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const history = useNavigate();
  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const data = await response.json();
      setLoading(false);
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  // return <div>hello boy</div>;
  return (
    <>
      <h1>{loading ? "Loading... " : ""}</h1>
      <div className="individual-product">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <h3>{product.title}</h3>
        <div>{product.description}</div>
        <div>
          <b>Category: </b>
          {product.category}
        </div>
        <div>
          <b>Price: </b>
          {product.price}
        </div>
      </div>
    </>
  );
}

export default Product;
