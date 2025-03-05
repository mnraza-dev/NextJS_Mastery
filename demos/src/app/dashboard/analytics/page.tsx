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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        </div>
        <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-sm">

          

        </div>

        {/* metrics list section  */}
        <section className="space-y-8 ">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="flex items-center justify-between p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <i className={`${metric.icon} text-2xl text-blue-500`}></i>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {metric.name}
                  </h3>
                  <p className="text-sm text-gray-500">{metric.value}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p
                  className={`text-sm font-semibold ${
                    metric.isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Analytics;
