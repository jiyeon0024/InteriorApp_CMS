import React from "react";
import Button1 from "./Button1";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-stone-400 px-28 py-2 cursor-pointer  ">
      <nav className="flex justify-between items-center ">
        <Link to={"/"}>
          {" "}
          <div className="text-yellow-950 font-extrabold text-3xl">DAESUNG</div>
        </Link>
        <div>
          <ul className="flex gap-5 text-white text-lg ">
            <li className="hover:text-yellow-950 cursor-pointer">Products</li>
            <li className="hover:text-yellow-950 cursor-pointer">About Us</li>
            <Link to={`/blog`}>
              <li className="hover:text-yellow-950 cursor-pointer">Blog</li>
            </Link>

            <Button1>Login</Button1>
            <Button1>Contact</Button1>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
