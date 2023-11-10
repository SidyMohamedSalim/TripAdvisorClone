import { getAuthSession } from "@/components/auth/auth";
import CenterLayer from "@/components/layout/Centerlayout";
import Footer from "@/components/layout/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, CalendarCheck2, LocateFixed, Plus } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getAuthSession();

  if (!session?.user.email) {
    redirect("/");
    return <div>Not Authenticated</div>;
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Image couverture */}
      <div className="w-full h-64 flex justify-center items-center bg-gray-200 z-0">
        <Input type="file" className="w-fit"></Input>
      </div>

      <CenterLayer classname="z-40 -mt-12 rounded-sm">
        {/* Profile Heauder */}
        <div className="bg-white shadow-md p-4 my-4">
          <div className="flex justify-between ">
            <div className="flex items-start gap-3">
              <Avatar className="w-20 h-20 rounded-full">
                <AvatarFallback>
                  {session.user.name
                    ?.split("")
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()
                    .toString()}
                </AvatarFallback>
                <AvatarImage src={session.user.image ?? ""} />
              </Avatar>
              <div>
                <h2 className="font-medium text-sm">{session.user.name}</h2>
                {/* statistiques */}
                <div className="grid grid-cols-3 gap-3 text-xs mt-2">
                  <div>
                    <h3>Contributions</h3>
                    <h4>0</h4>
                  </div>
                  <div>
                    <h3>Abonnées</h3>
                    <h4>0</h4>
                  </div>
                  <div>
                    <h3>Abonnenments</h3>
                    <h4>0</h4>
                  </div>
                </div>
              </div>
            </div>

            <Button variant={"outline"}>Modifier le Profil</Button>
          </div>
          {/* infos and localisations */}
          <div className="text-sm mt-6">
            <div className="flex gap-2 my-2">
              <LocateFixed size={18} /> <span>Dakar, Senegal</span>
            </div>
            <div className="flex gap-2 my-2">
              <CalendarCheck2 size={18} /> <span>Membre depuis juin 2010</span>
            </div>
            <div className="flex gap-2 my-2">
              <Plus size={18} /> <span>Ajouter un site web</span>
            </div>
          </div>
        </div>

        <div className="my-4 shadow-md bg-white">
          <nav className="flex justify-start items-center gap-6">
            <p className="py-4 px-2 relative">
              Flux d&apos;Activités
              {/* underline */}
              <div className="w-full h-[0.18rem] bg-basic absolute bottom-0 left-0"></div>
            </p>
            <p className="py-4  px-2">Voyages</p>
            <p className="py-4  px-2">Photos</p>
            <p className="py-4  px-2">Avis</p>
            <p className="py-4  px-2">Forum</p>
            <p className="py-4  px-2">Badges</p>
          </nav>
        </div>

        {/* infos  section */}
        <div className="my-4 shadow-md bg-white p-14 flex flex-col justify-center items-center gap-2  text-center">
          <h4 className="font-bold">Completer Votre Profil</h4>
          <p className="text-gray-600 text-sm">
            Ajouter des photos et des informations à votre profil pour <br />{" "}
            que les voyageurs puissent vous trouver facilement et <br />{" "}
            apprendre à vous connaitre
          </p>
        </div>
      </CenterLayer>
      <Footer />
    </main>
  );
};

export default page;
