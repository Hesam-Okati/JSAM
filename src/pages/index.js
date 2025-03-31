import React from "react";
import Layout from "@theme/Layout";
import "./index.css";
import Link from "@docusaurus/Link";

const JSAMInfo = () => {
  return (
    <Layout>
      <div className="home-container">
        <h1 className="Home-heading">The JSAM library 🚀</h1>
        <h3>Developed by Hesam Okati for faster web development.</h3>

        <button className="home-btn">
          <Link style={{ textDecoration:"none" , color: "white" }} to={"/docs/intro"}>
          Get Started 
          </Link>
        </button>
      </div>
    </Layout>
  );
};

export default JSAMInfo;
