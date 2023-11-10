import DiscoverCard from "@/components/discover/DiscoverCard";
import React from "react";
import CenterLayer from "@/components/layout/Centerlayout";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <main>
      <CenterLayer classname="max-w-xl py-7">
        {/* title Section */}
        <h2 className="font-semibold text-xl ">Tous les articles de Voyage</h2>
        <Separator className="bg-black my-2" />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
      </CenterLayer>
    </main>
  );
};

export default page;
