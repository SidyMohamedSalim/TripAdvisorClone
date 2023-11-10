import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import clsx from "clsx";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import AuthForm from "./AuthForm";

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger className={clsx(buttonVariants())}>
        Connectez Vous
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <Image
            src={"/lg.png"}
            alt=""
            width={50}
            height={50}
            className="my-4"
          />
          <DialogTitle className="py-4">
            Quel plaisir de vous <br /> revoir !
          </DialogTitle>
          <AuthForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
