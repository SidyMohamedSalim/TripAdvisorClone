"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import clsx from "clsx";
import { Separator } from "../ui/separator";
import { DialogDescription } from "@radix-ui/react-dialog";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import SocialAuthButton from "./SocialAuthButton";

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({
    message: "il faut rentrer un email valable.",
  }),
  password: z.string().min(1, { message: "Champ requis" }),
});

export type formValues = z.infer<typeof formSchema>;

export default function AuthForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [authentification, setAuthentification] = useState<
    "login" | "register"
  >("login");

  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    mutate: Login,
    isPending: loginPending,
    isError: loginError,
    isSuccess: loginSuccess,
  } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) =>
      await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      }),
    onSuccess: () => {
      queryClient.cancelQueries();
      router.push("/");
      router.refresh();
    },
    onError: () => {},
  });

  const {
    mutate: register,
    isPending: registerPending,
    isError: regsiterError,
    isSuccess: registerSuccess,
  } = useMutation({
    mutationFn: async ({
      email,
      password,
      name,
    }: {
      email: string;
      password: string;
      name?: string;
    }) =>
      await fetch("/api/register", {
        body: JSON.stringify({ email, password, name }),
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }),
    onSuccess: async () => {
      queryClient.cancelQueries();
      router.push("/");
      router.refresh();
    },
    onError: () => {},
  });

  // 2. Define a submit handler.
  async function onSubmit(values: formValues) {
    console.log(values);
    console.log(values);

    // login
    if (authentification === "login") {
      Login({ email: values.email, password: values.password });
    } else {
      register({
        email: values.email,
        password: values.password,
        name: values.name,
      });
      if (registerSuccess) {
        await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });
      }
    }
  }

  return (
    <DialogDescription>
      {" "}
      {loginSuccess ||
        (registerSuccess && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success">
              <span>Vous etes connecté.</span>
            </div>
          </div>
        ))}
      {loginError ||
        (regsiterError && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-error">
              <span>Donnees invalides.</span>
            </div>
          </div>
        ))}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          {authentification === "register" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nom"
                      className="rounded-sm "
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="rounded-sm "
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mot de passe"
                    className="rounded-sm "
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href={"/"}
            className={clsx(buttonVariants({ variant: "link" }), "underline")}
          >
            Mot de passe oublie ?
          </Link>
          <Button
            type="submit"
            className="w-56 py-4 rounded-full mx-auto flex justify-center items-center  text-sm"
          >
            {loginPending || registerPending ? (
              <span className="loading loa loading-dots loading-sm"></span>
            ) : authentification === "login" ? (
              "Connectez vous"
            ) : (
              "Inscrivez vous"
            )}
          </Button>
        </form>
      </Form>
      {/* Social */}
      <div className="flex flex-col justify-center items-center py-5">
        <div className="my-4 w-full text-center">
          <Separator />
          <p>Ou</p>
          <Separator />
        </div>
        <SocialAuthButton />
      </div>
      {/* fin form */}
      <div className="my-4 flex justify-center flex-col items-center text-xs px-4 text-center gap-2">
        <div className="">
          <Separator />
          <p className="">
            {authentification === "login" ? "Pas encore membre" : "Deja membre"}
          </p>
          <Separator />
        </div>
        <p>
          <Button
            variant={"link"}
            onClick={(e) => {
              e.preventDefault();

              setAuthentification(
                authentification === "login" ? "register" : "login"
              );
            }}
            className={clsx("font-bold underline")}
          >
            {authentification === "login" ? "Inscrivez vous" : "Connectez vous"}
          </Button>{" "}
          pour profiter du meilleur de TripAdvisor
        </p>
      </div>
    </DialogDescription>
  );
}
