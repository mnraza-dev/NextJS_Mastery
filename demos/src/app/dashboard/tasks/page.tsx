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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl bg-white rounded-2xl shadow-lg p-8 space-y-8 mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Tasks</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-blue-800">
                {task.title}
              </h2>
              <p className="text-gray-700">{task.description}</p>
              <p className="text-gray-600">
                <strong>Status:</strong> {task.status}
              </p>
              <p className="text-gray-600">
                <strong>Due Date:</strong> {task.dueDate}
              </p>
              <p className="text-gray-600">
                <strong>Priority:</strong> {task.priority}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
