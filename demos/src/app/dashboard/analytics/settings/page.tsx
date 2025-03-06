import Link from "next/link";
import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50  p-8">
      <div className="max-w-7xl bg-white rounded-lg  shadow-2xl p-8  mx-auto">
        <h1 className="text-4xl mb-6 font-extrabold text-gray-900">Settings</h1>
        <p className="mb-8 max-w-2xl text-lg font-semibold text-gray-700">
          Customize your account settings, profile and notifications here.
          Choose an option from the sidebar to begin.
        </p>
        <div className="flex space-x-12">
          <div className=" w-1/4 bg-white rounded-lg p-6 space-y-6">
            <h2 className=" text-2xl font-semibold text-gray-800 mb-4  ">
              Quick Links
            </h2>
            <ul className="space-y-4">
              <li className="">
                <Link
                  href={"/dashboard/analytics/settings/account"}
                  className=" flex items-center text-lg text-gray-800  hover:text-indigo-600 transition-colors py-2 px-4 rounded-md hover:bg-indigo-50"
                >
                  <span>Account</span>
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/dashboard/analytics/settings/notifications"}
                  className=" flex items-center text-lg text-gray-800  hover:text-green-600 transition-colors py-2 px-4 rounded-md hover:bg-green-50"
                >
                  <span>Notifications</span>
                </Link>
              </li>
              <li className="">
                <Link
                  href={"/dashboard/analytics/settings/profile"}
                  className=" flex items-center text-lg text-gray-800  hover:text-yellow-600 transition-colors py-2 px-4 rounded-md hover:bg-yellow-50"
                >
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white flex-1 p-8 rounded-lg shadow-md">
            <h2 className="text-gray-900 font-semibold text-3xl mb-6">
              Select a Settings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Choose an option from the sidebar to manage your account,
              notifications or profile settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
