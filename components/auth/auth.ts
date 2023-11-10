import { getServerSession } from "next-auth";
import { authOptions } from "./auth.config";

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);

  return session;
};
