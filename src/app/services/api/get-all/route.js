import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = await db.collection("services");
  try {
    const res = await servicesCollection.find().toArray();
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json(error);
  }
};
