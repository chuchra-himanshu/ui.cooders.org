import React from "react";
import { MdPerson } from "react-icons/md";
import IconButton from "./IconButton";

const Avatar: React.FC<AvatarPropsInterface> = ({
  userAvatarURL,
  classes,
  clickHandler,
}) => {
  if (userAvatarURL) {
    return (
      <img
        src={userAvatarURL}
        alt="User Avatar"
        className={`rounded-full h-[40px] w-[40px] ${classes}`}
        onClick={clickHandler}
      />
    );
  }

  return <IconButton Icon={MdPerson} clickHandler={clickHandler} />;
};

export default Avatar;
