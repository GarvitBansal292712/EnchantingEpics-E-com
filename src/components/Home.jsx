import React from "react";
import herofullimg from "../assets/images/herofullimg.jpg";
import InteriorDesignBook from "../assets/images/InteriorDesignBook.jpg";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="flex justify-center relative md:mx-11 ">
        <img src={herofullimg} alt="" className="" />
        <div className="z-10 absolute inset-0  flex justify-start items-center ml-12 py-2">
          <h1 className="text-blue-800 leading-normal font-serif font-extrabold text-[1.3rem] md:text-[3rem] lg:text-[4.2rem]">
            A SOFA, <br />
            A GOOD <br /> BOOK, <br />
            AND YOU.
          </h1>
        </div>
      </div>
      <h1 className="text-center font-thin text-[1.2rem] text-[#309aac] mt-[34px]">
        Enchanting Epics
      </h1>
      <h1 className="text-center font-extrabold font-serif text-[#309aac] text-[2rem] md:text-[3rem] mb-5 ">
        BESTSELLERS
      </h1>
      <div className="flex flex-col relative justify-center items-center md:mx-11 ">
        <div className="flex justify-center flex-wrap  gap-4 my-5">
          {/* THESE WILL BE DYNAMICALLY LOADED */}
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          {/* THESE WILL BE DYNAMICALLY LOADED */}
        </div>
        <hr className="text-black border-1 border-black w-8 mt-5" />
        <h1 className="text-center font-extrabold text-[1.2rem] text-[#ffffff] mt-5">
          This Month's
        </h1>
        <h1 className="text-center font-extrabold font-serif text-[#ffffff] text-[2rem] md:text-[3rem] mb-5 ">
          RECOMMENDED BOOKS
        </h1>
        <hr className="text-black border-1 border-black w-8 " />
        <div className="flex justify-center flex-wrap  gap-4 my-5">
          {/* THESE WILL BE DYNAMICALLY LOADED */}
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          <div className="text-center text-white flex flex-col gap-3">
            <img
              src={InteriorDesignBook}
              alt=""
              className="w-full md:w-[180px] h-[180px]"
            />
            <h1>Collen Hoover</h1>
            <h1>$22.00</h1>
            <button className="border-[3px] w-full  border-white bg-none p-2  hover:bg-black hover:text-white hover:border-none transition-all ">
              Add to Cart
            </button>
          </div>
          {/* THESE WILL BE DYNAMICALLY LOADED */}
        </div>
        <hr className="text-black border-1 border-black w-8 mt-5" />

        <h1 className="text-center font-extrabold font-serif text-[#ffffff] text-[2rem] md:text-[5rem] mt-5 ">
          THERE'S NO <br />
          SUCH THING AS TOO <br />
          MANY BOOKS
        </h1>
        {/* Router REQUIRED */}
        <NavLink to="/about" className="border-[3px]  border-white bg-none py-2 px-5 cursor-pointer hover:bg-black hover:text-white transition-all ">
          Read Our Story
        </NavLink>
        <hr className="text-black border-1 border-black w-8 mt-11 " />

        <div className="bg-[#309aac] h-full w-full top-[120px] -z-10 absolute"></div>
      </div>

    </>
  );
};

export default Home;
