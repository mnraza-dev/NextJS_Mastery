import React from "react";

const Analytics = () => {
  const metrics = [
    {
      id: 1,
      name: "Total Sales",
      value: " $ 1,204.00",
      change: "+ 2.00%",
      isPositive: true,
      icon: "fas fa-dollar-sign",
    },
    {
      id: 2,
      name: "Total Orders",
      value: " 1,204",
      change: "- 2.00%",
      isPositive: false,
      icon: "fas fa-shopping-cart",
    },
    {
      id: 3,
      name: "Total Revenue",
      value: " $ 1,204.00",
      change: "+ 2.00%",
      isPositive: true,
      icon: "fas fa-dollar-sign",
    },
    {
      id: 4,
      name: "Total Customers",
      value: " 1,204",
      change: "- 2.00%",
      isPositive: false,
      icon: "fas fa-users",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50  p-8">
      <div className="max-w-7xl bg-white rounded-lg  shadow-sm p-8  mx-auto">
        <h1 className="text-3xl mb-8  font-bold text-gray-800">
          Analytics Dashboard
        </h1>

        {/* Overview Metrics section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              className={`flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4  ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {metric.name}
                </h3>
                <p className="text-lg text-gray-600 mt-2">{metric.value}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-lg font-semibold ${
                    metric.isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>
       

  
      </div>
    </div>
  );
};

export default Analytics;
