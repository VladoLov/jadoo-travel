import Image from "next/image";
import React from "react";
import MainButton from "../common/MainButton";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-32 md:mt-8 px-4 md:px-0">
      {/* Text Content */}
      <div className="flex flex-col items-start justify-center mt-8 md:mt-0 w-full md:w-1/2">
        <h2 className="text-primary uppercase font-poppins font-normal md:font-bold text-base md:text-lg py-4 md:py-0">
          Best destination around the world
        </h2>
        <div className="font-bold text-lightBlue leading-tight text-3xl md:text-5xl lg:text-7xl flex flex-col relative">
          <h1 className="inline-flex items-center">
            Travel,
            <span className="relative mx-2 md:mx-4">
              enjoy
              <Image
                src="/images/stylish-underline.png"
                alt=""
                width={300}
                height={50}
                className="absolute -bottom-2 left-0 w-full"
              />
            </span>
          </h1>
          <h1>and live a new and full life</h1>
        </div>
        <p className="py-6 text-sm md:text-base font-poppins font-medium text-lightGray max-w-2xl">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center gap-6">
          <MainButton
            text="Find out more"
            className="bg-secondary text-white text-base font-medium shadow-none rounded-md w-40 h-12 hover:bg-secondary/90 transition-colors"
          />
          <button className="flex items-center gap-2 text-lightGrayAlt">
            <Image
              src="/images/play-shadow.png"
              alt="Play button"
              width={52}
              height={52}
              className="w-13 h-13"
            />
            <span>Play Demo</span>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/images/lady-with-aircraft.png"
          alt="Girl with phone and aircraft"
          width={500}
          height={500}
          className="w-full max-w-md md:max-w-full h-auto"
        />
      </div>
    </section>
  );
}
