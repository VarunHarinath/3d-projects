import React from "react";

const About = () => {
  return (
    <>
      <section className=" ml-60 mt-20 ">
        <h1 className="head-text">
          Hello{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            UserName
          </span>{" "}
          👋
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Looks Like You are Very Intreseted to Know about us? Then have a
            looK!
          </p>
        </div>
      </section>
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Meet our{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              {" "}
              Developers
            </span>{" "}
          </h2>

          <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div class="flex items-center gap-4">
                <div>
                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Sindhu Ravuri
                  </p>
                </div>
              </div>
              <p class="mt-4 text-gray-700">
                I've been working on the core componenets and the main
                functionality of the app.
              </p>
            </blockquote>
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div class="flex items-center gap-4">
                <div>
                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Sarthak Aitha
                  </p>
                </div>
              </div>
              <p class="mt-4 text-gray-700">
                It's been a long day deeling with the databases.., I handle all
                you guys :)
              </p>
            </blockquote>
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div class="flex items-center gap-4">
                <div>
                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Reshmi Kumari
                  </p>
                </div>
              </div>
              <p class="mt-4 text-gray-700">
                Phew ! Finally The site is smooth , it's real hard as a project
                manager
              </p>
            </blockquote>
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div class="flex items-center gap-4">
                <div>
                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Varun Harnath
                  </p>
                </div>
              </div>
              <p class="mt-4 text-gray-700">
                You could already say that i have good taste in colors and
                design
              </p>
            </blockquote>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
