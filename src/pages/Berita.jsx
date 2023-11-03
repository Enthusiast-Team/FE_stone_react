import React from "react";
import Batu from "../assest/enlarge_hewan.png"
import CardComponent from "../component/Card/CardComponent";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function Berita() {
  return (
    <div>
        <Navbar/>
      <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12 static mt-32">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Berita
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div class="grid grid-cols-4 gap-4 md:gap-2 auto-cols-max">
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

    </div>
  );
}
