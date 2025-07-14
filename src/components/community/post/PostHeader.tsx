import React from "react";
import { Avatar } from "../../../elements";
import { FaEllipsisV } from "react-icons/fa";

const PostHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar />
        <div className="flex flex-col justify-center">
          <p className="text-white text-[15px] font-medium mt-[1.5px] line-clamp-1 max-w-[150px]">
            Himanshu Chuchra
          </p>
          <p className="text-white/40 text-[13px] font-medium -mt-[4px] line-clamp-1 max-w-[150px]">
            @himanshuchuchra
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200">
        <FaEllipsisV className="-mt-[0.2px] -ml-[0.2px]" size={16} />
      </div>
    </div>
  );
};

export default PostHeader;
