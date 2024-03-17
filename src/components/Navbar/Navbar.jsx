import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/category/men's clothing">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/category/women's clothing">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/category/electronics">
              Electronics
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/category/jewelery">
              Jewelery
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            FakeStore
          </Link>
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
