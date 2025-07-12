import React from "react";
import { MdPerson } from "react-icons/md";
import IconButton from "./IconButton";

const Avatar: React.FC<AvatarPropsInterface> = ({ userAvatarURL }) => {
  if (userAvatarURL) {
    return (
      <img
        src={userAvatarURL}
        alt="User Avatar"
        className="rounded-full h-[40px] w-[40px]"
      />
    );
  }

  return <IconButton Icon={MdPerson} />;
};

export default Avatar;
