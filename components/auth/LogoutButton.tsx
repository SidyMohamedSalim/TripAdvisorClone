"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";

const LogoutButton = () => {
  return (
    <Button
      variant={"link"}
      title=""
      onClick={async (e) => {
        e.preventDefault();
        await signOut();
      }}
    >
      Deconnexion
    </Button>
  );
};

export default LogoutButton;
