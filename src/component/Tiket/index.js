import React from "react";
import Image from '../../assest/semedo2.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Tiket = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
      className="text-gray-600 body-font"
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
        >
          <img
            className="object-cover object-center rounded-2xl"
            alt="hero"
            src={Image}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Kunjungan
            <br className="hidden lg:inline-block" />Museum Semedo
          </h1>
          <p className="mb-8 leading-relaxed">
            Dengan suasana yang tenang dan penuh inspirasi, pengunjung dapat mengeksplorasi ruang-ruang pameran yang
            dirancang dengan cermat untuk memberikan pandangan mendalam tentang kebudayaan yang diabadikan dalam setiap
            artefak. Museum Semedo bukan hanya tempat berisi benda-benda mati; sebaliknya, itu adalah pintu gerbang untuk
            memahami dan menghargai sejarah yang menjadi bagian tak terpisahkan dari identitas kita.
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-auto"
            >
              <a href="https://linktr.ee/museumsemedo">

              Pesan Tiket
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Tiket;
