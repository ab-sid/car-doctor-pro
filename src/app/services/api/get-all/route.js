import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const res = await servicesCollection.find().toArray();
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "data not found", error });
  }
};
