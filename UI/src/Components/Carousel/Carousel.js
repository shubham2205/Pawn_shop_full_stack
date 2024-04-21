import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[90vh]"
      >
        <SwiperSlide>
          <img
            className="minG"
            src="https://images.unsplash.com/photo-1638561787940-8fd7af709ee2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute p-4 left-40 bottom-36 bg-[#00000099] py-5 rounded-md">
            <h1 className="text-7xl font-extrabold text-start">Pawn Shop </h1>
            <h1 className="text-start py-2 text-yellow-400 text-2xl">
              Timeless Treasures: Discover Vintage Charm!
            </h1>

            <div className="text-start">
              <button class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                <p class="z-10 absolute bottom-2 left-2">Discover More</p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="minG"
            src="https://images.unsplash.com/photo-1506686098657-5eeb165b4353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute p-4 left-40 bottom-36 bg-[#00000099] py-5 rounded-md">
            <h1 className="text-7xl font-extrabold text-start">Shop Now </h1>
            <h1 className="text-start py-2 text-yellow-400 text-2xl">
              Vintage Elegance Awaits: Explore our Timeless Collection!
            </h1>

            <div className="text-start">
              <button class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                <p class="z-10 absolute bottom-2 left-2">Discover More</p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="minG"
            src="https://images.unsplash.com/photo-1640276751820-7a295bee77aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute p-4 left-40 bottom-36 bg-[#00000099] py-5 rounded-md">
            <h1 className="text-7xl font-bold text-start tracking-tighter">
              Here We Go...{" "}
            </h1>
            <h1 className="text-start py-2 text-yellow-400 text-2xl">
              Discover the Past: Shop Unique Vintage Finds Today!
            </h1>

            <div className="text-start">
              <button class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
                <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
                <p class="z-10 absolute bottom-2 left-2">Discover More</p>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
