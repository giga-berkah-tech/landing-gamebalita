import { useState } from 'react';
import Image from 'next/image';

import Slider from 'react-slick';
import ArrowNext from './misc/ArrowNext';
import ArrowBack from './misc/ArrowBack';

const listImage = [
  { id: 1, image: '/assets/About.png', alt: 'Screenshoot Menu' },
  { id: 2, image: '/assets/ss-1.png', alt: 'Screenshoot Kategori' },
  { id: 3, image: '/assets/ss-2.png', alt: 'Screenshoot Gameplay' },
  { id: 4, image: '/assets/ss-3.png', alt: 'Screenshoot Gameplay sayur' },
];
const settings = {
  dots: true,
  customPaging: function (i) {
    return (
      <a className="">
        <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
      </a>
    );
  },
  dotsClass: 'slick-dots w-max absolute mt-20  ',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Hero = ({}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto scroll-mt-64"
      id="about"
    >
      <div>
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Belajar Bahasa Indonesia dengan <strong>Balita Belajar</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Lihat gambarnya, dengar suaranya! Yuk, temukan cara belajar paling
              menyenangkan bersama kami.
            </p>
          </div>
          <div className="flex w-full ">
            <div className="h-full w-full">
              <Slider {...settings} arrows={false} ref={setSliderRef}>
                {listImage.map((list, i) => (
                  <Image
                    src={list.image}
                    alt={list.alt}
                    quality={100}
                    width={612}
                    height={383}
                    className="rounded-md"
                    key={list.id}
                  />
                ))}
              </Slider>
              <div className="flex w-full items-center justify-center">
                <div className="flex flex-none justify-between w-auto mt-14">
                  <div
                    className="mx-4 flex items-center justify-center h-10 w-10 rounded-full bg-white border-purple-500 border hover:bg-purple-500 hover:text-white-500 transition-all text-purple-500 cursor-pointer"
                    onClick={sliderRef?.slickPrev}
                  >
                    <ArrowBack className="h-4 w-4 " />
                  </div>
                  <div
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-white border-purple-500 border hover:bg-purple-500 hover:text-white-500 transition-all text-purple-500 cursor-pointer"
                    onClick={sliderRef?.slickNext}
                  >
                    <ArrowNext className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex">
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
