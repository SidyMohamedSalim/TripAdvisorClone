import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../lib/prisma";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { NextAuthOptions } from "next-auth";
import { env } from "@/src/env";
import { compare } from "bcrypt";

export const authOptions = {
  secret: env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (!email || !password) {
          console.log("Missing field");
          throw new Error("Missing field");
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          console.log("user not exist");
          throw new Error("user not exist");
        }
        // if user doesn't exist or password doesn't match
        const PasswordMatch = await compare(password, user.password ?? "");
        if (email !== user.email || !PasswordMatch) {
          console.log("error credentials");
          throw new Error("error credential");
        }

        console.log(user);

        return user;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token, user }) => {
      console.log(session, user);
      if (user.id) {
        session.user.id = user.id;
      }
      return session;
    },
  },
} satisfies NextAuthOptions;
