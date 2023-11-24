import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../../assest/iconcamera-removebg-preview.png';

const Camera = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      getBase64(file);
    }
  }

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const base64String = reader.result.split(',')[1];
      setInputValue(base64String);
      console.log('Gambar dalam format base64:', base64String);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Lakukan prediksi
      const response = await axios.post('http://localhost:5000/predict', {
        message: inputValue
      });
      console.log(response)
      const predictionResult = response.data;
      const nama = predictionResult.nama;

      if (predictionResult && predictionResult.nama) {
        // Dapatkan artikel berdasarkan ID menggunakan API
        const idResponse = await axios.get(`http://localhost:5000/artikel/${predictionResult.nama}`);
        const idArtikel = idResponse.data.data.id
        console.log(idArtikel)
        console.log("get:",idResponse.data.data.judul)
  
        // Gunakan ID artikel untuk mengarahkan pengguna ke halaman artikel
        navigate(`/artikel/${idArtikel}`);
      } else {
        console.log('Data hasil prediksi tidak valid');
      }
    } catch (error) {
      console.log('Gagal terkirim:', error);
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        console.log('Pesan Kesalahan:', errorMessage);
        // Tampilkan pesan kesalahan kepada pengguna, misalnya menggunakan notifikasi atau mengubah status di state Redux.
      }
    }
  };
  


  // const prediction = useSelector(state => state.prediction);
  // const error = useSelector(state => state.error);

  return (
    <div>
      <div className='camera'>
        <div className="bg-cover min-h-screen flex items-center justify-center">
          <div className="bg-sky-400 rounded-lg border-8 md:w-1/3 w-4/6 border-black h-4/5 relative">
            <div className="border-2 m-auto top-6 md:top-12 border-dashed border-black w-4/6 sm:w-3/4 h-48 sm:h-64 relative">
              <div className="border-dashed border-black h-full">
                <img src={image} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center relative mt-16 p-10">
                <label htmlFor="imageInput" className="mb-4 p-2 border border-gray-300 rounded-lg w-full sm:w-3/4 cursor-pointer">
                  Masukkan Gambar
                  <input type="file" accept="image/*" id="imageInput" className="hidden" onChange={handleInputChange} />
                </label>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camera;
