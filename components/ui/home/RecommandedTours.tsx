import React from "react";
import TourCardA from "../tours/TourCardA";
import CenterLayer from "@/components/layout/Centerlayout";
import Link from "next/link";
import clsx from "clsx";
import { buttonVariants } from "../button";

const RecommandedTours = () => {
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
        <TourCardA title="Bugapest, Hongrie" imageUrl="/photo1.jpg" />
        <TourCardA
          title="Prague, Republique du Cheque "
          imageUrl="/photo2.jpg"
        />
        <TourCardA title="Vienne, Autriche" imageUrl="/photo3.jpg" />
        <TourCardA title="Cairns, Australie" imageUrl="/photo5.jpg" />
      </div>
    </CenterLayer>
  );
};

export default RecommandedTours;
