import { connectDB } from "@/lib/connectDB";

export const GET = async (request, { params }) => {
  const { email } = await params;
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.find({ email: email }).toArray();
    return Response.json(res);
  } catch (error) {
    console.log(error);
  }
};
