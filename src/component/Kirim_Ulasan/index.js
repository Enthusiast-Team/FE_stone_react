import react, { useState } from "react";
import axios from 'axios';

const Kirim_Ulasan  = () => {
    const [nama, setNama] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [review, setReview] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:5000/tambah_review', {
          nama,
          tanggal,
          review,
        });
  
        console.log(response.data);
        alert('Data Berhasil Di Simpen')
        // Handle response, mungkin menampilkan pesan sukses atau redirect ke halaman lain
      } catch (error) {
        console.error('Error adding review:', error);
        // Handle error, mungkin menampilkan pesan error
      }
    };
    return (
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                {/* <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe> */}
                <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4355632097204!2d109.28336967499688!3d-6.957836693042536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fc158b15390db%3A0xcce87305f43b2a36!2sMuseum%20Semedo!5e0!3m2!1sid!2sid!4v1704272990495!5m2!1sid!2sid"></iframe>
                <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                    <div class="lg:w-1/2 px-6">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Alamat</h2>
                    <p class="mt-1">Semedo, Kec. Kedungbanteng, Kabupaten Tegal, Jawa Tengah 52472</p>
                    </div>
                    <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a class="text-indigo-500 leading-relaxed">museumsemedo@gmail.com</a>
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p class="leading-relaxed">123-456-7890</p>
                    </div>
                </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                <p class="leading-relaxed mb-5 text-gray-600">Kirimkan ulasan untuk aplikasi E-Semedo</p>
                <form onSubmit={handleSubmit}>
                    <div class="relative mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-600">Nama</label>
                        <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div class="relative mb-4">
                        <label for="tanggal" class="leading-7 text-sm text-gray-600">Tanggal</label>
                        <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">Ulasan</label>
                        <textarea value={review} onChange={(e) => setReview(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Kirim Ulasan</button>
                </form>
                <p class="text-xs text-gray-500 mt-3">Kirim ulasan untuk mendukung perkembangan aplikasi Museum Semedo.</p>
                </div>
            </div>
        </section>
    )
}

export default Kirim_Ulasan;