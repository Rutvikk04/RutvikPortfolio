import React from "react";
import {
  Github,
  Linkedin,
  Mail,
} from "feather-icons-react/build/IconComponents";
const SocialMedia = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center px-5">
      <div className="hover:shadow-md rounded-full hover:shadow-white cursor-pointer p-1">
        <Github />
      </div>
      <div className="hover:shadow-md rounded-full hover:shadow-white cursor-pointer p-1">
      <Linkedin />
      </div>
      <div className="hover:shadow-md rounded-full hover:shadow-white cursor-pointer p-1">
      <Mail />
      </div> 
    </div>
  );
};

export default SocialMedia;
