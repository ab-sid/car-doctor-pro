import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  const { id } = await params;
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.deleteOne({ _id: new ObjectId(id) });
    // const deleted = await res.json();
    return Response.json(res);
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (request, { params }) => {
  const { id } = await params;
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const res = await bookingsCollection.findOne({ _id: new ObjectId(id) });
    return Response.json(res);
  } catch (error) {
    return Response.json(error);
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
    return Response.json(res);
  } catch (error) {
    return Response.json(error);
  }
};
