"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/my-booking">My Bookings</Link>
      </li>
    </>
  );
  const session = useSession();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="hidden md:block" href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={100}
            height={60}
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-8 md:space-x-4 items-center">
          {session.data ? (
            <p className="text-[12px]">
              <span className="text-success">{session.data.user.name}</span>
            </p>
          ) : (
            ""
          )}
          <CiShoppingCart className="text-2xl hidden md:block" />
          <CiSearch className="text-2xl hidden md:block" />
          <a className="btn btn-outline btn-primary px-5">Appointment</a>
          {!session.data ? (
            <button className="btn btn-primary px-6">
              <Link href="/login">Login</Link>
            </button>
          ) : (
            <button onClick={() => signOut()} className="btn btn-primary px-6">
              LogOut
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
