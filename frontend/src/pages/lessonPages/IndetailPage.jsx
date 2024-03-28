import React from "react";
import { useParams } from "react-router-dom";

const IndetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>the id is {id}</h1>
      <div>
        <article class="hover:animate-background rounded-xl bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] mx-9 mt-5">
          <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>

            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
              How to center an element using JavaScript and jQuery
            </h3>
            <div>asdf</div>

            <div class="mt-4 flex flex-wrap gap-1">
              <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                Snippet
              </span>

              <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                JavaScript
              </span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default IndetailPage;
