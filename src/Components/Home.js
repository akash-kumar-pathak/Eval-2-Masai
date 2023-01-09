import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();
  const authContext = useContext(AuthContext);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLoading(false);
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const displayItems = products.map((item, index) => (
    <div key={index} className="product">
      <img src={item.image} alt={item.title} className="product-image" />
      <h3>{item.title}</h3>
      <Link to={`/products/${item.id}`}>More Info</Link>
    </div>
  ));

  useEffect(() => {
    getProducts();
    if (authContext.isAuth) {
      history("/");
    } else {
      history("/login");
    }
  }, []);

  // return <>{displayItems}</>;
  return (
    <>
      <h1>{loading ? "Loading... " : ""}</h1>
      <div className="products">{displayItems}</div>;
    </>
  );
}

export default Home;
