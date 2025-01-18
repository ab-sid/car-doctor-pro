"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    console.log(resp);
    if (resp) {
      router.push("/");
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
          <h4 className="text-center text-2xl font-bold mb-7">Login</h4>
          <form onSubmit={handleLogin}>
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
            <button className="btn btn-primary w-full mt-3">Sign In</button>
          </form>
          <div className="flex flex-col space-y-5 justify-center items-center mt-8">
            <h3>Or Sign In with</h3>
            <div className="flex space-x-4">
              <button className="btn rounded-full text-green-700">
                <FaGoogle />
              </button>
              <button className="btn rounded-full">
                <FaGithub />
              </button>
            </div>
            <h5>
              Not Have an account?
              <Link className="text-primary" href="/signup">
                Sign Up
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
