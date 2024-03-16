import axios from "axios";
import React, { useState } from "react";

export default function Mark() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query) {
      setError("Please enter an app idea.");
      return;
    }
    setLoading(true);
    setError(null);

    const url = `http://127.0.0.1:5000/plan?q=${query}`;
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    setError(null); // Reset error when input changes
  };

  const {
    AppNames = [],
    ProjectFeatures = [],
    colorPalette = [],
    techStack = [],
    todoItems = [],
  } = data;

  return (
    <div className="bg-gray-200 h-[800px] overflow-y-scroll py-12 px-4 sm:px-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Project Details</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <input
              id="appIdea"
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Enter App Idea"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
          {error ? <p className="text-red-500 text-center">{error}</p>:""}
        </form>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="max-w-3xl mx-auto">
            {AppNames.length ? <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Suggested App Names:</h2>
              <ul className="list-disc pl-4">
                {AppNames.map((app, index) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
              <ul></ul>
            </div>: ""}

            {ProjectFeatures.length ? (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">
                  Project Features:
                </h2>
                <ul className="list-disc pl-4">
                  {ProjectFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}

            {colorPalette.length ? (
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
            ) : (
              ""
            )}

            {techStack.length ? (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Tech Stack:</h2>
                <ul className="list-disc pl-4">
                  {techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}

            {todoItems.length ? (
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
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}
