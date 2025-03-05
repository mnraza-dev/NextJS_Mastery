import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-6xl bg-white rounded-2xl shadow-lg p-8 space-y-8  mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mb-5 sm:mb-0 font-extrabold text-gray-900">
            Dashboard
          </h1>
          <p className="text-lg text-gray-600 mt-3">
            Welcome back! Here you can manage your tasks, view analytics, and
            make adjustments.
          </p>
        </div>
        {/* Dashboard Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/dashboard/tasks"
            className="
            bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-blue-800 ">Tasks</h2>
              <span className="text-blue-500 text-2xl">📃</span>
            </div>
            <p
              className="
            "
            >
              View, Organize, and Manage your daily tasks
            </p>
          </Link>
          <Link
            href="/dashboard/analytics"
            className="
            bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-blue-800 ">
                Analytics
              </h2>
              <span className="text-blue-500 text-2xl">📃</span>
            </div>
            <p className="text-gray-700 mt-2 ">
              View your analytics to see how you're performing.
            </p>
          </Link>
          <Link
            href="/dashboard/tasks"
            className="
            bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-blue-800 ">
                Settings
              </h2>
              <span className="text-blue-500 text-2xl">⚙️</span>
           
            </div>
            <p
              className="
            "
            >
              Adjust your settings to customize your experience.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
