import React from "react";
import { Button } from "../button";
import CenterLayer from "@/components/layout/Centerlayout";
import {
  Activity,
  BedDouble,
  Home,
  KeyIcon,
  LucideIcon,
  Search,
  UtensilsCrossed,
} from "lucide-react";
import clsx from "clsx";
import { Card, CardContent, CardDescription, CardHeader } from "../card";
import { Input } from "../input";

const SearchHome = () => {
  return (
    <section>
      <CenterLayer>
        {/* titleSection */}
        <h3 className="text-3xl py-8 font-bold text-center">
          Quelle Destination ?
        </h3>
        {/* Search Block */}
        <div className="items-center justify-center flex flex-col">
          <ul className="flex items-center justify-evenly">
            <SearchType name="Tout Rechercher" Icon={Home} selected={true} />
            <SearchType name="Hotels" Icon={BedDouble} />
            <SearchType name="Activités" Icon={Activity} />
            <SearchType name="Restaurants" Icon={UtensilsCrossed} />
            <SearchType name="Locations de vacances" Icon={KeyIcon} />
          </ul>
          {/* SearchInput */}

          <Card className="w-full my-4 max-w-3xl rounded-full">
            <CardDescription className="h-fit py-1">
              <form action="" className="flex items-center ml-4 mr-2">
                <div className="flex-grow flex items-center ">
                  <Search aria-describedby="search-input" />
                  <Input
                    id="search-input"
                    className={clsx(
                      "border-none py-6 focus:outline-none hover:outline-none focus:border-none"
                    )}
                    placeholder="Search something....."
                  />
                </div>
                <Button className={"rounded-full text-primary bg-basic"}>
                  Recherher
                </Button>
              </form>
            </CardDescription>
          </Card>
        </div>
      </CenterLayer>
    </section>
  );
};

export default SearchHome;

const SearchType = ({
  name,
  Icon,
  selected = false,
}: {
  name: string;
  Icon: LucideIcon;
  selected?: boolean;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Button
        className={clsx("flex gap-2 items-center font-semibold")}
        variant={"link"}
      >
        <Icon size={16} />
        <span>{name}</span>
      </Button>
      {selected ? <span className="h-1 w-[83%] bg-black ml-2"></span> : null}
    </div>
  );
};
