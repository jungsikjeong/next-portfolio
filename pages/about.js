import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Error from "./_error";

const About = (props) => {
  About.getInitialProps = async () => {
    const res = await fetch("https://api.github.com/users/jungsikjeong");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };
  };

  useEffect(() => {
    const { statusCode } = props;
    if (statusCode) {
      console.log(statusCode);
      return <Error statusCode={statusCode} />;
    }
  }, [statusCode]);

  useEffect(() => {
    console.log(statusCode);
  }, []);

  const { user, statusCode } = props;
  return (
    <Layout title="About">
      <p>{user.name}</p>

      <p>A javaScript programmer</p>
      <img src={user.avatar_url} alt="Reed" height="200px" />
    </Layout>
  );
};

export default About;
