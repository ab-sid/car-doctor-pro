import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const { id } = await params;
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.deleteOne({ _id: new ObjectId(id) });
    // const deleted = await res.json();
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "data not found" });
  }
};

export const GET = async (request, { params }) => {
  const { id } = await params;
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const res = await bookingsCollection.findOne({ _id: new ObjectId(id) });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "data not found" });
  }
};

export const PATCH = async (request, { params }) => {
  const { id } = await params;
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  const { phone, address, message, date } = await request.json();

  try {
    const res = await bookingsCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          phone,
          address,
          message,
          date,
        },
      },
      {
        upsert: true,
      }
    );
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "data not found" });
  }
};
