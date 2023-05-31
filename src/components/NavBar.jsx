import React, { useState } from "react";

import { Route, Link, NavLink } from "react-router-dom";

import { SiApplemusic } from "react-icons/si";
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center  z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <Link to="/NotFound">About Us</Link>
        </li>

        <li>
          <Link to="/NotFound">BQC Originals</Link>
        </li>
        <li>
          <Link to="/NotFound">Contact</Link>
        </li>
      </ul>
      <div className="flex justify-between">
        <a
          href="https://music.apple.com/cn/artist/%E5%8C%97%E4%BA%AC%E9%85%B7%E5%84%BF%E5%90%88%E5%94%B1%E5%9B%A2/1488311742?ls"
          target="_blank"
        >
          <SiApplemusic className="mx-4" />
        </a>{" "}
        <a
          href="https://open.spotify.com/artist/2eTck77bWzi2hJex0XTfJ3?si=H9bUA5LgQ7Sw5zFWjSWe1A&app_destination=copy-link"
          target="_blank"
        >
          <FaSpotify className="mx-4" />
        </a>{" "}
        <a
          href="https://www.facebook.com/BeijingQueerChorus?mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebookF className="mx-4" />
        </a>
        <a href="https://youtube.com/@BeijingQueerChorus" target="_blank">
          <FaYoutube className="mx-4" />
        </a>
        {/* <a
          href="https://instagram.com/beijing_queer_chorus?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <FaInstagram className="mx-4" />
        </a> */}
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <Link to="/NotFound">About Us</Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/NotFound">BQC Originals</Link>
          </li>
          <li className="text-2xl py-8">
            <Link to="/NotFound">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
