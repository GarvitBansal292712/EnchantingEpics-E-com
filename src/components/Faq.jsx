import React from "react";

const Faq = () => {
  return (
    <>
      <h1 className="text-center font-thin text-[1.2rem] text-[#0e345a] mt-[34px]">
        Frequently Asked
      </h1>
      <h1 className="text-center font-extrabold font-serif text-[#0e345a] text-[3rem] mb-5 ">
        QUESTIONS
      </h1>
      {/* FAQS MAIN CONTAINER */}
      <div className="flex justify-center flex-col  mb-[120px]  md:mx-[120px] ">
        {/* Font Body Container   */}
        <div className="flex justify-center flex-col border-[15px] bg-white border-[#0e345a] p-10 ">
          <h1 className="text-[#0e345a] text-[1.5rem] font-thin text-center">
            Frequently asked questions
          </h1>
          {/* FAQ BODY */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <details
                className="group border-s-4 border-[#0e345a]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg  text-gray-900 font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="shrink-0 rounded-full  bg-white p-1.5 text-gray-900 font-thin sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
              <details
                className="group border-s-4 border-[#0e345a]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg  text-gray-900 font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 font-thin sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
              <details
                className="group border-s-4 border-[#0e345a]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg  text-gray-900 font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 font-thin sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
              <details
                className="group border-s-4 border-[#0e345a]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg  text-gray-900 font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 font-thin sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
              <details
                className="group border-s-4 border-[#0e345a]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg  text-gray-900 font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 font-thin sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group border-s-4 border-[#0e345a]  bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-lg  text-gray-900 font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 font-thin sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
        {/* Background Gray Block
        <div className="-z-10 flex justify-center w-full bg-[#f2f2f2] h-[60vh]  mt-[-440px] "></div> */}
    </>
  );
};

export default Faq;
