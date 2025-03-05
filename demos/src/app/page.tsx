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
      </div>
    </div>
  );
};

export default Home;
