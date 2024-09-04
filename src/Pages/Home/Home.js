import React from "react";
import NavBar from "../../GlobalComponents/NavBar";
import HomeHeader from "../../Components/Home/HomeHeader";
import Footer from "../../GlobalComponents/Footer";
import HomeContent from "../../Components/Home/HomeContent";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <HomeHeader></HomeHeader>
      <HomeContent />
      <Footer></Footer>
    </>
  );
}

export default Home;
