import React, { Component } from "react";
import Navbar from "../component/Navbar";
import SentimenComponent from "../component/Sentimen/hasil";
import Footer from "../component/Footer";

export default class Ulasan extends Component {
  
    render () {
        return (
            <>
            <Navbar/>
            <div className="bg-white py-6 sm:py-8 lg:py-12 static mt-32">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  Grafik Ulasan aplikasi E-Semedo
                </h2>
    
                <div className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg mb-6">
                    Grafik Ulasan Aplikasi E-Semedo memberikan gambaran visual mengenai feedback dan penilaian yang diberikan
                    oleh pengguna terhadap aplikasi E-Semedo. Dengan melibatkan elemen grafis, grafik ini menyajikan informasi mengenai kepuasan pengguna,
                    kinerja aplikasi, dan aspek-aspek lainnya yang dapat membantu pemahaman lebih baik tentang pengalaman pengguna dalam menggunakan E-Semedo. 
                </div>

                <SentimenComponent/>
                <Footer/>

              </div>
            </div>
            </div>
            </>

        )
    }
}