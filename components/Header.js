"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isBurgerMenuClose, setIsBurgerMenuClose] = useState(false);
  const [isMenuOverlay, setIsMenuOverlay] = useState(false);
  const [isHeaderHide, setIsHeaderHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(300);
  const pathname = usePathname();

  useEffect(() => {
    setIsBurgerMenuClose(false);
    setIsMenuOverlay(false);
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
      });
      if (pathname === "/") {
        setIsHeaderHide(true);

        window.addEventListener("scroll", controlNavbar);

        // cleanup function
        return () => {
          window.removeEventListener("scroll", controlNavbar);
        };
      } else {
        setIsHeaderHide(false);
      }
    }
  }, [pathname]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setIsHeaderHide(true);
      } else {
        // if scroll up show the navbar
        setIsHeaderHide(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  function handleMenuToggle() {
    setIsBurgerMenuClose((current) => !current);
    setIsMenuOverlay((current) => !current);
  }
  return (
    <header
      className={`${
        isHeaderHide ? "hidden" : "block"
      } sticky top-0 w-full bg-white z-50 h-[65px]`}
    >
      <nav className="relative flex w-full h-full p-5">
        <div className="my-auto mr-auto">
          <Link href="/" shallow>
            <Image
              src="/kandinsky_logo.svg"
              alt="kandinsky logo"
              width="150"
              height="15"
            />
          </Link>
        </div>

        <div
          id="burger-menu"
          className={`${
            isBurgerMenuClose ? "" : "close"
          } relative cursor-pointer h-6 w-6 self-center ml-auto overflow-visible z-[2] md:hidden`}
          onClick={handleMenuToggle}
        >
          <span
            className={`${
              isBurgerMenuClose
                ? "w-[27px] bg-white transform -rotate-45 before:bg-white before:w-[27px] before:transform before:rotate-90 before:top-0 after:bg-white after:transform after:rotate-90 after:w-0 after:!opacity-0 after:top-0 after:left-0"
                : ""
            } bg-gray-800 h-[3px] ease-in-out duration-300 transition opacity-100 w-6 right-0 top-1/2 absolute 
        after:content-[''] after:bg-black after:block after:h-[3px] after:opacity-100 after:absolute after:ease-in-out after:duration-300 after:transition after:w-[25px] after:right-0 after:top-[10px] 
        before:content-[''] before:bg-black before:block before:h-[3px] before:opacity-100 before:absolute before:ease-in-out before:duration-300 before:transition before:w-[25px] before:right-0 before:-top-[10px]`}
          ></span>
        </div>

        <div
          id="menu"
          className={`${
            isMenuOverlay
              ? "overlay visible opacity-100 pt-[100px] bg-black bg-opacity-80"
              : "invisible opacity-0 pt-5"
          } z-[1] min-w-full min-h-full fixed top-0 left-0 h-0 text-center transition-all duration-300 ease-in-out
            md:h-full md:min-w-0 md:p-0 md:static md:visible md:opacity-100`}
        >
          <ul className="text-white md:flex md:flex-nowrap">
            <li>
              <Link
                href="/"
                className="block text-2xl text-white no-underline mb-[30px] md:text-gray-800 md:text-lg md:px-[10px] md:py-[2px] md:m-auto"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="block text-2xl text-white no-underline mb-[30px] md:text-gray-800 md:text-lg md:px-[10px] md:py-[2px] md:m-auto"
              >
                Product Page
              </Link>
            </li>
            <li>
              <Link
                href="/catalogue"
                className="block text-2xl text-white no-underline mb-[30px] md:text-gray-800 md:text-lg md:px-[10px] md:py-[2px] md:m-auto"
              >
                Catalogue
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-2xl text-white no-underline mb-[30px] md:text-gray-800 md:text-lg md:px-[10px] md:py-[2px] md:m-auto"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-2xl text-white no-underline mb-[30px] md:text-gray-800 md:text-lg md:px-[10px] md:py-[2px] md:m-auto"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
