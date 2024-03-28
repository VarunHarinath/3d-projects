import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const IndetailPageDsa = () => {
  const { id } = useParams();
  const [data, setData] = useState(null); // Start with null to reflect 'not loaded' state

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `http://13.235.176.186:3000/lessonDsa/${id}`
        );
        setData(response.data);
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
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] mx-9 mt-5">
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time
            dateTime={data.createdAt}
            className="block text-xs text-gray-500"
          >
            {data.createdAt}
          </time>

          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {data.title}
          </h3>
          <div>{data.content}</div>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              {data.points}
            </span>

            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
              {data.publishYear}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default IndetailPageDsa;
