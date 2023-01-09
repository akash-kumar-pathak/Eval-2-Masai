import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Home />}></Route>
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
