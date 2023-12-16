// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import BannerImg from '../../assest/banner.jpg';

export default class Banner extends Component {
  render() {
    return (
      <div className='mt-36'>
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
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
                Very proud to introduce     
              </p>
              <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
               Museum Semedo
              </h1>

              
            </div>
            {/* <!-- text end --> */}
          </section>
      </div>
    )
  }
}
