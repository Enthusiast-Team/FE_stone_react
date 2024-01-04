import React from "react";
import logo from "../../assest/logo/logo_semedo.png"

const Navbar = () => {
  return (
<div class="w-full mx-auto">

<nav class="border-gray-200 px-2 mb-10">
  <div class="container mx-auto flex flex-wrap items-center justify-between">
  <a href="#" class="flex">
    <img src={logo} alt="Logo Semedo" width="51" height="70" />
      <span class="self-center text-xl font-semibold whitespace-nowrap">E-Semedo</span>
  </a>
  <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
    <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="/" class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded text-xl" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/artikel" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Artikel</a>
      </li>
      <li>
        <a href="/vision" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Vision</a>
      </li>
      <li>
        <a href="/chatbot" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Tanya</a>
      </li>
      <li>
        <a href="/ulasan" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 text-xl">Ulasan</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>

  );
};

export default Navbar;
