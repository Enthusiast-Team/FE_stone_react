import React, { Component } from 'react';
import BannerImg from '../../assest/2769615692.webp';
import { motion } from 'framer-motion';

export default class Banner extends Component {
  render() {
    return (
      <div className='mt-36'>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-1 shrink-0 items-center justify-center rounded-lg"
        >
          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            {/* <!-- image - start --> */}
            <img
              src={BannerImg}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* <!-- image - end --> */}

            {/* <!-- overlay - start --> */}
            <div className="absolute inset-0 mix-blend-multiply"></div>
            {/* <!-- overlay - end -->/ */}

            {/* <!-- text start --> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative flex flex-col items-center p-4 sm:max-w-xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8"
              >
                Websites Museum Semedo
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl"
              >
                Museum Semedo
              </motion.h1>
            </motion.div>
            {/* <!-- text end --> */}
          </section>
        </motion.section>
      </div>
    );
  }
}
