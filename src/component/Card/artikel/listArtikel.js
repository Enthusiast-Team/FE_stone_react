import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArtikelById } from '../../../config/action';

const ArtikelByID = () => {
  // Mengambil parameter ID dari URL menggunakan useParams
  const { id } = useParams();
  const dispatch = useDispatch();

  // Mengambil data artikel yang dipilih dari Redux store menggunakan useSelector
  const selectedArtikel = useSelector((state) => state.selectedArtikel);
  console.log(selectedArtikel)

  // Menggunakan useEffect untuk menjalankan aksi pengambilan data saat komponen dimuat
  useEffect(() => {
    // Memanggil fungsi fetchArtikelById dengan ID sebagai parameter
    dispatch(fetchArtikelById(id));
  }, [dispatch, id]);

  // Menampilkan pesan "Loading..." selama data artikel sedang diambil
  if (!selectedArtikel) {
    return <p>Loading...</p>;
  }
  // Menampilkan detail artikel jika data sudah tersedia
  return (
    <div>
      {selectedArtikel ? (
        <div class="bg-white py-6 sm:py-8 lg:py-12 mt-16">
        <div class="mx-auto max-w-screen-md px-4 md:px-8">
          <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
          {selectedArtikel.judul}
          </h1>
          <ul class="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
            <li>This is a section of some simple filler text</li>
            <li>Also known as placeholder text</li>
            <li>It shares some characteristics of a real written text</li>
          </ul>
          <div class="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350" loading="lazy" alt="Photo by Minh Pham" class="h-full w-full object-cover object-center" />
          </div>
          {selectedArtikel.isi}
          </div>
      </div>

      ) : (
        <p>Artikel tidak ditemukan</p>
      )}
    </div>
  );
};

export default ArtikelByID;
