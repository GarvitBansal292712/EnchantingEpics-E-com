import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
const Shippingreturn = () => {
  return (
    <>
      <h1 className="text-center font-thin text-[1.2rem] text-[#309aac] mt-[34px]">
        Enchanting Epics
      </h1>
      <h1 className="text-center font-extrabold font-serif text-[#309aac] text-[3rem] mb-5 ">
        Shipping & Returns
      </h1>
      {/* Shipping & Return MAIN CONTAINER */}
      <div className="flex justify-center flex-col  mb-[120px]  md:mx-[120px] ">
        {/* Shipping & Return Body Container   */}
        <div className="flex justify-center flex-col border-[15px] bg-white border-[#e7f1f0] p-10 ">
          <div className="flex items-center gap-2">
            <MdLocalShipping className="text-[#309aac] text-[1.5rem] font-bold " />
            <h1 className="text-[#309aac] text-[1.5rem] font-bold ">
              Shipping Policy
            </h1>
          </div>
          <br />
          {/* Shipping & Return BODY */}
          <div className="flex flex-col justify-center">
            <p className="text-lg  text-[#309aac] font-thin tracking-widest">
              Welcome to our book store! We're excited to deliver your favorite
              reads to your doorstep. Please review the following information to
              understand how your orders will be shipped. <br />
              <br />
              • Shipping Methods: <br />
              We offer standard shipping for all orders within our shipping
              regions. <br /> <br />
              • Processing Time: <br />
              Orders are typically processed within 1-3 business days after
              payment confirmation. Please note that orders placed on weekends
              or holidays may be processed on the next business day. <br />{" "}
              <br />
              • Shipping Rates: <br />
              Shipping rates are calculated based on the weight of your order
              and your shipping address. You can view the shipping cost during
              the checkout process before completing your purchase. <br />{" "}
              <br />
              • Shipping Confirmation: <br />
              Once your order has been shipped, you will receive a shipping
              confirmation email with tracking information. You can use this
              information to track the status of your delivery. <br /> <br />
              • Shipping Regions: <br />
              We currently ship to addresses within the United States. We are
              working on expanding our shipping regions to serve more book
              lovers in the future. <br /> <br />
              If you have any questions or concerns about your order or
              shipping, please contact our customer support team. Happy reading!
              <br /> <br />
            </p>{" "}
            <br />
            <div className="flex items-center gap-2">
              <FaExchangeAlt className="text-[#309aac] text-[1.5rem] font-bold " />
              <h1 className="text-[#309aac] text-[1.5rem] font-bold ">
                Return & Exchange Policy
              </h1>{" "}
              <br /> <br />
            </div>
            <p className="text-lg  text-[#309aac] font-thin tracking-widest">
              We want you to love every book you purchase from us. If for any
              reason you are not satisfied, you may return or exchange eligible
              items within 6-7 days of receiving your order. Please review the
              following information to understand our return and exchange
              policy. <br /> <br />
              • Eligibility: <br />
              To be eligible for a return or exchange, books must be unused and
              in their original condition. We do not accept returns or exchanges
              for digital downloads or audiobooks. <br /> <br />
              • Return Process: <br />
              To initiate a return, please contact our customer support team
              with your order number and details about the items you wish to
              return. We will provide you with instructions on how to return
              your books. <br /> <br />
              • Refunds: <br />
              Once your return is received and inspected, we will notify you of
              the approval or rejection of your refund. If approved, your refund
              will be processed, and a credit will be automatically applied to
              your original method of payment within [X] business days. <br />{" "}
              <br />
              • Exchanges: <br />
              If you would like to exchange a book for a different title or
              edition, please contact our customer support team to arrange the
              exchange. We will provide you with instructions on how to return
              the original book and process the exchange. <br /> <br />
              • Return Shipping: <br />
              Return shipping costs are the responsibility of the customer
              unless the return is due to an error on our part or a defective
              item. We recommend using a trackable shipping service to ensure
              that your return is received. <br /> <br />
              If you have any questions or concerns about our return and
              exchange policy, please contact our customer support team. Happy
              reading! <br /> <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shippingreturn;
