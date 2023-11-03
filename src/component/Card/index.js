import React from "react";
import CardComponent from "./CardComponent";
import hewan from '../../assest/enlarge_hewan.png';

const Card = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 md:mb-10 lg:mb-16">
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-4 lg:text-3xl">
              Blog
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Ini adalah bagian dari teks isi tempat, juga dikenal sebagai teks
              pengganti. Ia memiliki beberapa karakteristik dari teks tulisan
              sejati tetapi bersifat acak atau dihasilkan secara otomatis.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
            <CardComponent
              Image={hewan}
              taggal="10 Oktober 2023"
              judul="Batu Bersejarah"
            />
            <CardComponent
              Image={hewan}
              taggal="10 Oktober 2023"
              judul="Batu Bersejarah"
            />
            <CardComponent
              Image={hewan}
              taggal="10 Oktober 2023"
              judul="Batu Bersejarah"
            />
            <CardComponent
              Image={hewan}
              taggal="10 Oktober 2023"
              judul="Batu Bersejarah"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
