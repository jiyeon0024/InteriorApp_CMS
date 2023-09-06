import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainTemplate({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainTemplate;
