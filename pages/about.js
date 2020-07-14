import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Error from "./_error";

const About = ({ user, statusCode }) => {
  About.getInitialProps = async () => {
    const res = await fetch("https://api.github.com/users/jungsikjeong");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };
  };

  useEffect(() => {
    if (statusCode) {
      console.log(statusCode);
      return <Error statusCode={statusCode} />;
    }
  }, [statusCode]);

  // if (statusCode) {
  //   console.log(statusCode);
  //   return <Error statusCode={statusCode} />;
  // }

  return (
    <Layout title="About">
      <p>{user.name}</p>

      <p>A javaScript programmer</p>
      <img src={user.avatar_url} alt="Reed" height="200px" />
    </Layout>
  );
};

export default About;
