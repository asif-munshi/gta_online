"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderCard({ props, name, background, margintop }) {
  const [state, setState] = useState(0);

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setState({ activeSlide: next }),
    afterChange: (current) => setState({ activeSlide2: current }),
    dots: true,
    fade: false,
    infinite: true,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  return (
    <div className={`${margintop} flex w-full flex-col rounded-lg shadow-md`}>
      <div
        className={`${background} rounded-tl-lg rounded-tr-lg py-2 text-center text-lg font-medium text-white`}
      >
        {name} ({props.length})
      </div>
      <Slider {...settings}>
        {props.map((item) => {
          const frontend_value40 = item.attr.ct40 || "";
          const frontend_value39 = item.attr.ct39 || "";

          return (
            <div key={item.id} className="p-2">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={item.thumbnail}
                    width={item.thumbnail_width}
                    height={item.thumbnail_height}
                    alt={item.name}
                    priority={true}
                    style={{ width: 256, height: 128 }}
                  />
                  <div className="flex flex-col gap-2">
                    <div className="text-xl font-bold">{item.name}</div>
                    <div className="font-normal">
                      {frontend_value40.frontend_value}{" "}
                      <span
                        className={`${
                          frontend_value40.frontend_value !== undefined
                            ? "inline"
                            : "hidden"
                        }`}
                      >
                        —
                      </span>{" "}
                      {frontend_value39.frontend_value}
                    </div>
                  </div>
                </div>
                <div className="text-lg font-medium">
                  {`$${item.attr.ct13.formatted_value}`}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
