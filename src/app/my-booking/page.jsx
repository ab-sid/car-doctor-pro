"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img from "../../../public/assets/images/services/3.jpg";

const page = () => {
  const [bookings, setBookings] = useState([]);
  const session = useSession();

  const loadBookings = async () => {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/${session?.data?.user?.email}`
    );
    const data = await resp.json();
    setBookings(data);
  };

  useEffect(() => {
    loadBookings();
  }, [session]);
  // console.log(bookings);
  const handleDelete = async (id) => {
    const deleted = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/delete-booking/${id}`,
      {
        method: "DELETE",
      }
    );
    const resp = await deleted.json();
    console.log(resp);
    if (resp.deletedCount > 0) {
      loadBookings();
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
        <div className="hero-overlay bg-opacity-20"></div>
        <h1 className="text-2xl md:text-5xl font-bold text-white ml-6 p-6">
          Bookings of {session?.data?.user?.name}
        </h1>
      </div>
      <div>
        <div className="overflow-x-auto mb-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <th>{booking.bookingTitle}</th>
                  <td>{booking.price}</td>
                  <td>{booking.date}</td>
                  <td>{booking.phone}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Link href={`/my-booking/update/${booking._id}`}>
                        <button className="btn btn-success">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="btn btn-warning"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
