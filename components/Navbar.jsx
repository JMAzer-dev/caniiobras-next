import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={"fixed w-full h-20 z-[100] bg-[#ecf0f3]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/../assets/logo.png"
            alt="/"
            width="150"
            height="150"
          />
        </Link>
        <ul className="hidden md:flex text-[#1f2937]">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>{" "}
          <Link href="/#empresa">
            <li className="ml-10 text-sm uppercase hover:border-b">Empresa</li>
          </Link>{" "}
          <Link href="/#servicos">
            <li className="ml-10 text-sm uppercase hover:border-b">Serviços</li>
          </Link>{" "}
          <Link href="/#contato">
            <li className="ml-10 text-sm uppercase hover:border-b">Contato</li>
          </Link>{" "}
        </ul>
        {/*Menu hamburguer */}
        <div onClick={handleNav} className="md:hidden text-[#1f2937]">
          <Ai.AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? ` fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500`
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <Image
                src="/../assets/logo.png"
                alt="/"
                width="100"
                height="100"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <Ai.AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-0">
              <p className="w-[85%] md:w-[90px] py-4">
                Seu projeto está em boas mãos conosco
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>{" "}
              <Link href="/#empresa">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Empresa
                </li>
              </Link>{" "}
              <Link href="/#servicos">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Serviços
                </li>
              </Link>{" "}
              <Link href="/#contato">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contato
                </li>
              </Link>
            </ul>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%] py-8">
              <a href="https://www.linkedin.com/in/jmazeredo/" target="_blank">
                <div className="rounded-full shadow-lg shadow-grat-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Fa.FaLinkedinIn className="text-[#022043]" />
                </div>
              </a>
              <a href="https://github.com/JMAzer-dev" target="_blank">
                <div className="rounded-full shadow-lg shadow-grat-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Fa.FaGithub className="text-[#022043]" />
                </div>
              </a>
              <a href="mailto:jmaz.dev@gmail.com">
                <div className="rounded-full shadow-lg shadow-grat-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Ai.AiOutlineMail className="text-[#022043]" />
                </div>
              </a>
              <a href="tel:+55 21 96807 2492">
                <div className="rounded-full shadow-lg shadow-grat-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Bs.BsFillPersonLinesFill className="text-[#022043]" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;