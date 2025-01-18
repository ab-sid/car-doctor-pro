import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  //   const { id } = await params;
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const res = await servicesCollection.findOne({ _id: params.id });
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json(error);
  }
};
