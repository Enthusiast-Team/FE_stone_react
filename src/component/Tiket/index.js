import React from "react";

const Tiket = () => {
  return (
    <div className=" mx-auto p-4">
      <div className="text-4xl text-center flex items-center mb-4">
        <div className="border-t flex-grow"></div>
        <span className="mx-2">Tiket</span>
        <div className="border-t flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <div className="text-center">
          <h1 className="text-6xl">
            Kunjungan <br />
            Museum Semedo
          </h1>
        </div>
        <div className="col-span-2 p-4">
          <p className="text-center md:text-left">
            Selain akan menjadi destinasi wisata edukasi unggulan Kabupaten
            Tegal, keberadaan Museum Situs Semedo juga diharapkan mampu menjadi
            bagian dari upaya konservasi dan pelestarian kawasan cagar budaya di
            sekitarnya.
          </p>
          <div className="text-center md:text-left mt-4">
            <button className="rounded-full bg-blue-500 text-white px-4 py-2">
              Pesan Tiket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiket;
