"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MainButton from "./MainButton";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down at least 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="md:sticky md:top-0 md:shadow-none z-50 ">
      {/**Desktop */}
      <div
        className={`hidden lg:block animate-in fade-in zoom-in p-4  ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between mx-[41px] items-center">
          <div>
            <Image
              src="/images/logo.png"
              alt="Jadoo Travel Logo"
              height={200}
              width={200}
            />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2 poppins font-[600] text-lightBlue`}
            >
              Destination
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2 poppins font-[600] text-lightBlue`}
            >
              Hotels
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2 poppins font-[600] text-lightBlue`}
            >
              Flights
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2 poppins font-[600] text-lightBlue`}
            >
              Bookings
            </p>
            <Link
              href="/auth/login"
              className="hover:text-primary cursor-pointer text-[16px] font-[600] flex item-center gap-2 text-lightBlue"
            >
              Login
            </Link>
            <MainButton
              text="Sign up"
              classes="bg-transparent text-lightBlue text-[16px] font-[600] shadow-none rounded-normal border border-lightBlue hover:border-none hover:text-white"
            />
            <div className="flex items-center cursor-pointer">
              <p className="font-[700]">EN</p>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
      {/**Mobile */}
      <div
        className={`block md:hidden shadow-sm fixed top-0 w-full z-50 bg-white py-4 animate-in fade-in zoom-in ${
          menu ? "bg-primary py-2" : ""
        }`}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Image src="/images/logo.png" alt="logo" width={200} height={200} />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mx-4">
              <p className="text-black cursor-pointer">
                <span>Destination</span>
              </p>
              <p className="text-black cursor-pointer">
                <span>Hotels</span>
              </p>
              <p className="text-black cursor-pointer">
                <span>Flights</span>
              </p>
              <p className="text-black cursor-pointer">
                <span>Bookings</span>
              </p>
              {/**Add more link */}
              <div className="flex flex-col gap-[40px] select-none">
                <Link
                  href="/auth/login"
                  className="hover:text-primary cursor-pointer text-[16px] font-[600] flex item-center gap-2 text-lightBlue"
                >
                  Login
                </Link>
                <MainButton
                  text="Sign up"
                  classes="bg-transparent text-lightBlue text-[16px] font-[600] shadow-none rounded-normal border border-lightBlue hover:border-none hover:text-white"
                />
                <div className="flex items-center cursor-pointer">
                  <p className="font-[700]">EN</p>
                  <ChevronDown />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
