import React from "react";
import { Avatar, Logo, IconButton } from "../elements";
import { PiBellRingingFill } from "react-icons/pi";

const Header: React.FC = () => {
  return (
    <header className="h-[72px] border-b border-b-border-primary flex items-center justify-between px-5">
      <Logo />
      <section className="flex items-center gap-2">
        <IconButton
          Icon={PiBellRingingFill}
          iconClassNames="h-[22px] w-[22px] text-accent"
        />
        <Avatar />
      </section>
    </header>
  );
};

export default Header;
