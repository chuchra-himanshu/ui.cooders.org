import React from "react";
import PostHeader from "./PostHeader";
import PostDescription from "./PostDescription";
import PostFooter from "./PostFooter";
import PostImagesGrid from "./PostImagesGrid";

const images = Array.from(
  { length: 6 },
  () =>
    "https://wallpapers.com/images/hd/google-calendar-background-tfpb8g86k386xz0l.jpg"
);

const Post: React.FC = () => {
  return (
    <section className="w-[430px] bg-white/5 px-4 pt-4 pb-[10px] rounded-[10px]">
      <PostHeader />
      <PostDescription />
      <section className="mt-[10px] mx-1">
        <PostImagesGrid images={images} />
      </section>
      <PostFooter />
    </section>
  );
};

export default Post;
