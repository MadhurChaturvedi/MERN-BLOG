import React from "react";
import { ArrowRight ,Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function Signup() {
  return (
    <>
      <section style={{ overflowY: "hidden" }}>
        <div className="flex items-center justify-center px- py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <Link className=" flex justify-center">
              <img
                src="https://png.pngtree.com/png-vector/20220702/ourmid/pngtree-v-logo-images-png-image_5672258.png"
                width={150}
                height={100}
                alt=""
              />
            </Link>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign up to create account
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to={"/signin"}
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <form className="mt-5" >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="username"
                      id="username"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2 flex items-center gap-2 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                    <input
                      className="flex h-10 w-full focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 "
                      type="password"
                      placeholder="Password"
                      id="password"
                    />
                      <Eye /> 
                  </div>
                </div>
                <div>
                  <Button
                    type="button"
                    gradientDuoTone="purpleToPink"
                    outline
                    className=" w-full"
                  >
                    Sign Up <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </form>
            <p className="mt-2text-sm text-gray-600 pt-6 ">
            if you have an account? &nbsp;   
            <Link
              to={'/signin'}
              className="font-semibold text-blue-600 transition-all duration-200 hover:underline"
            >
             Signin
            </Link>
          </p>
          </div>
        </div>
      </section>

    </>
  );
}
