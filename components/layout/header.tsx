import React, { use } from "react";
import CenterLayer from "./Centerlayout";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { Button } from "../ui/button";
import { AuthModal } from "../auth/AuthModal";
import AvatarProfile from "../profile/AvatarProfile";
import { getAuthSession } from "../auth/auth";

const Header = async () => {
  const session = await getAuthSession();
  return (
    <header className="divide-y-2">
      <CenterLayer>
        <div className="flex justify-between items-center">
          <Link href={siteConfig.links.home.href}>
            {" "}
            <Image
              src={siteConfig.logoUrl}
              alt={`logo de ${siteConfig.nameSite}`}
              width={150}
              height={150}
            />
          </Link>

          {/* Navigation */}
          <nav>
            {siteConfig.pages.nav.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium px-2 hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Profil and Login */}
          <div>
            {session?.user ? (
              <AvatarProfile
                image={session.user.image ?? ""}
                name={session?.user?.name ?? ""}
              />
            ) : (
              <AuthModal />
            )}
          </div>
        </div>
      </CenterLayer>
      <Separator />
    </header>
  );
};

export default Header;
