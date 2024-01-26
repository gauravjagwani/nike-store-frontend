import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="relative max-w-[1360px] border-2 w-full mx-auto">
      <Carousel
        autoPlay={true}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute md:right-[50px] right-[28px] md:bottom-3 bottom-2 flex items-center justify-center bg-black z-10 text-white md:w-[40px]  md:h-[40px] cursor-pointer hover:opacity-90 w-5 h-5 "
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-[5px] md:bottom-3 bottom-2 flex items-center justify-center bg-black z-10 text-white md:w-[40px] md:h-[40px] hover:opacity-90 w-5 h-5 rotate-180 cursor-pointer"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <img
            src="/slide-1.png"
            alt="img"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="absolute text-black left-0 md:bottom-8 px-[17px]  md:px-[35px] py-[10px] md:py-[20px] bg-white font-oswald md:text-[20px] cursor-pointer bottom-[20px] text-[14px] font-medium uppercase hover:opacity-90">
            Shop Now
          </div>
        </div>
        <div>
          <img
            src="/slide-2.png"
            alt="img"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="absolute text-black left-0 md:bottom-8 px-[17px]  md:px-[35px] py-[10px] md:py-[20px] bg-white font-oswald md:text-[20px] cursor-pointer bottom-[20px] text-[14px] font-medium uppercase hover:opacity-90">
            Shop Now
          </div>
        </div>
        <div>
          <img
            src="/slide-3.png"
            alt="img"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="absolute text-black left-0 md:bottom-8 px-[17px]  md:px-[35px] py-[10px] md:py-[20px] bg-white font-oswald md:text-[20px] cursor-pointer bottom-[20px] text-[14px] font-medium uppercase hover:opacity-90">
            Shop Now
          </div>
        </div>

        {/* <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
