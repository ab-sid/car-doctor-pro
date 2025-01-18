"use client";
import { getServiceDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const session = useSession();
  const router = useRouter();
  // console.log(session?.data?.user?.name);
  const [service, setService] = useState({});
  const { _id, img, title, price } = service;
  const loadService = async () => {
    const { id } = await params;
    const details = await getServiceDetails(id);
    setService(details);
  };

  useEffect(() => {
    loadService();
  }, []);
  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = session?.data?.user?.name;
    const email = session?.data?.user?.email;
    const date = form.date.value;
    price;
    const phone = form.phone.value;
    const address = form.address.value;
    const message = form.message.value;
    const bookingID = _id;
    const bookingTitle = title;
    const newBooking = {
      name,
      email,
      date,
      price,
      phone,
      address,
      message,
      bookingID,
      bookingTitle,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/api/new-booking`,
      {
        method: "POST",
        body: JSON.stringify(newBooking),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    // console.log(res);
    if (res.status === 200) {
      form.reset();
      router.push("/my-booking");
    }
  };
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
          Checkout of {title}
        </h1>
      </div>
      <div>
        <form
          onSubmit={handleBooking}
          className="w-[90%] mx-auto md:w-full md:mx-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              defaultValue={session?.data?.user?.name}
              readOnly
              placeholder="your name"
              className="input input-bordered w-full"
            />
            <input
              type="date"
              name="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              placeholder="checkout date"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              defaultValue={session?.data?.user?.email}
              readOnly
              placeholder="your email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="price"
              defaultValue={price}
              readOnly
              placeholder="service price"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="your phone"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="your address"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="message"
              name="message"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full my-9">Order Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default page;
