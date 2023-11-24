import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Content() {
  const [articleParagraphs, setArticleParagraphs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/artikel/3'); // Gantilah URL_API_ARTIKEL dengan URL yang sesuai
        const paragraphs = response.data.isi.split('\n');
        setArticleParagraphs(paragraphs);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 mt-16">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Our competitive advantage</h1>
          <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350" loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
          </div>

          {/* Menampilkan setiap paragraf dalam komponen React */}
          {articleParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              {paragraph}
            </p>
          ))}

          <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">About us</h2>
          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">...</p>

          <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
            <li>This is a section of some simple filler text</li>
            <li>Also known as placeholder text</li>
            <li>It shares some characteristics of a real written text</li>
          </ul>

          <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
            “This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”
          </blockquote>

          <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>
          <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics...</p>
        </div>
      </div>
    </div>
  );
}
