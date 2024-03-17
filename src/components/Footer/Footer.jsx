import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Jewelery</span>
          <span>Electronics</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            This website is developed by Abhishek. You can see the source code{" "}
            <a href="https://github.com/thissudhir/FakeStore">here</a>
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            <Link className="link" to="https://www.linkedin.com/in/thissudhir/">
              {" "}
              LinkedIn
            </Link>
          </span>
          <span>
            <Link className="link" to="https://www.github.com/thissudhir/">
              {" "}
              GitHub
            </Link>
            .
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">FakeStore</span>
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
