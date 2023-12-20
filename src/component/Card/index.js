import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import hewan from '../../assest/enlarge_hewan.png';
import { connect } from "react-redux";
import { fetchArtikel } from "../../config/action";

const Card = ({ artikelData, dispatch }) => {
  const [artikelAcak, setArtikelAcak] = useState([]);

  useEffect(() => {
    // Pemanggilan action creator untuk mengambil data artikel
    dispatch(fetchArtikel());
  }, [dispatch]);

  useEffect(() => {
    // Saat data artikel berubah, lakukan pengacakan dan ambil 4 artikel pertama
    if (artikelData.length > 0) {
      const artikelAcak = acakArtikel(artikelData).slice(0, 4);
      setArtikelAcak(artikelAcak);
    }
  }, [artikelData]);

  // Fungsi untuk mengacak urutan artikel
  const acakArtikel = (data) => {
    const dataAcak = [...data];
    for (let i = dataAcak.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dataAcak[i], dataAcak[j]] = [dataAcak[j], dataAcak[i]];
    }
    return dataAcak;
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 md:mb-10 lg:mb-16">
            <div className="text-4xl text-center flex items-center mb-4">
              <div className="border-t flex-grow"></div>
              <span className="mx-2">Penemuan Semedo</span>
              <div className="border-t flex-grow"></div>
            </div>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Ini adalah bagian dari teks isi tempat, juga dikenal sebagai teks
              pengganti. Ia memiliki beberapa karakteristik dari teks tulisan
              sejati tetapi bersifat acak atau dihasilkan secara otomatis.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
            {artikelAcak.map((artikel) => (
              <CardComponent
                key={artikel.id}
                Image={artikel.GambarArtikel1}
                judul={artikel.JudulArtikel}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  artikelData: state.artikelData,
});

export default connect(mapStateToProps)(Card);
