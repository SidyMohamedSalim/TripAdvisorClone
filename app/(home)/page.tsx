import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Banner from "@/components/ui/home/Banner";
import Explore from "@/components/ui/home/Explore";
import RecommandedTours from "@/components/ui/home/RecommandedTours";
import SearchHome from "@/components/ui/home/SearchHome";
import Tours from "@/components/ui/tours/Tours";
import React from "react";

const page = () => {
  return (
    <main>
      <SearchHome />
      <Banner
        imageUrl="/photo4.jpg"
        title=" Creez vos meilleures souvenirs de l'annee ensemble"
        description=" Découvrez nos recommandations de voyages pour les fetes de fin
            d'annee"
        btnValue="Voir le guide"
      />
      <RecommandedTours />
      <Banner
        imageUrl="/photo6.jpg"
        title=" Creez vos meilleures souvenirs de l'annee ensemble"
        description=" Découvrez nos recommandations de voyages pour les fetes de fin
            d'annee"
        btnValue="Voir le guide"
      />
      <Tours />
      <Explore />
      <RecommandedTours />
      <Footer />
    </main>
  );
};

export default page;
