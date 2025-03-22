import React from "react";
import UserById from "./component/UserById";
import RandomUser from "./component/RandomUser";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          User Finder App 🚀
        </h1>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            🔍 Search User By ID
          </h2>
          <UserById />
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            🎲 Get Random User
          </h2>
          <RandomUser />
        </div>
      </div>
    </div>
  );
}

export default App;
