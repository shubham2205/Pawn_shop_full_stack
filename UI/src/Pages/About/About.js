import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [postDetails, setPostDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response.data);
        setPostDetails(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  });

  return (
    <div className="container flex justify-between items-center mx-auto px-4 py-8">

      <div className="p-10">

    <h1 className="text-4xl font-bold mb-4">About Us</h1>
    <p className="text-lg text-my-cream leading-relaxed mb-8">
      Welcome to our Vintage Item Shop, where the past comes to life. Our shop is a
      celebration of all things vintage, from fashion to decor. We believe that
      vintage items have a unique charm and character that can't be replicated in
      modern goods.
    </p>
    <p className="text-lg text-my-cream leading-relaxed mb-8">
      Our collection is carefully curated to bring you the best of vintage. Each
      piece is handpicked for its quality, style, and history. Whether you're a
      seasoned collector or new to the world of vintage, we have something for
      everyone.
    </p>
    <p className="text-lg text-my-cream leading-relaxed mb-8">
      We're passionate about preserving the past and giving new life to old
      treasures. Join us in celebrating nostalgia and timeless style. Explore our
      shop and discover the magic of vintage.
    </p>
      </div>
      <div className="p-10">

      <div class="card">
  <div
    class="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center"
  >
    <div
      class="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
    >
      <p class="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
        Thank You
      </p>
      <p class="px-10 text-[10px] sm:text-[12px] text-gray-700">
        It’s so nice that you had the time to view this idea
      </p>
      <p class="font-serif text-[10px] sm:text-[12px text-gray-700">
        Wishing you a fantastic day ahead!
      </p>
      <p class="font-sans text-[10px] text-gray-700 pt-5">Shubham</p>
    </div>
    <button
      class="seal bg-white-500 text-yellow-400 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-blue-400"
    >
      Hover
    </button>
    <div
      class="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
    ></div>
    <div
      class="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
    ></div>
    <div
      class="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
    ></div>
    <div
      class="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
    ></div>
  </div>
</div>


      </div>
  </div>
  );
};

export default About;
