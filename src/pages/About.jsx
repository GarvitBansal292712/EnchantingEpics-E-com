import React from "react";
import aboutimg from "../assets/images/aboutimg.jpg";
const About = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-2 my-14 ">
            <div className=" w-full md:w-[50vw]">
            <img src={aboutimg} alt="" />
            </div>
            <div className="bg-[#FFFDD0] p-3">
            <h1 className="text-center font-thin text-[1.2rem] text-[#734F96] mt-[34px]">
                Our
            </h1>
            <h1 className="text-center font-extrabold font-serif text-[#734F96] text-[3rem] mb-5 ">
                Story
            </h1>
            <p className="text-center  text-[#734F96] ">
                Enchanting Epics began with a shared passion for literature <br />{" "}
                among a group of friends, who envisioned creating a welcoming
                community for <br />
                fellow book enthusiasts. Fuelled by their <br /> love for reading,
                they embarked on the journey of building <br /> a bookstore that
                would not only offer a diverse collection of books but also serve{" "}
                <br /> as a hub for literary discussions, author events, and reader
                connections. As the <br />
                bookstore grew, so did its commitment to promoting reading and
                celebrating the power <br /> of books. Through continuous evolution
                and adaptation, Enchanting Epics has remained <br />
                dedicated to fostering a love for literature and providing a space
                where <br /> readers of all ages and backgrounds can explore,
                discover, and connect <br /> with stories that inspire and enrich
                their lives.
            </p>
            </div>
      </div>
    </>
  );
};

export default About;
