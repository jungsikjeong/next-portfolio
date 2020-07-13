import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const About = (props) => {
  About.getInitialProps = async () => {
    const res = await fetch("https://api.github.com/users/jungsikjeong");
    const data = await res.json();

    return { user: data };
  };

  // useEffect(() => {
  // fetch("https://api.github.com/users/reedbarger")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setUser({
  //       user: data,
  //     });
  //   });
  // }, []);

  const { user } = props;
  return (
    <Layout title="About">
      <p>{user.name}</p>

      <p>A javaScript programmer</p>
      <img src={user.avatar_url} alt="Reed" height="200px" />
    </Layout>
  );
};

export default About;
