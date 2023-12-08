import React, { useState } from 'react';

const faqData = [
  {
    question: 'Apa itu semedo',
    answer:
      'Museum Situs Semedo merupakan situs purbakala yang berupa penemuan fosil-fosil dan manusia purba. Letaknya berada Desa Semedo, Kecamatan Kedungbanteng, Kabupaten Tegal, Jawa Tengah.',
  },
  {
    question: 'Ada koleksi apa saja di museum semedo',
    answer:
      'Di situs ini ditemukan himpunan artefak litik berupa alat batu masif dan non-masif, serta beragam fosil fauna seperti gajah purba dan gajah kerdil purba atau Stegodon endemik Semedo. Alat batu masif terdiri atas kapak penetak, kapak perimbas, kapak genggam, batu inti, dan batu pukul.',    
  },
  {
    question: 'Kapan semedo di dirikan?',
    answer:
      'Mengutip dari buku “Catatan Sejarah Situ Semedo, Dunia Purba Semedo” karya Topik Rochadi, pembangunan Museum Situs Semedo dimulai pada tahun 2015.',    
  },
  {
    question: 'Kapan semedo bisa di kunjungi?',
    answer:
      'Situs Semedo sudah buka dan dapat kita kunjungi dari hari Selasa-Minggu jam 08.30 - 15.00 WIB.',    
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));

  const toggleQuestion = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <div className="mx-auto flex max-w-screen-sm flex-col border-t">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <div
              className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-semibold transition duration-100 md:text-lg">
                {faq.question}
              </span>

              <span className="text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform ${isOpen[index] && 'rotate-180'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>

            <p className={`mb-4 ${!isOpen[index] && 'hidden'} text-gray-500`}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

