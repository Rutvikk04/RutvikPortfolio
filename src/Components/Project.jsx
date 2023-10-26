import React from "react";

const Project = () => {
  return (
    <>
      <div className="my-3 w-full m-auto flex justify-center">
        <div className="border-b-2 w-full py-3">
          <div className="m-5 p-3 text-white bg-gray-500 rounded-md space-y-3">
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl ">1.ShopEasy.AI</h1>
              <h1 className="font-semibold">
                Organization : Webzeel Services pvt.ltd
              </h1>
            </div>
            <p>
              ShopEasy.ai Is An ai Based ecommerce Platform that Provides
              Ecommerce services similar to Shopify.An User Can Make it's own
              store and can easily maintain his store using Easy admin panel.
              Also User Can Connect Their Social Media platforms like
              WhatsApp,Facebook And Instagram to Increase Their Business Growth.
              This Product Has 3rd party APIs integration like ShipRocket for
              Shipping and Razorpay for Payment Gateaway That is easy to use and
              fast.Also There Is OpenAi Integration To Generate Contents Like
              description.
              <br></br>
              <br></br>
              The Project Has 3 Modules:<br></br>
              1.Super-Admin:Super-Admin is Operated By Team shopEasy to Handle
              Admins(store Owners) And Users(customers)
              <br />
              2.Admin:Admin Panel For Admin to Maintain And Customize Their
              Store .<br />
              3.User:Ecommerce WebApp Of Admins Where customers Can buy Admin
              Services
            </p>
            <button className="bg-white text-gray-700 font-bold cursor-pointer p-1 rounded-md hover:bg-[#f1f1f1] hover:text-black ">
              ShopEasy.ai
            </button>
          </div>
          <div className="m-5 p-3 text-white bg-gray-500 rounded-md space-y-3">
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl ">2.FreeLance Services</h1>
              <h1 className="font-semibold">
                Organization : Freelancer platforms
              </h1>
            </div>
            <p>
              I have successfully delivered Many Freelance Project on various Freelancer Platforms with Great Client Response.I delivered Various Pages like Data Table,Login Register,Portfolio Landing Page and So On..
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
