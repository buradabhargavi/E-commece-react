import React from "react";
import NavBar from "../../GlobalComponents/NavBar";
import Header from "../../GlobalComponents/Header";
import Footer from "../../GlobalComponents/Footer";
import ContactContent from "../../Components/ContactUs/ContactContent";

function ContactUs() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <ContactContent />
      <Footer />
    </>
  );
}

export default ContactUs;
