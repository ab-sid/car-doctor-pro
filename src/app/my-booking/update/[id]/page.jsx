"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import img from "../../../../../public/assets/images/services/2.jpg";

const page = ({ params }) => {
  const [singleService, setSingleService] = useState({});
  const session = useSession();
  const router = useRouter();
  const loadData = async () => {
    const { id } = await params;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/delete-booking/${id}`
    );
    const data = await res.json();
    setSingleService(data);
  };
  useEffect(() => {
    loadData();
  }, []);
  // console.log(singleService);
  const handleUpdate = async (e) => {
    const { id } = await params;
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const address = form.address.value;
    const message = form.message.value;
    const date = form.date.value;
    const updateDoc = {
      phone,
      address,
      message,
      date,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/delete-booking/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updateDoc),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    // console.log(res);
    if (res.status === 200) {
      router.push("/my-booking");
    }
  };
  return (
    <div>
      <div
        className="hero justify-start items-center h-48 my-10"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundPosition: "top",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <h1 className="text-5xl font-bold text-white ml-6 p-6">
          Update of {singleService.bookingTitle}
        </h1>
      </div>
      <div>
        <form onSubmit={handleUpdate}>
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
              defaultValue={singleService.price}
              readOnly
              placeholder="service price"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              defaultValue={singleService.phone}
              placeholder="your phone"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="address"
              defaultValue={singleService.address}
              placeholder="your address"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="message"
              defaultValue={singleService.message}
              name="message"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full my-9">Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
