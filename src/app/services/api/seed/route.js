import { connectDB } from "@/lib/connectDB";
import services from "../../../../../public/services.json";
// console.log(services);
export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    await servicesCollection.deleteMany();
    const resp = await servicesCollection.insertMany(services);
    return Response.json({ message: "Services data inserted successfully" });
  } catch (error) {
    console.log(error);
  }
};
