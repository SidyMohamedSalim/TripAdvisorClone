import React from "react";
import CenterLayer from "./Centerlayout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-red-200 bg-opacity-50 py-4">
      <CenterLayer classname="px-0">
        {/* Nav */}
        <div className="flex justify-between text-sm font-extralight">
          <div className="flex justify-start items-start gap-6">
            <nav className="flex flex-col">
              <h4 className="text-base">A propos de TripAdvisor</h4>
              <Link href={"/"}>A propos de TripAdvisor</Link>
              <Link href={"/"}>Presse</Link>
              <Link href={"/"}>Ressources et Reglements</Link>
              <Link href={"/"}>Emplois</Link>
              <Link href={"/"}>Confiance et securité</Link>
              <Link href={"/"}>Fonctionnement du site</Link>
              <Link href={"/"}>Contactez nous</Link>
              <Link href={"/"}>Politiques d&apos;accessibilité</Link>
            </nav>
            <nav className="flex flex-col">
              <h4 className="text-base">Explorez</h4>
              <Link href={"/"}>Ecrire un avis</Link>
              <Link href={"/"}>Ajouter un lieu</Link>
              <Link href={"/"}>Decouvrir</Link>
              <Link href={"/"}>S&apos;inscire</Link>
              <Link href={"/"}>Traveller&apos;Choices</Link>
              <Link href={"/"}>EcoLeader</Link>
              <Link href={"/"}>Assistance</Link>
              <Link href={"/"}>Articles Voyage</Link>
            </nav>
            <nav className="flex flex-col">
              <h4 className="text-base">Utilisez nos solutions</h4>
              <Link href={"/"}>Proprietaires</Link>
              <Link href={"/"}>Avantages Business</Link>
              <Link href={"/"}>Resultat Sponsorises</Link>
              <Link href={"/"}>Faites Vos publicites avec nous</Link>
              <Link href={"/"}>Accedez a notre API de contenu</Link>
              <Link href={"/"}>Affilier</Link>
            </nav>
          </div>
          <nav className="flex flex-col">
            <h4 className="text-base">Sites TripAdvisor</h4>
            <Link href={"/"}>Reservez les meilleures tables avec TheFork</Link>
            <Link href={"/"}>
              Reservez vos visites guidees et visites avec Viator
            </Link>
          </nav>
        </div>
      </CenterLayer>
    </footer>
  );
};

export default Footer;
