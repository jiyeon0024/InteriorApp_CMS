import React from "react";
import { BiSolidMap } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";

function Footer() {
  return (
    <div className=" h-96 bg-stone-500  flex items-start gap-5  justify-center py-8">
      <iframe
        className="w-[60%] h-80 rounded"
        src="https://www.google.com/maps/embed/v1/place?q=Gonghang-daero,+Gangseo-gu,+Seoul,+South+Korea&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      ></iframe>
      <div className="text-white ">
        <div className=" font-extrabold  text-3xl mb-5 text-yellow-950">
          DAESUNG
        </div>
        <ul className="flex gap-3 mb-2">
          <li className="cursor-pointer hover:text-white">Products</li>
          <li className="cursor-pointer hover:text-white">About Us</li>
          <li className="cursor-pointer hover:text-white">Blog</li>
        </ul>
        <p className="mb-2">
          Copyright &#xA9; 2023 DAESUNG All Rights Reserved
        </p>
        <div className="mb-2">
          <ul className="flex  items-center gap-3">
            <li className="cursor-pointer hover:text-white">FAQ</li>
            <li className="cursor-pointer hover:text-white">
              Terms of Service
            </li>
            <li className="cursor-pointer hover:text-white">Support</li>
          </ul>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <span className="flex items-center gap-1">
            <BiSolidMap />
            <p>631 Gonghang-daero, Gangseo-gu, Seoul</p>
          </span>
          <span className="flex items-center gap-1 ">
            <BiPhone />
            <p>+82 1234-1234</p>
          </span>
          <span className="flex items-center gap-1 ">
            <BiMailSend />
            <p>daesung@gmail.com</p>
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
