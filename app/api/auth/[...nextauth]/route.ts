import NextAuth from "next-auth/next";
import { authOptions } from "@/components/auth/auth.config";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
