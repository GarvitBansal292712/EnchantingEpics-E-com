import React from "react";
const Footer = () => {
  return (
    // footer container
    <div className="flex flex-col flex-wrap bg-[#0e345a] text-white justify-center items-center p-5">
      {/* Footer Body Container */}
      <div className="flex flex-wrap m-8 justify-center gap-[50px] md:gap-[110px]">
         {/* Address Column */}
            <div className="flex flex-col gap-5  md:gap-10">
            <h1>Enchanting Epics</h1>
            <p className="leading-[30px]">
                500 Terry Francine St. <br /> San Francisco, <br /> CA 94158
                123-456-7890 <br />
                garvitbasnal2303@gmail.com
            </p>
            </div>
            {/* More Info Column */}
            <div className="flex flex-col gap-5  md:gap-10">
            <h1>Shop</h1>
            <ul >
                <li className="hover:underline mb-[8px]">
                <a href="" >FAQ</a>
                </li>
                {/* Later these anchor tags will be changed according to the react router */}
                <li className="hover:underline mb-[8px]">
                <a href="">Shipping & Returns</a>
                </li>
                {/* Later these anchor tags will be changed according to the react router */}
                <li className="hover:underline mb-[8px]">
                <a href="">Store Policy</a>
                </li>
                {/* Later these anchor tags will be changed according to the react router */}
                <li className="hover:underline mb-[8px]">
                <a href="">Payment Methods</a>
                </li>
                {/* Later these anchor tags will be changed according to the react router */}
            </ul>
            </div>
            {/* Social Handles */}
            <div className="flex flex-col gap-5  md:gap-10">
            <h1>Socials</h1>
            <ul>
                <li className="hover:underline mb-[8px]">
                <a href="">Facebook</a>
                </li>

                <li className="hover:underline mb-[8px]">
                <a href="">X (Twitter)</a>
                </li>

                <li className="hover:underline mb-[8px]">
                <a href="">Instagram</a>
                </li>

                <li className="hover:underline mb-[8px]">
                <a href="">Pinterest</a>
                </li>
            </ul>
            </div>
            {/* Newsletter Subs Column */}
            <div className="flex flex-col">
            <h1 className="mb-[40px]">Sign up for our newsletter</h1>

            <input
                type="email"
                className="bg-transparent border-4 border-white p-2 mb-1"
                placeholder="Enter Your Email here.."
            />
            <button className="bg-white p-2 text-[#0e345a] hover:bg-[#0e345a] transition-all hover:text-[#ffffff]">
                Subscribe
            </button>
            </div>
      </div>
      {/* Copyright Row */}
      <div>
        <p>© 2024 by Enchanting Epics</p>
      </div>
    </div>
  );
};

export default Footer;
