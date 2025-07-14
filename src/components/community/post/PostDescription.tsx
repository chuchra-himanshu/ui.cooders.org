import React, { useState } from "react";

const PostDescription: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const fullText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
  itaque laudantium amet asperiores nesciunt. Est numquam nostrum
  consectetur et nihil iste, ex fugit optio repudiandae in similique
  laudantium officiis aliquam. ewkjfnweqkjefjwqbefhwqb wqhjefvbewqh whqefjvfhwq fwheqvjbfewqh wefhqvjf`;

  const maxLength = 160;
  const isTruncated = fullText.length > maxLength;
  const shortText = isTruncated
    ? fullText.slice(0, maxLength).trim() + "..."
    : fullText;

  return (
    <p className="mt-[10px] mx-1 text-sm text-justify text-white/90 transition-all ease-in-out duration-200">
      {showMore ? fullText : shortText}
      {isTruncated && (
        <span
          onClick={() => setShowMore(!showMore)}
          className="ml-1 font-medium cursor-pointer text-white/60 hover:text-palette-sky hover:no-underline ease-in-out transition-all duration-200"
        >
          {showMore ? "less" : "more"}
        </span>
      )}
    </p>
  );
};

export default PostDescription;
