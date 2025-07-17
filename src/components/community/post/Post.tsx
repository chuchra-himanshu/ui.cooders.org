import React from "react";
import PostHeader from "./PostHeader";
import PostDescription from "./PostDescription";
import PostFooter from "./PostFooter";
import PostImagesGrid from "./PostImagesGrid";
import { Avatar } from "../../../elements";
import { IoSend } from "react-icons/io5";

const images = Array.from(
  { length: 6 },
  () =>
    "https://wallpapers.com/images/hd/google-calendar-background-tfpb8g86k386xz0l.jpg"
);

const Post: React.FC = () => {
  return (
    <section className="w-[430px] bg-overlay-primary px-4 pt-4 pb-[10px] rounded-[10px]">
      <PostHeader />
      <PostDescription />
      <PostImagesGrid images={images} />
      <PostFooter />
      <section className="flex items-center gap-1 mt-[10px] mb-1">
        <div className="w-10 h-10">
          <Avatar />
        </div>
        <div className="relative flex items-center bg-overlay-primary rounded-full px-3 h-[37.5px] w-full max-w-[355px]">
          <input
            type="text"
            placeholder="Comment ..."
            className=" bg-transparent text-text-primary outline-none placeholder:text-text-secondary text-[15px] w-[91%]"
            aria-label="Add a comment"
          />
          <button
            type="button"
            className="absolute right-1 flex items-center justify-center h-[30px] cursor-pointer w-[30px] rounded-full bg-background-primary text-text-secondary hover:bg-black/50 hover:text-accent transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Send comment"
          >
            <IoSend className="mt-px ml-[1px]" size={16} />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Post;
