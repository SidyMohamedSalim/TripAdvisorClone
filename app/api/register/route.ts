import { z } from "zod";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const bodyScheme = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
});

export async function POST(request: Request) {
  const body = await request.json();

  const bodyParse = bodyScheme.safeParse(body);

  if (!bodyParse.success) {
    return NextResponse.json(
      { message: bodyParse.error.flatten().fieldErrors },
      { status: 409 }
    );
  }

  const bodySafe = bodyParse.data;

  const exists = await prisma.user.findUnique({
    where: { email: bodySafe.email },
  });
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const passwordHash = await bcrypt.hash(bodySafe.password, 10);

  const user = await prisma.user.create({
    data: {
      email: bodySafe.email,
      password: passwordHash,
      name: bodySafe.name,
    },
  });

  console.log("User Created");

  return NextResponse.json(user, { status: 200 });
}
