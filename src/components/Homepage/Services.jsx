import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { getServices } from "@/services/getServices";

const Services = async () => {
  const data = await getServices();
  const { res } = data;
  // console.log(data.res);
  return (
    <div className="mb-10 md:mb-32">
      <div className="flex flex-col space-y-2 text-center">
        <h4 className="text-primary text-xl">Services</h4>
        <h2 className="text-2xl">Our Service Area</h2>
        <p className="w-2/3 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
        {res.length > 0 &&
          res.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
      </div>
    </div>
  );
};

export default Services;
