import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function POST(req: Request) {
  const { title } = await req.json(); // extracts the title attribute from the request body.

  await prisma.todo.create({
    // uses an ORM (Object-Relational Mapping) tool, such as Prisma, to interact with a database.
    data: { title, complete: false }, // It sets the 'title' to the extracted value and marks the 'complete' status as 'false'.
  });

  return NextResponse.json({ message: "Created Todo" }, { status: 200 });
}
