import React, { useMemo } from "react";
import { Avatar, Logo, IconButton } from "../elements";
import { PiBellRingingFill } from "react-icons/pi";
import {
  useLocation,
  useNavigate,
  type Location,
  type NavigateFunction,
} from "react-router-dom";
import { HEADER } from "../data";

const Header: React.FC = () => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const navItems = useMemo(() => HEADER.NAVBAR_ITEMS || [], []);

  return (
    <header className="h-[72px] border-b border-b-border-primary flex items-center justify-between px-5">
      <section className="flex items-center w-[8%]">
        <Logo />
      </section>
      <section className="flex items-center justify-center gap-5">
        {navItems.map((navItem) => {
          const isActive = navItem.slug === location.pathname;
          return (
            <p
              key={navItem.slug}
              onClick={() => navigate(navItem.slug)}
              className={`relative cursor-pointer text-[16px] font-semibold transition-all duration-300 ease-in-out
                ${isActive ? "text-accent" : "text-white"}
                before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full
                before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-in-out
                hover:before:scale-x-100 before:bg-accent hover:text-accent
              `}
            >
              {navItem.title}
            </p>
          );
        })}
      </section>
      <section className="flex items-center gap-2 w-[8%] justify-end">
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
