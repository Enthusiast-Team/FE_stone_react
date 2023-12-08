import React from 'react'
import Chatbot from '../component/chatbot'
import Navbar from '../component/Navbar'
import Handphone from '../component/Navbar/hanphone'

export default function ChatAi() {
  return (
    <div>
      <Navbar/>
        <Chatbot/>   
        {/* <Footer/> */}
        <Handphone/>
    </div>
  )
}
