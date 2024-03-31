import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";
import { BiPurchaseTag } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";


const Storepolicy = () => {
  return (
    <>
      <h1 className="text-center font-thin text-[1.2rem] text-[#309aac] mt-[34px]">
        Enchanting Epics
      </h1>
      <h1 className="text-center font-extrabold font-serif text-[#309aac] text-[3rem] mb-5 ">
        Store Policy
      </h1>
      {/* Shipping & Return MAIN CONTAINER */}
      <div className="flex justify-center flex-col  mb-[120px]  md:mx-[120px] ">
        {/* Shipping & Return Body Container   */}
        <div className="flex justify-center flex-col border-[15px] bg-white border-[#e7f1f0]   p-10 ">
          <div className="flex items-center gap-2">
            <RiCustomerService2Fill className="text-[#309aac] text-[1.5rem] font-bold " />
            <h1 className="text-[#309aac] text-[1.5rem] font-bold ">
              Customer Care
            </h1>
          </div>
          <br />
          {/* Shipping & Return BODY */}
          <div className="flex flex-col justify-center">
            <p className="text-lg  text-[#309aac] font-thin tracking-widest">
              • Contact Information: <br />
              <span className="font-bold">
                {" "}
                Email:{" "}
              </span> support@example.com <br />{" "}
              <span className="font-bold"> Phone: </span> 1-800-123-4567 <br />{" "}
              <span className="font-bold">Live Chat:</span>
              Available on our website during business hours. <br /> <br />
              • Order Assistance: <br />
              Our customer care team is available to assist you with order
              tracking, returns, exchanges, and any other questions you may have
              about your purchase. <br /> <br />
              • Product Support: <br />
              Need help with product recommendations or troubleshooting? Our
              experts are here to assist you with any product-related inquiries.{" "}
              <br /> <br />
              • Feedback and Suggestions: <br />
              We welcome your feedback and suggestions! Feel free to share your
              thoughts with us to help improve our products and services. <br />{" "}
              <br />
            </p>{" "}
            <br />
            <div className="flex items-center gap-2">
              <AiOutlineSafety className="text-[#309aac] text-[1.5rem] font-bold " />
              <h1 className="text-[#309aac] text-[1.5rem] font-bold ">
                Privacy & Safety
              </h1>{" "}
              <br /> <br />
            </div>
            <p className="text-lg  text-[#309aac] font-thin tracking-widest">
              Data Protection: <br />
              We take your privacy seriously and adhere to strict data
              protection measures to ensure the security of your personal
              information. <br /> <br />
              Secure Transactions: <br />
              Shop with confidence knowing that all transactions on our website
              are encrypted and secure. <br /> <br />
              Privacy Policy: <br />
              Our privacy policy outlines how we collect, use, and protect your
              personal information. You can review it to understand how we
              handle your data. <br /> <br />
              Safety Measures: <br />
              We regularly update and maintain our website to ensure it is safe
              and secure for our customers. Additionally, we conduct security
              audits to identify and address any potential vulnerabilities.{" "}
              <br /> <br />
            </p>
            <div className="flex items-center gap-2">
              <BiPurchaseTag className="text-[#309aac] text-[1.5rem] font-bold " />
              <h1 className="text-[#309aac] text-[1.5rem] font-bold ">
                Wholesale Inquiries
              </h1>{" "}
              <br /> <br />
            </div>
            <p className="text-lg  text-[#309aac] font-thin tracking-widest">
              Wholesale Program: <br />
              Interested in becoming a wholesale partner? Learn more about our
              wholesale program and the benefits of partnering with us. <br />{" "}
              <br />
              Bulk Ordering: <br />
              Take advantage of discounted rates by placing bulk orders for
              books. Perfect for resellers, distributors, and businesses looking
              to stock up on inventory. <br /> <br />
              Customization Options: <br />
              Customize your bulk orders with personalized packaging and
              branding options to make your products stand out. <br /> <br />
              Wholesale Support: <br />
              Our dedicated wholesale team is available to assist you with
              pricing, product availability, and logistics for your wholesale
              orders. Contact us for more information. <br /> <br />
            </p>
            <div className="flex items-center gap-2">
              <MdOutlinePayment className="text-[#309aac] text-[1.5rem] font-bold " />
              <h1 className="text-[#309aac] text-[1.5rem] font-bold ">
                Payment Methods
              </h1>{" "}
              <br /> <br />
            </div>
            <p className="text-lg  text-[#309aac] font-thin tracking-widest">
              • Credit / Debit Cards <br /> • PAYPAL <br /> • Offline Payments{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storepolicy;
