import CenterLayer from "@/components/layout/Centerlayout";
import React from "react";
import TourCardC from "../tours/TourCardC";

const Explore = () => {
  return (
    <div className="bg-orange-200  bg-opacity-50">
      <CenterLayer classname="px-0">
        <h3 className="font-light my-4">Explorez Plus</h3>
        {/* grid tours */}
        <div className="grid grid-cols-3 gap-3">
          <TourCardC />
          <TourCardC />
          <TourCardC />
        </div>
      </CenterLayer>
    </div>
  );
};

export default Explore;
