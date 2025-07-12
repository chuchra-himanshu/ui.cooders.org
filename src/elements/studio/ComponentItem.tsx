import React from "react";

const ComponentBar: React.FC<ComponentItemPropsInterface> = ({
  Icon,
  title,
  iconClasses,
  iconSize = 22,
  titleClasses,
}) => {
  return (
    <div className="flex items-center justify-start py-[5px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-white/40 bg-white/5 hover:bg-accent/5 hover:text-accent mb-[7px]">
      <Icon className={`w-[24%] ${iconClasses}`} size={iconSize} />
      <p className={`text-[16px] font-medium -mt-[0.8px] ${titleClasses}`}>
        {title}
      </p>
    </div>
  );
};

export default ComponentBar;
