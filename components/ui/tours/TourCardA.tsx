import Image from "next/image";
import React from "react";

type TourCardProps = {
  imageUrl: string;
  title: string;
};

const TourCardA = ({ imageUrl, title }: TourCardProps) => {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="image tour"
        width={500}
        height={500}
        className="w-full h-48"
      />
      <h4 className="text-white font-bold text-lg absolute bottom-1 left-2 z-10 mr-3">
        {title}
      </h4>
      <div className="h-9 absolute left-0 right-0 bottom-0 shadow-inner bg-black bg-opacity-10"></div>
    </div>
  );
};

export default TourCardA;
