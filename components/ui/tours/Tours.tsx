import React from "react";
import TourCardB from "../tours/TourCardB";
import CenterLayer from "@/components/layout/Centerlayout";
import Link from "next/link";
import clsx from "clsx";
import { buttonVariants } from "../button";

const Tours = () => {
  return (
    <CenterLayer classname="px-0 my-8">
      {/* title */}

      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-semibold text-lg mb-1">
            Voyages à reserver dès maintenant pour les fetes
          </h1>
          <p className="mb-2 font-light text-sm">
            Marchés festifs, plages ensoillés d&apos;une journée
          </p>
        </div>
        <Link
          href={"/"}
          className={clsx(
            buttonVariants({ variant: "link" }),
            "underline-offset-4 underline"
          )}
        >
          Voir plus
        </Link>
      </div>

      {/* grid Tours */}
      <div className="grid grid-cols-4 gap-2">
        <TourCardB title="Bugapest, Hongrie" imageUrl="/photo1.jpg" />
        <TourCardB
          title="Prague, Republique du Cheque "
          imageUrl="/photo2.jpg"
        />
        <TourCardB title="Vienne, Autriche" imageUrl="/photo3.jpg" />
        <TourCardB title="Cairns, Australie" imageUrl="/photo5.jpg" />
      </div>
    </CenterLayer>
  );
};

export default Tours;

export const ToursSection = () => {
  return (
    <div className="my-20">
      {/* title */}
      <div className="flex justify-between items-center">
        <h4 className="font-medium">Hotels dans les meilleures destinations</h4>
        <p className={clsx(buttonVariants({ variant: "link" }), "underline")}>
          Tout Afficher
        </p>
      </div>

      {/* content */}
      <div className="grid grid-cols-4 gap-4 my-4">
        <TourCardB imageUrl="/photo1.jpg" title="" className="rounded-lg" />
        <TourCardB imageUrl="/photo2.jpg" title="" className="rounded-lg" />
        <TourCardB imageUrl="/photo3.jpg" title="" className="rounded-lg" />
        <TourCardB imageUrl="/photo5.jpg" title="" className="rounded-lg" />
      </div>
    </div>
  );
};
