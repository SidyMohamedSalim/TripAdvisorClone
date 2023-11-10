import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import clsx from "clsx";
import LogoutButton from "../auth/LogoutButton";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function AvatarProfile({
  name,
  image,
}: {
  name?: string;
  image?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={clsx("rounded-full cursor-pointer")}
      >
        <Avatar>
          <AvatarFallback>
            {name?.split("").slice(0, 2).join("").toUpperCase().toString()}
          </AvatarFallback>
          <AvatarImage src={image} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 text-center">
        <DropdownMenuLabel>Mon profil</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={siteConfig.links.profile}>Voir profil</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <span>Notifications</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <span>Reservations</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <span>Voyages</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <span>Informations sur le compte</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
