import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Lessons = () => {
  return (
    <div className="p-4">
      <div>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mt-5 w-full">
          <div class="md:flex">
            <div class="p-8">
              <div class="uppercase tracking-wide text-smtext-slate-400 hover:text-sky-400"></div>
              <p class="block mt-1 text-2xl leading-tight font-semibold text-black blue-gradient_text drop-shadow">
                Basic Data Structures
              </p>
              <p class="mt-2 text-gray-500">Description:</p>
              <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <Link to="/DSApage"> Start Learning</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mt-5 w-full">
          <div class="md:flex">
            <div class="p-8">
              <div class="uppercase tracking-wide text-smtext-slate-400 hover:text-sky-400"></div>
              <p class="block mt-1 text-2xl leading-tight font-semibold text-black blue-gradient_text drop-shadow">
                Advanced Algorithms
              </p>
              <p class="mt-2 text-gray-500">Description:</p>
              <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <Link to="/AlgoPage"> Start Learning</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
