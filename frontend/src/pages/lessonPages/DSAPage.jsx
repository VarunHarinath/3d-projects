import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DSAPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "http://13.235.176.186:3000/lessonDsa"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      <div>
        <p className="text-lg m-5 font-semibold text-sky-400 text-center my-9 ">
          Basic Data Structures
        </p>
        <div>
          {data.map((item, index) => (
            <article class="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mx-20 my-8">
              <div class="flex items-start sm:gap-8">
                <div
                  class="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                  aria-hidden="true"
                >
                  <div class="flex items-center gap-1">
                    <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                    <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                    <span class="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                    <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                    <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                  </div>
                </div>

                <div>
                  <strong class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                    Lesson #{index + 1}
                  </strong>

                  <h3 class="mt-4 text-lg font-medium sm:text-xl">
                    <Link to={`/DSApage/${item._id}`} class="hover:underline">
                      {item.title}
                    </Link>
                  </h3>

                  <p class="mt-1 text-sm text-gray-700">{item.description}</p>

                  <div class="mt-4 sm:flex sm:items-center sm:gap-2">
                    <div class="flex items-center gap-1 text-gray-500">
                      <svg
                        class="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
                        ></path>
                      </svg>

                      <p class="text-xs font-medium">{item.points}</p>
                    </div>

                    <span class="hidden sm:block" aria-hidden="true">
                      &middot;
                    </span>

                    <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                      Published on {item.publishYear}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default DSAPage;
