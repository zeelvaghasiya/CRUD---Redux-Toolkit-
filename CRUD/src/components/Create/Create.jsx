import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { createUser } from "../../features/userDetailSlice";
import { useDispatch } from "react-redux";

export default function Create() {

    const [user, setUser] = useState({})
    const dispatch = useDispatch()

    const getUserData = (e) => {
        setUser({...user, [e.target.name] : [e.target.value]})
        console.log(user);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users...", user);
        dispatch(createUser(user));
      };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-slate-200">
        <div className="w-1/2">
          <form action="#" method="POST" onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    name="fullname"
                    onChange={getUserData}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={getUserData}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Age{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Age"
                    id="age"
                    name="age"
                    onChange={getUserData}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Gender{" "}
                </label>
                <div className="mt-2">
                  <div className="flex items-center">
                    <input
                      className="form-radio h-4 w-4 text-gray-600 border-gray-300"
                      name="gender"
                      value="Male"
                      type="radio"
                      onChange={getUserData}
                      required
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      className="form-radio h-4 w-4 text-gray-600 border-gray-300"
                      name="gender"
                      value="Female"
                      type="radio"
                      onChange={getUserData}
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
