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
import { FaHamburger } from "react-icons/fa";

const Header: React.FC = () => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const navItems = useMemo(() => HEADER.NAVBAR_ITEMS || [], []);

  return (
    <header className="h-[78px] border-b border-b-border-primary flex items-center justify-between px-5">
      <section className="flex items-center">
        <Logo />
      </section>
      <section className="hidden md:flex items-center justify-center gap-5">
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
      <section className="flex items-center gap-2 justify-end">
        <div className="hidden md:block">
          <IconButton
            Icon={PiBellRingingFill}
            iconClassNames="h-[22px] w-[22px] text-accent"
          />
        </div>
        <div className="hidden md:block">
          <Avatar />
        </div>
        <div className="md:hidden">
          <IconButton
            Icon={FaHamburger}
            iconClassNames="h-[22px] w-[22px] text-accent"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
