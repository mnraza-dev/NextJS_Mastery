import React from "react";

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50  p-8">
      <div className="max-w-7xl bg-white rounded-lg  shadow-2xl p-8  mx-auto">
        <h1 className="text-4xl mb-6 font-extrabold text-gray-900">Settings</h1>
        <p className="mb-8 max-w-2xl text-lg font-semibold text-gray-700">
          Customize your account settings, profile and notifications here.
          Choose an option from the sidebar to begin.
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
