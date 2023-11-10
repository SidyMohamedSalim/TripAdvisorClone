import CenterLayer from "@/components/layout/Centerlayout";
import Image from "next/image";
import React from "react";
import { Button } from "../button";

type BannerProps = {
  imageUrl: string;
  title: string;
  description: string;
  btnValue: string;
};

const Banner = ({ imageUrl, title, description, btnValue }: BannerProps) => {
  return (
    <div className="flex justify-center my-8">
      <CenterLayer classname="relative px-0">
        <Image
          className="w-full h-customHeigh rounded-sm"
          src={imageUrl}
          alt="banner-image"
          width={800}
          height={500}
        />
        <div className="text-white absolute bottom-6 left-6">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-sm font-extralight">{description}</p>
          <Button variant={"white"} className="mt-5 rounded-full mb-3">
            {btnValue}
          </Button>
        </div>
      </CenterLayer>
    </div>
  );
};

export default Banner;
