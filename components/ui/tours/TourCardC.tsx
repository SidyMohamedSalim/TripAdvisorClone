import Image from "next/image";
import React from "react";

const TourCardC = () => {
  return (
    <div className="rounded-sm">
      <Image
        src={"/photo7.jpg"}
        alt=""
        width={300}
        height={300}
        className="w-full h-48"
      />
      <div className="bg-accent  flex justify-center items-center py-3">
        <h1 className="text-xs px-6 font-medium text-center">
          Les 13 meilleurs endroits au monde ou on peut admirer la plage
        </h1>
      </div>
    </div>
  );
};

export default TourCardC;
