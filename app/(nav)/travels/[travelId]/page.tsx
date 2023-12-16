import CenterLayer from "@/components/layout/Centerlayout";
import { Separator } from "@/components/ui/separator";
import { AvisRatio } from "@/components/ui/tours/TourCardB";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = ({ params }: { params: { travelId: string } }) => {
  return (
    <div>
      {params.travelId}
      <CenterLayer>
        {/* title section */}
        <section>
          <div className="flex justify-between">
            <h1 className="font-medium text-2xl">
              Tour Complet dans la ville de Barcelone
            </h1>

            <div className="flex gap-1">
              <Heart className="border  border-black p-1 rounded-full" />
              <ShoppingBag className="border  border-black p-1 rounded-full" />
            </div>
          </div>

          {/* description */}
          <div></div>
        </section>

        {/* images sections */}

        <section className="h-96 grid grid-cols-4 grid-rows-3 gap-1 my-6 border">
          <Image
            src={"/photo3.jpg"}
            width={800}
            height={800}
            alt="product image"
            className="w-full h-full col-span-3 row-span-3"
          />
          <Image
            src={"/photo6.jpg"}
            width={800}
            height={800}
            alt="product image"
            className="w-full h-full"
          />
          <Image
            src={"/photo4.jpg"}
            width={800}
            height={800}
            alt="product image"
            className="w-full h-full"
          />
          <Image
            src={"/photo10.jpg"}
            width={800}
            height={800}
            alt="product image"
            className="w-full h-full"
          />
        </section>

        {/* About Product  */}

        <section className="p-6 border">
          <h4 className="mb-3 font-medium">About</h4>
          <Separator />

          <div className="my-4 grid grid-cols-2 gap-2">
            {/* left  information */}
            <div>
              {/* Avis */}
              <div className="flex justify-start gap-2 items-start">
                <h5 className="font-bold text-4xl">4.5</h5>
                <div className="text-sm">
                  <p className="font-bold">Excellent</p>
                  <p className="flex gap-1">
                    <AvisRatio /> <span className="text-xs">4,603 reviews</span>
                  </p>
                </div>
              </div>
            </div>

            {/* rigth information  */}
            <div></div>
          </div>
        </section>
      </CenterLayer>
    </div>
  );
};

export default page;
