import React from "react";
const Projects = () => {
  return (
    <div className="h-full space-y-4 w-full bg-gradient-to-b from-black to-gray-900 py- px-5">
        <div>
            <h1 className="text-xl font-medium text-sky-600  text-center ">
        Projects
      </h1>
      <h1 className="text-2xl font-medium text-gray-300 text-center">
        Witness my Creativity And skills here...
      </h1>
        </div>
      
      {/* Projects */}
      <div className="p-3 my-4 space-y-4 border-t border-gray-500 bg-gradient-to-b from-black to to-blue-950">
        <span className="p-1 font-medium text-2xl border-s-2 border-t-2 border-e-0 border-b-0 border-blue-500 ">
          Shopeasy.ai
        </span>
        <div>
          <b className="mr-3">Language & FrameWorks:</b>
          <span className="font-medium text-blue-500">
            React Js, Node Js,TailwindCSS MongoDb, Express Js,CloudFlare
          </span>
        </div>
        <p>
          ShopEasy.ai Is An ai Based ecommerce Platform that Provides Ecommerce
          services similar to Shopify.An User Can Make it's own store and can
          easily maintain his store using Easy admin panel. Also User Can
          Connect Their Social Media platforms like WhatsApp,Facebook And
          Instagram to Increase Their Business Growth. This Product Has 3rd
          party APIs integration like ShipRocket for Shipping and Razorpay for
          Payment Gateaway That is easy to use and fast.Also There Is OpenAi
          Integration To Generate Contents Like description.
          <br></br>
          <br></br>
          The Project Has 3 Modules:<br></br>
          1.Super-Admin:Super-Admin is Operated By Team shopEasy to Handle
          Admins(store Owners) And Users(customers)
          <br />
          2.Admin:Admin Panel For Admin to Maintain And Customize Their Store .
          <br />
          3.User:Ecommerce WebApp Of Admins Where customers Can buy Admin
          Services
        </p>
      </div>
      <div className="p-3 my-4 space-y-4 border-t border-gray-500 bg-gradient-to-b from-black to to-blue-950">
        <span className="p-1 font-medium text-2xl border-s-2 border-t-2 border-e-0 border-b-0 border-blue-500 ">
          BMI Calculator
        </span>
        <div>
          <b className="mr-3">Language & FrameWorks:</b>
          <span className="font-medium text-blue-500">
          Javascript
          </span>
        </div>
        <p>
          BMI calculator is simply used to measure body mass index from your height and weight.This calculator gives how underweight or overweighted you are.<br/>
          This project was developed by me when i was learning about Javascript.I used complete maths and javascript maths functions.However i was not so good in CSS so this project has intermediate CSS.
        </p>
      </div>
    </div>
  );
};

export default Projects;
