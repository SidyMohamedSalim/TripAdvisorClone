import Image from "next/image";
import React from "react";

const DiscoverCard = () => {
  return (
    <div className="my-8 grid grid-cols-7 gap-3">
      {/* left */}
      <div className="col-span-4">
        {/* title */}
        <h3 className="text-3xl font-light hover:underline  cursor-pointer">
          3 jours de rêve à Conakry
        </h3>
        {/* description */}
        <p className="line-clamp-5 text-sm  my-4">
          Fragmenter le push : Si possible, effectuez le push en plusieurs
          parties. Commencez par pousser une partie des modifications à la fois
          pour éviter le rejet dû à un délai dépassé. Vérifier la connexion
          réseau : Assurez-vous que votre connexion Internet est stable et
          rapide. Des interruptions ou des connexions lentes peuvent causer ce
          genre de problèmes. Contacter le support GitHub : Si le problème
          persiste malgré ces solutions, contactez le support de GitHub. Ils
          pourront peut-être vous aider davantage.
        </p>
        {/* author and date */}
        <p className="text-xs my-2">
          Par TripAdvisor . 23 oct 2023 . Temps de lecture : 7 minutes
        </p>
      </div>
      {/* rigth bloc */}
      <div className="col-span-3">
        <Image
          src={"/photo10.jpg"}
          width={500}
          height={500}
          className="w-full "
          alt="image d'article de  voyage"
        />
      </div>
    </div>
  );
};

export default DiscoverCard;
