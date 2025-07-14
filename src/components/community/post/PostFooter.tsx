import React from "react";
import {
  FaBookmark,
  FaCommentAlt,
  FaHeart,
  FaQuoteRight,
  FaTags,
  FaUserTag,
} from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

const PostFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-between mt-[10px]">
      <div className="flex items-center gap-1">
        <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-red-950/40 hover:text-red-600 transition-all ease-in-out duration-200">
          <FaHeart className="mt-[1.3px]" size={15.5} />
        </div>
        <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200">
          <FaCommentAlt className="mt-[1px]" size={15} />
        </div>
        <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200">
          <FaQuoteRight className="mt-[0.5px]" size={14} />
        </div>
        <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200">
          <FaRepeat className="mt-[0.5px]" size={15} />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200">
          <FaTags className="mt-[0.5px] ml-[0.9px]" size={15.5} />
        </div>
        <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200">
          <FaUserTag className="ml-[2px] -mt-[1px]" size={17} />
        </div>
        <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200">
          <FaBookmark className="mt-[0.5px] mr-[0.1px]" size={15} />
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
