import CenterLayer from "@/components/layout/Centerlayout";
import Footer from "@/components/layout/footer";
import { SearchForm } from "@/components/ui/home/SearchHome";
import TourCardB from "@/components/ui/tours/TourCardB";
import { ToursSection } from "@/components/ui/tours/Tours";
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
        <div className="my-8">
          <div>
            <h3 className="font-extrabold">Vous pourriez aimer</h3>
            <p>Plus d&apos;hebergements à Conakry</p>
          </div>

          <div className="grid grid-cols-4 gap-4 my-4 ">
            <TourCardB imageUrl="/photo1.jpg" title="" className="rounded-lg" />
            <TourCardB imageUrl="/photo2.jpg" title="" className="rounded-lg" />
            <TourCardB imageUrl="/photo3.jpg" title="" className="rounded-lg" />
            <TourCardB imageUrl="/photo5.jpg" title="" className="rounded-lg" />
          </div>
        </div>

        <ToursSection />
        <ToursSection />
        <ToursSection />
        <ToursSection />
      </CenterLayer>
      <Footer />
    </div>
  );
};

export default page;
