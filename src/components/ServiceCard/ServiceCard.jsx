import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const { _id, img, title, price } = service;
  return (
    <div className="card bg-base-100 border p-4 rounded-none">
      <figure>
        <img className="h-64" src={img} alt="" />
        {/* <Image
          priority
          src={img || "https://i.ibb.co/7y5RjX5/sample-image.jpg"}
          alt="service_img"
          width={300}
          height={300}
        /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between items-center">
          <h3 className="text-primary">Price: ${price}</h3>
          <Link href={`/services/${_id}`}>
            <button className="text-primary">
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
