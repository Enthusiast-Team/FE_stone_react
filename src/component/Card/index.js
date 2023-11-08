import React, { Fragment, useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import hewan from '../../assest/enlarge_hewan.png';
import axios from "axios";

const Card = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/category');
        setCategories(response.data); // Simpan data ke dalam state categories
        console.log(response)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();  // Panggil fungsi fetchData
  }, []);  
  console.log(categories);
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 md:mb-10 lg:mb-16">
          <div className="text-4xl text-center flex items-center mb-4">
        <div className="border-t flex-grow"></div>
        <span className="mx-2">Katagori</span>
        <div className="border-t flex-grow"></div>
      </div>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Ini adalah bagian dari teks isi tempat, juga dikenal sebagai teks
              pengganti. Ia memiliki beberapa karakteristik dari teks tulisan
              sejati tetapi bersifat acak atau dihasilkan secara otomatis.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
          {categories.length > 0 ? (
            <Fragment>
              {categories.map((category, index) => {
                  return (
                <CardComponent
                  key={index}
                  Image={hewan}
                  judul={category.nama} // Gunakan data dari state categories
                />
                )
              })
            }
            </Fragment>
           ) : null}

      </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
