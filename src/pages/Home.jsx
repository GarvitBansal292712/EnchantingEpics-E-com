import React from "react";
import ProductData from "../components/ProductData";
import herofullimg from "../assets/images/herofullimg.jpg";
import { NavLink } from "react-router-dom";
import { addToCart } from "../components/cartLogic";
import {useTemporaryMessage} from "../components/addToCartMessage";

// import design4img from "../assets/images/design4img.jpg";

const Home = () => {
  const [message, setMessage] = useTemporaryMessage();

  const handleAddtoCart = (product) => {
    addToCart(product);
    setMessage('Item added to cart!');
  
  };

  // Filter Products for Best seller category
  const bestsllersProducts = ProductData.filter(
    (product) => product.category === "bestseller"
  );

  // Filter Products for Best seller category
  const bookOftheMonth = ProductData.filter(
    (product) => product.category === "bookofthemonth"
  );
  return (
    <>
    {message && (
        <div className="flex justify-center absolute top-0 left-0 w-full z-50">
          <div
            role="alert"
            className=" backdrop-blur-md rounded-xl border transition-all  p-4  flex justify-center items-center w-[20vw] "
          >
            <div className="flex items-start gap-4">
              <span className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              <div className="flex-1">
                <strong className="block font-medium text-black ">
                  {" "}
                  {message}{" "}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
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
      <h1 className="text-center font-thin text-[1.2rem] text-[#a985cd] mt-[34px]">
        Enchanting Epics
      </h1>
      <h1 className="text-center font-extrabold font-serif text-[#734F96] text-[2rem] md:text-[3rem] mb-5 ">
        BESTSELLERS
      </h1>
      <div className="flex flex-col relative justify-center items-center md:mx-11 ">
        <div className="flex justify-center flex-wrap  gap-4 my-5">
          {/* THESE PRODUCTS ( BESTSELLER) WILL BE DYNAMICALLY LOADED */}
          {bestsllersProducts.map((product) => (
            <div
              key={product.id}
              className="text-center  text-white flex flex-col gap-3"
            >
              <NavLink to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt=""
                  className="w-full md:w-[180px] h-[180px]"
                />
                <h1>{product.name}</h1>
                <h1>{`$ ${product.price}.00`}</h1>
              </NavLink>
              <button
                onClick={() => handleAddtoCart(product, 1)}
                className=" w-full rounded-lg  text-white bg-[#a985cd] p-2 hover:bg-[#4f2d70]  transition-all "
              >
                Add to Cart
              </button>
            </div>
          ))}

          {/* THESE PRODUCTS ( BESTSELLER) WILL BE DYNAMICALLY LOADED */}
        </div>
        <hr className="text-white border-1 border-white w-8 mt-5" />
        <h1 className="text-center font-extrabold text-[1.2rem] text-[#ffffff] mt-5">
          This Month's
        </h1>
        <h1 className="text-center font-extrabold font-serif text-[#ffffff] text-[2rem] md:text-[3rem] mb-5 ">
          RECOMMENDED BOOKS
        </h1>
        <hr className="text-white border-1 border-white w-8 " />
        <div className="flex justify-center flex-wrap  gap-4 my-5">
          {/*THESE PRODUCTS ( BOOK OF THE MONTH) WILL BE DYNAMICALLY LOADED*/}
          {bookOftheMonth.map((product) => (
            <div
              key={product.id}
              className="text-center text-white flex flex-col gap-3"
            >
              <NavLink to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt=""
                  className="w-full md:w-[180px] h-[180px]"
                />
                <h1>{product.name}</h1>
                <h1>{`$ ${product.price}.00`}</h1>
              </NavLink>
              <button  onClick={()=>handleAddtoCart(product, 1)} className=" w-full rounded-lg  text-white bg-[#a985cd] p-2 hover:bg-[#4f2d70]  transition-all ">
                Add to Cart
              </button>
            </div>
          ))}

          {/* THESE PRODUCTS ( BOOK OF THE MONTH) WILL BE DYNAMICALLY LOADED */}
        </div>
        <hr className="text-white border-1 border-white w-8 mt-5" />

        <h1 className="text-center font-extrabold font-serif text-[#ffffff] text-[2rem] md:text-[5rem] mt-5 ">
          THERE'S NO <br />
          SUCH THING AS TOO <br />
          MANY BOOKS
        </h1>
        {/* Router REQUIRED */}
        <NavLink
          to="/about"
          className=" rounded-lg  text-white bg-[#a985cd] p-2 hover:bg-[#4f2d70]  transition-all "
        >
          Read Our Story
        </NavLink>
        <hr className="text-white border-1 border-white w-8 mt-11 mb-5" />

        <div className="bg-[#734F96] h-full w-full top-[120px] -z-10 absolute"></div>
      </div>
    </>
  );
};

export default Home;
