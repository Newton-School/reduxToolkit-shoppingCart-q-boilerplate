import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" href="/">
          Home
        </Link>
        <Link className="navLink" href="/Cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: item count</span>
      </div>
    </div>
  );
};

export default Navbar;
