import React from "react";

const AuthLayoutButton: React.FC<AuthLayoutButtonPropsInterface> = ({
  title,
  clickListener,
}) => {
  return (
    <div className="flex justify-center" onClick={clickListener}>
      <a
        href="#"
        className="relative flex items-center px-[30px] py-[8px] font-semibold text-[30px] text-[#efefef] hover:text-accent bg-[#4184f3]/5 rounded-full shadow-[0_0_0.2em_#4184f3] font-poppins transition duration-1000 hover:shadow-[0_0_0.4em_#4184f3] outline outline-transparent outline-offset-2 group"
      >
        <span className="z-10">{title}</span>
        <span className="ml-[15px] relative top-[6%] w-[20px] transition-all duration-500 group-hover:mr-[25px] scale-[0.6]">
          <svg
            width="66"
            height="43"
            viewBox="0 0 66 43"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path
                d="M40.15,3.89L43.98,0.14C44.17,-0.05,44.48,-0.05,44.68,0.14L65.69,20.78C66.09,21.17,66.09,21.81,65.70,22.20L44.68,42.86C44.48,43.05,44.17,43.05,43.98,42.86L40.15,39.11C39.96,38.91,39.95,38.60,40.15,38.40L56.99,21.86C57.19,21.66,57.19,21.35,57.00,21.15L40.15,4.61C39.96,4.41,39.95,4.10,40.15,3.90Z"
                className="translate-x-[-60%] group-hover:translate-x-0 transition-transform duration-500 fill-white group-hover:fill-[#4184f3]"
              />
              <path
                d="M20.15,3.89L23.98,0.14C24.17,-0.05,24.48,-0.05,24.68,0.14L45.69,20.78C46.09,21.17,46.09,21.81,45.70,22.20L24.68,42.86C24.48,43.05,24.17,43.05,23.98,42.86L20.15,39.11C19.96,38.91,19.95,38.60,20.15,38.40L36.99,21.86C37.19,21.66,37.19,21.35,37.00,21.15L20.15,4.61C19.96,4.41,19.95,4.10,20.15,3.90Z"
                className="translate-x-[-30%] group-hover:translate-x-0 transition-transform duration-500 fill-white group-hover:fill-[#4184f3]"
              />
              <path
                d="M0.15,3.89L3.98,0.14C4.17,-0.05,4.48,-0.05,4.68,0.14L25.69,20.78C26.09,21.17,26.09,21.81,25.70,22.20L4.68,42.86C4.48,43.05,4.17,43.05,3.98,42.86L0.15,39.11C-0.04,38.91,-0.05,38.60,0.15,38.40L16.99,21.86C17.19,21.66,17.19,21.35,17.00,21.15L0.15,4.61C-0.04,4.41,-0.05,4.10,0.15,3.90Z"
                className="fill-white group-hover:fill-[#4184f3] transition-colors duration-500"
              />
            </g>
          </svg>
        </span>
      </a>
    </div>
  );
};

export default AuthLayoutButton;
