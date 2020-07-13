import React from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

// 라우터이동할때 로딩 설정
Router.onRouteChangeStart = (url) => {
  console.log(url);
  NProgress.start();
};
// 라우터이동이 완료했을때 설정
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
// 라우터에러발생했을때 로딩 설정
Router.onRouteChangeError = () => {
  NProgress.done();
};
const Layout = ({ children, title }) => {
  return (
    <div className="root">
      <Head>
        <title>NextPortfolio</title>
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>Hire Me</a>
        </Link>
      </header>

      <h1>{title}</h1>
      {children}

      <footer>&copy; {new Date().getFullYear()}</footer>
      <style jsx>{`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        header {
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 1em;
          font-size: 1.2rem;
          background: indigo;
        }
        header a {
          color: darkgrey;
          text-decoration: none;
        }
        header a:hover {
          font-weight: bold;
          color: lightgrey;
        }
        footer {
          padding: 1em;
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0;
          font-size: 110%;
          background: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default Layout;
