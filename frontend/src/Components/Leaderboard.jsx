import React from "react";

// Sample data for the leaderboard
const users = [
  { id: 1, name: "User 1", score: 100 },
  { id: 2, name: "User 2", score: 90 },
  { id: 3, name: "User 3", score: 80 },
  { id: 4, name: "User 4", score: 70 },
  { id: 5, name: "User 5", score: 60 },
];

const Leaderboard = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-lg font-semibold text-center mb-4">Leaderboard</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="px-4 py-2 border-b last:border-b-0 flex justify-between items-center"
          >
            <span>{user.name}</span>
            <span className="font-semibold">{user.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
