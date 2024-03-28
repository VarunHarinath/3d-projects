import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const IndetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]); // Assuming the fetched data might be an object

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `http://13.235.176.186:3000/lessonAlgo/${id}`
        );
        setData(Array.isArray(response.data) ? response.data : [response.data]); // Ensure data is always an array
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };
    fetchApi();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <article
          key={index}
          className="hover:animate-background rounded-xl bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] mx-9 mt-5"
        >
          <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time
              dateTime={item.createdAt}
              className="block text-xs text-gray-500"
            >
              {item.createdAt}
            </time>

            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              {item.title}
            </h3>
            <div>{item.content}</div>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                {item.points}
              </span>

              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                {item.publishYear}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default IndetailPage;
