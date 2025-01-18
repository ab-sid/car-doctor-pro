import { connectDB } from "@/lib/connectDB";
import services from "../../../../../public/services.json";
import { NextResponse } from "next/server";
// console.log(services);
export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    await servicesCollection.deleteMany();
    const resp = await servicesCollection.insertMany(services);
    return NextResponse.json({
      message: "Services data inserted successfully",
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};
