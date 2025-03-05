import React from "react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      status: "completed",
      dueDate: "2021-09-01",
      priority: "high",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      status: "in-progress",
      dueDate: "2021-09-02",
      priority: "medium",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      status: "not-started",
      dueDate: "2021-09-03",
      priority: "low",
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description 4",
      status: "completed",
      dueDate: "2021-09-04",
      priority: "high",
    },
    {
      id: 5,
      title: "Task 5",
      description: "Description 5",
      status: "in-progress",
      dueDate: "2021-09-05",
      priority: "medium",
    },
    {
      id: 6,
      title: "Task 6",
      description: "Description 6",
      status: "not-started",
      dueDate: "2021-09-06",
      priority: "low",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50  p-8">
      <div className="max-w-7xl bg-white rounded-lg  shadow-sm p-8  mx-auto">
        <h1 className="text-3xl mb-8  font-bold text-gray-800">Tasks</h1>
        {/* tasks list section  */}
        <section className="space-y-6">
          {tasks.map((task) => (
            <div
              style={{
                borderColor:
                  task.status === "completed"
                    ? "green"
                    : task.status === "in-progress"
                    ? "yellow"
                    : "red",
              }}
              key={task.id}
              className=" flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
            >
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {" "}
                  {task.description}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Due Date: {task.dueDate}
                </p>
              </div>

              <section className="flex space-x-4">
                <span
                  className={` text-sm text-gray-600 px-4 py-3  text-center rounded-xl  ${
                    task.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : task.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {task.status}
                </span>
                {/* Action Buttons */}

                <button className="cursor-pointer  px-4 py-2 bg-blue-600 rounded-lg  text-white hover:bg-blue-700 transition-colors ">
                  Edit
                </button>
                {
                  task.status !== "completed" && (
                    <button className="cursor-pointer px-4 py-2 bg-green-100 rounded-lg  text-green-800 hover:bg-green-200 transition-colors ">
                    Mark as Complete
                    </button>
                  )
                }
                <button className="cursor-pointer px-4 py-2 bg-red-600 rounded-lg  text-white hover:bg-red-700 transition-colors ">
                  Delete
                </button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
