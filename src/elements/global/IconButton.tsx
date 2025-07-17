import React from "react";

const IconButton: React.FC<IconButtonPropsInterface> = ({
  Icon,
  iconClassNames,
  clickHandler,
}) => {
  return (
    <section
      className="relative flex items-center justify-center bg-accent/15 rounded-full h-[38px] w-[38px] cursor-pointer hover:bg-accent/10 ease-in-out transition-all duration-200"
      onClick={clickHandler}
    >
      <Icon
        className={`${
          iconClassNames
            ? iconClassNames
            : "text-accent h-[26px] w-[26px] -mt-[1px]"
        }`}
      />
    </section>
  );
};

export default IconButton;
