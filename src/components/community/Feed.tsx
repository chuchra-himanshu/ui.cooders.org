import React from "react";
import Post from "./post/Post";

const Feed: React.FC = () => {
  return (
    <section className="my-1 h-[calc(100vh-105px)] overflow-scroll hide-scrollbar flex flex-col gap-5 py-3">
      <Post />
    </section>
  );
};

export default Feed;
