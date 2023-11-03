import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Handphone from "../component/Navbar/hanphone";
import Tiket from "../component/Tiket";
import Card from "../component/Card";
import Faq from "../component/Faq";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
    
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Navbar />
          <Banner />
        </div>
      </div>
      <Tiket />
      <Card />
      <Faq />
      <Footer />
      <Handphone />
    </div>
  );
}
