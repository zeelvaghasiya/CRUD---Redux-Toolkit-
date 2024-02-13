import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { showData } from "../../features/userDetailSlice.js";

export function Read() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    console.log("IN Read");
    dispatch(showData());
  }, []);

  return (
    <>
      <h1 className="text-center font-semibold text-2xl my-5">All Users</h1>
      {users &&
        users.map((user) => (
          <div className="w-3/5 rounded-md border mx-auto my-5" key={user.id}>
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {user.fullname} &nbsp; <ArrowUpRight className="h-4 w-4" />
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                {user.email}
              </p>
              <p className="mt-3 text-sm text-gray-600">
                {user.gender}
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  View
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  Edit
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  Delete
                </span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
