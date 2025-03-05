import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6 ">
      <div className="text-center">
        <h1 className="text-5xl mb-6 font-bold text-gray-800">
          Welcome to the Dashboard App
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Manage your tasks, track analytics, and stay organized with our
          powerful dashboard.
        </p>

        <Link
          href="/dashboard"
          className=" inline-flex items-center  justify-center px-8  bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
