import React from "react";
import Batu from "../assest/enlarge_hewan.png"
import CardComponent from "../component/Card/CardComponent";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Handphone from "../component/Navbar/hanphone";

export default function Berita() {
  return (
    <div>
        <Navbar/>
      <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 static mt-32">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Berita
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Halaman berita Museum Semedo mengajak Anda untuk memulai petualangan ke dalam kekayaan sejarah dan budaya 
            yang terabadikan di dalam dinding museum ini. Dengan judul "Menjejak Warisan Luhur," halaman ini menggambarkan 
            pengalaman menggugah dan penuh pengetahuan yang menanti pengunjungnya.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 md:gap-2 auto-cols-max">
            <CardComponent
            Image={Batu}
            taggal="10 Oktober 2023"
            judul = "Batu Bersejarah"

            />
            <CardComponent
            Image={Batu}
            taggal="10 Oktober 2023"
            judul = "Batu Bersejarah"

            />
            <CardComponent
            Image={Batu}
            taggal="10 Oktober 2023"
            judul = "Batu Bersejarah"

            />
            <CardComponent
            Image={Batu}
            taggal="10 Oktober 2023"
            judul = "Batu Bersejarah"

            />
            <CardComponent
            Image={Batu}
            taggal="10 Oktober 2023"
            judul = "Batu Bersejarah"

            />
            <CardComponent
            Image={Batu}
            taggal="10 Oktober 2023"
            judul = "Batu Bersejarah"

            />
            <CardComponent
            Image={Batu}
            taggal="10 Oktober 2023"
            judul = "Batu Bersejarah"

            />
            <CardComponent
            Image={Batu}
            taggal="10 Oktober 2023"
            judul = "Batu Bersejarah"

            />
           
          </div>
        </div>
      </div>
      </div>

      <Footer />
      <Handphone/>

    </div>
  );
}
