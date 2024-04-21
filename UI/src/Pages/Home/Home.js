import React from "react";
import Carousel from "../../Components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />

      <div className=" px-80 ">
      <h1 className="text-4xl font-bold my-10 animate-pulse text-orange-600">
  Welcome to our Vintage Item Shop!
</h1>

        <div className="text-start my-5">

       <p className="text-lg py-2 ">Step into a world where the past meets the present, where each item tells a story of its own. Our curated collection of vintage treasures offers a glimpse into history, inviting you to explore and discover unique pieces that resonate with your personal style.</p>
       <p className="text-lg py-2 ">From retro fashion to classic décor, our shop is a haven for those who appreciate the beauty of bygone eras. Whether you're searching for a statement piece to add to your wardrobe or a nostalgic touch for your home, our carefully selected items are sure to delight and inspire.</p>
       <p className="text-lg py-2 ">Join us on a journey through time and indulge in the nostalgia of yesteryear. Each item has been lovingly chosen to bring joy and evoke memories of a simpler time. Welcome to our Vintage Item Shop, where the past is always present, and every purchase is a piece of history.
</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
