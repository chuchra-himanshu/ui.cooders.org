import React from "react";
import { Avatar } from "../../elements";
import {
  FaHeart,
  FaCommentAlt,
  FaQuoteRight,
  FaBookmark,
} from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

const Feed: React.FC = () => {
  return (
    <section className="mt-5">
      {/* POST DESIGN */}
      <section className="w-[450px] bg-white/5 px-4 pt-4 pb-[10px] rounded-[10px]">
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
        </div>
        <p className="text-[14.5px] text-justify leading-[19px] mt-[10px] mx-[5px] text-white line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et
          architecto aliquam excepturi deserunt. Vitae, magnam voluptatum vero
          voluptate, consequatur saepe quam corporis veritatis ipsam beatae
          animi recusandae ratione ad?
        </p>
        <div className="flex items-center justify-between mt-[10px]">
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-red-950/40 hover:text-red-600 transition-all ease-in-out duration-200">
              <FaHeart className="mt-[1px]" size={15.5} />
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
          <div className="flex items-center justify-center bg-neutral-950/50 h-[30px] w-[30px] rounded-full cursor-pointer text-white/40 hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200">
            <FaBookmark className="mt-[0.5px]" size={15} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Feed;
