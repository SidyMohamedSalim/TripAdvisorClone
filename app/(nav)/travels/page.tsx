import CenterLayer from "@/components/layout/Centerlayout";
import { SearchForm } from "@/components/ui/home/SearchHome";
import React from "react";

const page = () => {
  return (
    <div>
      {/* baniiere image research */}
      <div className="bg-[url('/photo4.jpg')] w-full h-96 bg-center flex justify-end items-center">
        <form className="w-full flex flex-col  justify-center items-center">
          <h1 className="text-white font-extrabold  text-2xl">
            Les derniers avis. Les prix les plus bas.
          </h1>
          <SearchForm />
        </form>
      </div>

      {/* List des produits */}
      <CenterLayer>
        <div>
          <h3>Vous pourriez aimer</h3>
        </div>
      </CenterLayer>
    </div>
  );
};

export default page;
