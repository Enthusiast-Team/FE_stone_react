import React, { Component } from 'react'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import ArtikelByID from '../../component/Card/artikel/listArtikel'

export default class Subartikel extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <ArtikelByID/>
        <Footer/>
      </div>
    )
  }
}
