import React, { useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Handphone from "../../Navbar/hanphone";
import { connect } from "react-redux";
import { fetchArtikelById } from "../../../config/action";

const ListArtikel = ({ match, artikelData, dispatch }) => {
  useEffect(() => {
    // Ganti 'artikelId' sesuai dengan parameter URL atau ID yang sesuai
    const artikelId = match.params.id;

    // Pemanggilan action creator untuk mengambil data artikel berdasarkan ID
    dispatch(fetchArtikelById(artikelId));
  }, [dispatch, match.params.id]);

  const artikel = artikelData.selectedArtikel; // Pastikan Anda menyesuaikan ini sesuai dengan struktur state Redux Anda

  return (
    <div>
      <Navbar />
      <Handphone />
      <div className="bg-white py-6 sm:py-8 lg:py-12 static mt-32">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              {artikel?.JudulArtikel}
            </h2>

            {/* Tampilkan konten artikel sesuai kebutuhan */}
            <div className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg mb-6">
              {artikel?.IsiArtikel}
            </div>
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

export default connect(mapStateToProps)(ListArtikel);
