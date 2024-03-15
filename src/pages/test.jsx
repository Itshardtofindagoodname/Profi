import React from "react";

const App = () => {
  const { AppNames, ProjectFeatures, colorPalette, techStack, todoItems } =
    data;

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Project Details</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Apps:</h2>
          <ul className="list-disc pl-4">
            {AppNames.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Project Features:</h2>
          <ul className="list-disc pl-4">
            {ProjectFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Color Palette:</h2>
          <div className="flex">
            {colorPalette.map((color, index) => (
              <div
                key={index}
                className="w-12 h-12 mr-4 rounded-lg shadow-lg"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Tech Stack:</h2>
          <ul className="list-disc pl-4">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">To-Do Items:</h2>
          <ul className="list-disc pl-4">
            {todoItems.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`todo-${index}`}
                  className="mr-2"
                />
                <label htmlFor={`todo-${index}`}>{item}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;

const data = {
  AppNames: ["UberEats", "Grubhub", "DoorDash", "Postmates", "Caviar"],
  ProjectFeatures: [
    "Real-time order tracking",
    "Personalized recommendations",
    "Exclusive discounts and promotions",
    "Easy checkout and payment options",
    "Customer support and feedback",
  ],
  colorPalette: ["#FF5252", "#FF8A8A", "#FFE3E3", "#000000", "#FFFFFF"],
  techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "AWS"],
  todoItems: [
    "Create a user interface",
    "Implement a payment system",
    "Integrate with delivery services",
    "Add features such as tracking and notifications",
  ],
};
