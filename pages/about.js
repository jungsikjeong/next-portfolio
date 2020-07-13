import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout title="About">
      <p>A javaScript programmer</p>
      <img src="/static/javaScript-logo.png" alt="javascript" height="200px" />
    </Layout>
  );
};

export default about;
