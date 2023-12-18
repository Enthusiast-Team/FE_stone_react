import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Handphone from "../component/Navbar/hanphone";
import { connect } from "react-redux";
import { fetchArtikel } from "../config/action";
import { ArtikelCard } from "../component/Card/artikel/ArtikelCard";
import { Link } from "react-router-dom";

const Artikel = ({ artikelData, dispatch }) => {
  useEffect(() => {
    // Pemanggilan action creator untuk mengambil data artikel
    dispatch(fetchArtikel());
  }, [dispatch]);
  console.log("artikel:", artikelData);

  return (
    <div>
      <Navbar />
      <Handphone />
      <div className="bg-white py-6 sm:py-8 lg:py-12 static mt-32">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Artikel
            </h2>

            <div className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg mb-6">
              Ini adalah bagian dari teks pengisi sederhana, juga dikenal
              sebagai teks pengganti. Ini memiliki beberapa karakteristik dari
              teks tulisan sejati tetapi bersifat acak atau dihasilkan secara
              otomatis.
            </div>

            <div className="flex justify-center mb-6">
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
                placeholder="Cari Artikel..."
              />
              <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Cari
              </button>
            </div>
          </div>

          {/* Menampilkan daftar artikel menggunakan map */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 auto-cols-max">
            {artikelData.map((artikel) => (
              <div key={artikel.id}>
                {/* Tampilkan konten artikel sesuai kebutuhan */}
                <Link to={`/artikel/${artikel.JudulArtikel}`}>
                  <ArtikelCard
                    Image={artikel.GambarArtikel1}
                    judul={artikel.JudulArtikel}
                    read="Lihat Artikel"
                  />
                </Link>
              </div>
            ))}
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

export default connect(mapStateToProps)(Artikel);
