"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css/navigation";
import "swiper/css";

const Slider = () => {
  return (
    <>
      <Swiper
        dir="rtl"
        navigation={true}
        className="mySwiper"
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div width="100%" height="500px" border="1px solid black">
            <Image 
              alt={"title"}
              src="wikipedia/commons/thumb/b/b0/Rottenburg_a.N._-_Wurmlingen_-_Kapellenberg_-_Ansicht_von_OSO_im_April_mit_Gegenlicht.jpg/800px-Rottenburg_a.N._-_Wurmlingen_-_Kapellenberg_-_Ansicht_von_OSO_im_April_mit_Gegenlicht.jpg?20230527103219"
              loader={({ src, width, quality }) => {
                return `https://upload.wikimedia.org/${src}?w=${width}&q=${75}`;
              }}
              width={600}
              height={500}
              // loading="eager"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div width="100%" height="500px" border="1px solid black">
            <Image
              loader={({ src, width, quality }) => {
                return `https://upload.wikimedia.org/${src}?w=${width}&q=${75}`;
              }}
              alt={"title"}
              src="wikipedia/commons/thumb/2/26/Week_8_-_Splash_of_Lime.jpg/1920px-Week_8_-_Splash_of_Lime.jpg"
              width={600}
              height={500}
              // loading="eager"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div width="100%" height="500px" border="1px solid black">
            <Image
              loader={({ src, width, quality }) => {
                return `https://upload.wikimedia.org/${src}?w=${width}&q=${75}`;
              }}
              alt={"title"}
              src="wikipedia/commons/thumb/a/a9/Blue_Pearl_%286361202961%29.jpg/1280px-Blue_Pearl_%286361202961%29.jpg"
              width={600}
              height={500}
              // loading="eager"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
