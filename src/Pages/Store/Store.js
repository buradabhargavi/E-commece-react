import React from "react";
import StoreNavBar from "../../Components/Store/StoreNavBar";
import Header from "../../GlobalComponents/Header";
import Footer from "../../GlobalComponents/Footer";
import StoreContent from "../../Components/Store/StoreContent";

function Store() {
  return (
    <>
      <StoreNavBar />
      <Header />
      <StoreContent />
      <Footer />
    </>
  );
}

export default Store;
