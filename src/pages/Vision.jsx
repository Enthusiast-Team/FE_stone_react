import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Camera from '../component/Camera'
import Handphone from '../component/Navbar/hanphone'

export default function Vision() {
  return (
    <div>
        <Navbar/>
        <Camera/>
        <Footer/>
        <Handphone/>
    </div>
  )
}
