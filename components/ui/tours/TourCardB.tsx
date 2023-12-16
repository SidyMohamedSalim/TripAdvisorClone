import Image from "next/image";
import React from "react";
import { Badge } from "../badge";
import { Heart } from "lucide-react";
import clsx from "clsx";

type TourCardBProps = {
  imageUrl: string;
  title: string;
  className?: string;
};

const TourCardB = ({ imageUrl, title, className }: TourCardBProps) => {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="image tour"
        width={500}
        height={500}
        className={clsx("w-full h-48", className)}
      />
      {/* Heart */}
      <Badge className="rounded-full absolute top-2 right-2 bg-white">
        <Heart className="text-black" size={12} />
      </Badge>

      {/* infos Tour Card */}
      <div className="mt-1 font-medium text-sm">
        <Badge variant={"outline"} className="text-xs border-2">
          Meilleurs offres
        </Badge>
        <h2 className="line-clamp-3  mr-2">
          Experiance de degustation de vins en petit dans la campagne suisse en
          jouant et en rigolant
        </h2>
        {/* avis */}
        <div className="flex justify-start items-center">
          <AvisCercel colored={true} />
          <AvisCercel />
          <AvisCercel />
          <AvisCercel />
          <span className="font-extralight text-xs ml-2">3260</span>
        </div>

        <h2 className="text-xs">à partir de 120$ par adulte</h2>
      </div>
    </div>
  );
};

export default TourCardB;

const AvisCercel = ({ colored }: { colored?: boolean }) => {
  return (
    <span
      className={clsx("w-3 h-3 rounded-full border ", {
        "bg-green-600": colored,
      })}
    ></span>
  );
};

export const AvisRatio = () => {
  return (
    <div className="flex justify-start items-center">
      <AvisCercel colored={true} />
      <AvisCercel />
      <AvisCercel />
      <AvisCercel />
    </div>
  );
};
