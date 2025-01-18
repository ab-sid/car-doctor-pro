import { getServiceDetails } from "@/services/getServices";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const details = await getServiceDetails(id);
  console.log(details);
  const { _id, title, img, price, facility, description } = details;
  return (
    <div>
      <div
        className="hero justify-start items-center h-48 my-10"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <h1 className="text-2xl md:text-5xl font-bold text-white ml-6 p-6">
          Service of {title}
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <div className="flex flex-col space-y-10">
            {/* <Image src={img} width={400} height={350} alt="title"></Image> */}
            <img className="w-full" src={img} alt="" />
            <h3 className="text-black font-bold text-3xl">{title}</h3>
            <p>{description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
            {facility.map((item, index) => (
              <div
                className="border p-6 rounded-t-xl border-t-primary border-t-4"
                key={index}
              >
                <h4 className="text-xl font-bold mb-">{item.name}</h4>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 text-center md:text-start mb-7 md:mb-7">
          <div>
            <h2 className="md:text-2xl font-bold mb-5">Price ${price}</h2>
            <Link href={`/checkout/${_id}`}>
              <button className="mr-4 md:mr-0 btn btn-primary rounded-none">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
