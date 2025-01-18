import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { email } = await params;
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.find({ email: email }).toArray();
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "data not found" });
  }
};
