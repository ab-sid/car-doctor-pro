"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const page = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(resp);
    if (resp.status === 200) {
      e.target.reset();
    }
  };
  return (
    <div className="grid grid-cols-2 gap-4 items-center my-10">
      <div>
        <Image
          src="/assets/images/login/login.svg"
          alt="login"
          width={400}
          height={400}
        ></Image>
      </div>
      <div>
        <div className="border rounded-md p-10">
          <h4 className="text-center text-2xl font-bold mb-7">Sign Up</h4>
          <form onSubmit={handleSignUp}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="input input-bordered w-full my-3"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your email"
              className="input input-bordered w-full my-3"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="input input-bordered w-full my-3"
            />
            <button className="btn btn-primary w-full mt-3">Sign Up</button>
          </form>
          <div className="flex flex-col space-y-5 justify-center items-center mt-8">
            <h3>Or Sign Up with</h3>
            <div className="flex space-x-4">
              <button className="btn rounded-full text-green-700">
                <FaGoogle />
              </button>
              <button className="btn rounded-full">
                <FaGithub />
              </button>
            </div>
            <h5>
              Already Have an account?
              <Link className="text-primary" href="/login">
                Sign In
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
