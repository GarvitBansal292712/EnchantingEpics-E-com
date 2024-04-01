import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactUs = () => {
  return (
    <>
      <h1 className="text-center font-thin text-[1.2rem] text-[#309aac] mt-[34px]">
        For More Info
      </h1>
      <h1 className="text-center font-extrabold font-serif text-[#309aac] text-[3rem] mb-5 ">
        CONTACT US
      </h1>
      {/* CONTACT US MAIN CONTAINER */}
      <div className="flex justify-center flex-col  mb-[120px]  md:mx-[120px] ">
        {/* CONTACT US Body Container   */}
        <div className="flex justify-evenly border-[15px] bg-white border-[#e7f1f0] p-10 flex-wrap  ">
          {/* First Address Lane  */}
          <div className="text-[#309aac] text-center flex flex-col gap-3 border-b-2 border-[#e7f1f0] p-2">
            <h1 className="text-center font-bold text-[1.4rem] text-[#309aac] ">
              Store 01
            </h1>
            <p className="font-bold">Address:</p>
            <p className="leading-[30px]">
              Hogwarts School of Witchcraft and Wizardry
              <br /> The Castle, <br /> Hogsmeade, Scotland <br />
              United Kingdom <br />
            </p>
            <p className="font-bold">Contact:</p>
            <p>
              Only Letters Recieved
              <br />
            </p>
            <p className="font-bold">Email:</p>
            <p>garvitbansal2303@gmail.com</p>
          </div>
          {/* Second Address Lane  */}
          <div className="text-[#309aac] text-center flex flex-col gap-3 border-b-2 border-[#e7f1f0] p-2">
            <h1 className="text-center font-bold text-[1.4rem] text-[#309aac] ">
              Store 02
            </h1>
            <p className="font-bold">Address:</p>
            <p>
              Hogwarts School of Witchcraft and Wizardry <br />
              Room of Requirement <br />
              7th Floor, North Tower <br />
              Hogsmeade, Scotland <br />
              United Kingdom
            </p>
            <p className="font-bold">Contact:</p>
            <p>
              Only Letters Recieved
              <br />
            </p>
            <p className="font-bold">Email:</p>
            <p>garvitbansal2303@gmail.com</p>
          </div>
          {/* Third Address Lane  */}
          <div className="text-[#309aac] text-center flex flex-col gap-3 border-b-2 border-[#e7f1f0] p-2">
            <h1 className="text-center font-bold text-[1.4rem] text-[#309aac] ">
              Customer service
            </h1>

            <p className="font-bold">Email:</p>
            <p>garvitbansal2303@gmail.com</p>
            <div className="flex justify-center  gap-2">
              <FaXTwitter />
              <FaFacebookF />
              <FaInstagram />
            </div>
          </div>
        {/* Contact Form Container */}
        <div className="flex items-center justify-between flex-wrap mt-3 md:mx-[59px]">
          <input type="text" name="" id="" placeholder="Name" className=" w-[30vw] my-2 p-2 border-b-2 border-[#309aac]" />
          <input type="email" name="" id="" placeholder="Email" className=" w-[30vw] my-2 p-2 border-b-2 border-[#309aac]"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Type your message here..." className=" w-full p-2 border-b-2 border-[#309aac]" ></textarea>

        </div>
        <div className="m-4">
          <button className="text-[#309aac] hover:text-[#309aacd2]  ">
            Submit
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
