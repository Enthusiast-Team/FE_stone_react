import React from "react";

const Navbar = () => {
  return (
    <div className="">
    <div className="navbar ">
      <header className="mb-4 flex items-center justify-between py-4 md:py-8 bg-white p-4 fixed inset-x-0 top-0 z-10">
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl ml-12"
          aria-label="logo"
        >
        E-artefak
        </a>
        <nav className=" gap-12 lg:flex m-auto">
          <a href="/" className="text-lg font-semibold text-indigo-500">
            Home
          </a>
          <a
            href="/artikel"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Artikel
          </a>
          <a
            href="/vision"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Vision
          </a>
          <a
            href="/berita"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Berita
          </a>
        </nav>
      </header>
    </div>
    </div>
  );
};

export default Navbar;
