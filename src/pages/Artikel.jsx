import React, { Fragment, useEffect, useState } from "react";
import Batu from "../assest/enlarge_hewan.png"
import CardComponent from "../component/Card/CardComponent";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";
import Handphone from "../component/Navbar/hanphone";

export default function Artikel() {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/artikel');
        setArtikel(response.data); // Simpan data ke dalam state artikel
        console.log(response)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();  // Panggil fungsi fetchData
  }, []);  
  console.log(artikel);
  return (
    <div>
      <Navbar />
      <Handphone/>y
      <div className="bg-white py-6 sm:py-8 lg:py-12 static mt-32">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Artikel
            </h2>

            <div className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg mb-6">
              Ini adalah bagian dari teks pengisi sederhana, juga dikenal sebagai
              teks pengganti. Ini memiliki beberapa karakteristik dari teks tulisan
              sejati tetapi bersifat acak atau dihasilkan secara otomatis.
            </div>

            <div className="flex justify-center mb-6">
              <input 
                type="text" 
                className="border border-gray-300 px-4 py-2 rounded-lg w-full"
                placeholder="Cari Artikel..."
              />
              <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Cari</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 auto-cols-max">
          {artikel.length > 0 ? (
            <Fragment>
              {artikel.map((artikel, index) => {
                  return (
                <CardComponent
                  key={index}
                  Image={Batu}
                  judul={artikel.judul} // Gunakan data dari state artikel
                />
                )
              })
            }
            </Fragment>
           ) : null}
       
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
