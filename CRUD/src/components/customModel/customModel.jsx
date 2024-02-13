import React from "react";
import { ArrowUpRight, Settings } from "lucide-react";
import { useSelector } from "react-redux";

export function CustomModel({id, showPopup, setShowPopup}) {

  const { users} = useSelector((state) => state.app);

  const user = users.filter((user) => user.id === id)
  console.log(user[0])

  return (
    <div className="bg-black opacity-80 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0">
  <div className="w-[300px] rounded-md border bg-white opacity-95 z-50">
    <div className="flex justify-center my-4">
      <button
        type="button"
        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => setShowPopup(false)}
      >
        Close
      </button>
    </div>
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        {user[0].fullname}
      </h1>
      <p className="mt-3 text-sm text-gray-600">{user[0].email}</p>
      <p className="mt-3 text-sm text-gray-600">{user[0].gender}</p>
      <p className="mt-3 text-sm text-gray-600">{user[0].age}</p>
    </div>
  </div>
</div>

  );
}
