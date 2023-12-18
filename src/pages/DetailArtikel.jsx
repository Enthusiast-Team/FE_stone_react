// src/pages/DetailArtikel.js

import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Handphone from "../component/Navbar/hanphone";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const DetailArtikel = ({ artikelData }) => {
  // Dapatkan ID artikel dari URL
  const { JudulArtikel } = useParams();

  // Temukan artikel berdasarkan ID
  const artikel = artikelData.find((item) => item.JudulArtikel === JudulArtikel);

  if (!artikel) {
    return <div>Artikel tidak ditemukan</div>;
  }

  return (
    <div>
      <Navbar />
      <Handphone />
      <div className="bg-white py-6 sm:py-8 lg:py-12 static mt-32">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              {artikel.JudulArtikel}
            </h2>

            {artikel.GambarArtikel2 && (
              <>
                <img
                  src={artikel.GambarArtikel1}
                  alt={artikel.JudulArtikel}
                  className="mb-4 mx-auto"
                  style={{ width: 1024, height: 600 }}
                />
                <p className="text-center text-gray-500 md:text-lg mb-6">
                  {artikel.IsiArtikel1}
                </p>
              </>
            )}

            {artikel.GambarArtikel2 && (
              <>
                <img
                  src={artikel.GambarArtikel2}
                  alt={artikel.JudulArtikel}
                  className="mb-4 mx-auto"
                  style={{ width: 1024, height: 600 }}
                />
                <p className="text-center text-gray-500 md:text-lg mb-6">
                  {artikel.IsiArtikel2}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <Handphone />
    </div>
  );
};

const mapStateToProps = (state) => ({
  artikelData: state.artikelData,
});

export default connect(mapStateToProps)(DetailArtikel);
