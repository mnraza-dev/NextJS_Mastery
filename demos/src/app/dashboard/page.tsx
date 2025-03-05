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
            href="/dashboard/users"
            className="inline-flex items-center justify-center px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <h2>Tasks</h2>
              <span>📃</span>
            </div>
            <p
              className="
            "
            >
              View, Organize, and Manage your daily tasks
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800">Tasks</h2>
            <p className="text-gray-600 mt-2">
              You have 3 tasks due today. View your tasks to get started.
            </p>
          </div>
          {/* Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800">Analytics</h2>
            <p className="text-gray-600 mt-2">
              View your analytics to see how you're performing.
            </p>
          </div>
          {/* Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800">Settings</h2>
            <p className="text-gray-600 mt-2">
              Adjust your settings to customize your experience.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 col-span-3">
            <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
            <p className="text-gray-600 mt-2">
              You have 5 unread messages. View your messages to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
