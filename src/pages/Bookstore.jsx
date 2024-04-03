import React from "react";
import InteriorDesignBook from "../assets/images/InteriorDesignBook.jpg";

const Bookstore = () => {
  return (
    <>
      <div className="flex flex-col  md:flex md:flex-row">
        <div className="flex justify-center gap-2 bg-gray-50 md:flex md:flex-col md:w-[20vw] md:h-[100vh] ">
          <h1 className="hidden  md:text-center md:m-4 md:text-[1.5rem] md:block">
            Filter by
          </h1>
          <div>
            <details
              className="group  /* bg-gray-50 */ p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  Categories
                </h2>

                <span className="shrink-0 rounded-full  p-1.5 text-gray-900 sm:p-3">
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

              <div className="flex gap-3 p-4 flex-wrap justify-center items-center md:flex md:flex-col md:flex-start">
                <button className="bg-none text-[#309aac] hover:text-[#295c65] border-r-2 border-black pr-2 md:border-none">
                  All
                </button>
                <button className="bg-none text-[#309aac] hover:text-[#295c65] border-r-2 border-black pr-2 md:border-none">
                  Novels
                </button>
                <button className="bg-none text-[#309aac] hover:text-[#295c65] border-r-2 border-black pr-2 md:border-none">
                  Design et Art
                </button>
                <button className="bg-none text-[#309aac] hover:text-[#295c65] border-r-2 border-black pr-2 md:border-none">
                  Life Style
                </button>
                <button className="bg-none text-[#309aac] hover:text-[#295c65] border-r-2 border-black pr-2 md:border-none">
                  Books of the month
                </button>
                <button className="bg-none text-[#309aac] hover:text-[#295c65] border-r-2 border-black pr-2 md:border-none">
                  Bestsellers
                </button>
                <button className="bg-none text-[#309aac] hover:text-[#295c65] border-r-2 border-black pr-2 md:border-none">
                  Travel guides
                </button>
              </div>
            </details>
          </div>
          <div>
            <details
              className="group  p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">Pricing</h2>

                <span className="shrink-0 rounded-full  p-1.5 text-gray-900 sm:p-3">
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
              {/*Pricing Radio Buttons */}
              <div className="flex gap-3 pt-4 flex-wrap flex-col justify-center items-center md:flex  md:items-center">
                <div className="flex gap-2">
                  <label htmlFor="price10to20">
                    <input type="radio" name="price" id="price5to10" />
                    $5 - $10
                  </label>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="price10to20">
                    <input type="radio" name="price" id="price10to20" />
                    $10 - $20
                  </label>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="price20to30">
                    <input type="radio" name="price" id="price20to30" />
                    $20 - $30
                  </label>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="price30to40">
                    <input type="radio" name="price" id="price30to40" />
                    $30 - $40
                  </label>
                </div>
              </div>
            </details>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-center font-bold font-serif text-[1.2rem] text-[#309aac] mt-[34px]">
            Our
          </h1>
          <h1 className="text-center font-extrabold font-serif text-[#0e345a] text-[3rem] mb-5 ">
            BOOKSTORE
          </h1>
          <div className="flex justify-center flex-wrap  gap-10 my-5">
            {/* THESE WILL BE DYNAMICALLY LOADED */}
            <div className="text-center text-black flex flex-col gap-3">
              <img
                src={InteriorDesignBook}
                alt=""
                className="w-full md:w-[223px] h-[223px]"
              />
              <h1>Collen Hoover</h1>
              <h1>$22.00</h1>
              <button className="border-[3px] w-full  border-black bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
                Add to Cart
              </button>
            </div>
            <div className="text-center text-black flex flex-col gap-3">
              <img
                src={InteriorDesignBook}
                alt=""
                className="w-full md:w-[223px] h-[223px]"
              />
              <h1>Collen Hoover</h1>
              <h1>$22.00</h1>
              <button className="border-[3px] w-full  border-black bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
                Add to Cart
              </button>
            </div>
            <div className="text-center text-black flex flex-col gap-3">
              <img
                src={InteriorDesignBook}
                alt=""
                className="w-full md:w-[223px] h-[223px]"
              />
              <h1>Collen Hoover</h1>
              <h1>$22.00</h1>
              <button className="border-[3px] w-full  border-black bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
                Add to Cart
              </button>
            </div>
            <div className="text-center text-black flex flex-col gap-3">
              <img
                src={InteriorDesignBook}
                alt=""
                className="w-full md:w-[223px] h-[223px]"
              />
              <h1>Collen Hoover</h1>
              <h1>$22.00</h1>
              <button className="border-[3px] w-full  border-black bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
                Add to Cart
              </button>
            </div>
            <div className="text-center text-black flex flex-col gap-3">
              <img
                src={InteriorDesignBook}
                alt=""
                className="w-full md:w-[223px] h-[223px]"
              />
              <h1>Collen Hoover</h1>
              <h1>$22.00</h1>
              <button className="border-[3px] w-full  border-black bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
                Add to Cart
              </button>
            </div>
            <div className="text-center text-black flex flex-col gap-3">
              <img
                src={InteriorDesignBook}
                alt=""
                className="w-full md:w-[223px] h-[223px]"
              />
              <h1>Collen Hoover</h1>
              <h1>$22.00</h1>
              <button className="border-[3px] w-full  border-black bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
                Add to Cart
              </button>
            </div>
            <div className="text-center text-black flex flex-col gap-3">
              <img
                src={InteriorDesignBook}
                alt=""
                className="w-full md:w-[223px] h-[223px]"
              />
              <h1>Collen Hoover</h1>
              <h1>$22.00</h1>
              <button className="border-[3px] w-full  border-black bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
                Add to Cart
              </button>
            </div>
            <div className="text-center text-black flex flex-col gap-3">
              <img
                src={InteriorDesignBook}
                alt=""
                className="w-full md:w-[223px] h-[223px]"
              />
              <h1>Collen Hoover</h1>
              <h1>$22.00</h1>
              <button className="border-[3px] w-full  border-black bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
                Add to Cart
              </button>
            </div>
            {/* THESE WILL BE DYNAMICALLY LOADED */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookstore;
