import React from "react";

const Tiket = () => {
  return (
    // <div className=" mx-auto p-4">
    //   <div className="text-4xl text-center flex items-center mb-4">
    //     <div className="border-t flex-grow"></div>
    //     <span className="mx-2">Tiket</span>
    //     <div className="border-t flex-grow"></div>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
    //     <div className="text-center">
    //       <h1 className="text-6xl">
    //         Kunjungan <br />
    //         Museum Semedo
    //       </h1>
    //     </div>
    //     <div className="col-span-2 p-4">
    //       <p className="text-center md:text-left">
    //         Selain akan menjadi destinasi wisata edukasi unggulan Kabupaten
    //         Tegal, keberadaan Museum Situs Semedo juga diharapkan mampu menjadi
    //         bagian dari upaya konservasi dan pelestarian kawasan cagar budaya di
    //         sekitarnya.
    //       </p>
    //       <div className="text-center md:text-left mt-4">
    //         <button className="rounded-full bg-blue-500 text-white px-4 py-2">
    //           Pesan Tiket
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

      <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Kunjungan
          <br class="hidden lg:inline-block"/>Museum Semedo
        </h1>
        <p class="mb-8 leading-relaxed">
        Dengan suasana yang tenang dan penuh inspirasi, pengunjung dapat mengeksplorasi ruang-ruang pameran yang 
        dirancang dengan cermat untuk memberikan pandangan mendalam tentang kebudayaan yang diabadikan dalam setiap artefak. 
        Museum Semedo bukan hanya tempat berisi benda-benda mati; sebaliknya, itu adalah pintu gerbang untuk memahami dan menghargai sejarah yang menjadi bagian tak terpisahkan dari identitas kita.
        </p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-auto">Pesan Tiket</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Tiket;
