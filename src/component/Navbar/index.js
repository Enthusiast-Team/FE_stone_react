import React from "react";

const Navbar = () => {
  return (
    <div className="">
    <div className="navbar ">
    <header class="text-black  bg-transparent body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a href="/" class="mr-5 hover:text-blue-600">Home</a>
      <a href="/artikel"  class="mr-5 hover:text-blue-600">Artikel</a>
      <a href="/vision" class="mr-5 hover:text-blue-600">Vision</a>
      <a href="/chatbot" class="hover:text-blue-600">Chatbot</a>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-black lg:items-center lg:justify-center mb-4 md:mb-0">
      
      <span class="ml-3 text-3xl xl:block lg:hidden">E-artefak </span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    
    </div>
  </div>
</header>
    </div>
    </div>
  );
};

export default Navbar;
