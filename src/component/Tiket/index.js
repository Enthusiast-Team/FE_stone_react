import React from "react";

const Tiket = () => {
  return (
    <div className="">
      <div className="text-4xl text-center flex items-center">
        <div className="border-t flex-grow "></div>
        <span className="mx-2">Tiket</span>
        <div className="border-t flex-grow"></div>
      </div>

      <div class="grid grid-cols-3 gap-4 ml-16 mt-12">
        <div class="...">
          <h1 className="text-6xl">
            Kunjungan <br />
            Museum Semedo
          </h1>
        </div>
        <div class="col-span-2 ... p-12">
          <p>
            Selain akan menjadi destinasi wisata edukasi unggulan Kabupaten
            Tegal, keberadaan Museum Situs Semedo juga diharapkan mampu menjadi
            bagian dari upaya konservasi dan pelestarian kawasan cagar budaya di
            sekitarnya.
          </p>
          <br />
          <button class="rounded-full bg-blue-500 text-white px-4 py-2">
            Pesan Tiket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tiket;
