import React, { useState } from "react";
import { BsFillMenuButtonWideFill, BsGridFill } from "react-icons/bs";
import { HiBuildingStorefront } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import { LuTextCursorInput } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
  TbBoxMargin,
} from "react-icons/tb";

const Studio: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);
  const [showToogleButton, setShowToggleButton] = useState<boolean>(false);

  return (
    <section className="flex relative w-screen">
      <section
        className={`${
          toggleSidebar ? "w-[220px]" : "w-[0px]"
        } relative border-r border-border-primary transition-all ease-in-out duration-200`}
        onMouseOver={() => setShowToggleButton(true)}
        onMouseOut={() => setShowToggleButton(false)}
      >
        {toggleSidebar && (
          <React.Fragment>
            <section className="flex items-center w-full gap-3 h-[40px] border-b border-border-primary justify-around">
              <BsFillMenuButtonWideFill
                size={19.5}
                className="text-white/40 w-full ml-[5px] mt-[1px] cursor-pointer transition-all ease-in-out duration-200 hover:text-accent"
              />
              <BsGridFill
                size={20}
                className="text-white/40 w-full mt-[1px] cursor-pointer transition-all ease-in-out duration-200 hover:text-accent"
              />
              <MdDesignServices
                size={22}
                className="text-white/40 w-full mt-[1px] cursor-pointer transition-all ease-in-out duration-200 hover:text-accent"
              />
              <TbBoxMargin
                size={23}
                className="text-white/40 w-full mt-[1px] cursor-pointer transition-all ease-in-out duration-200 hover:text-accent"
              />
              <IoSettingsSharp
                size={21}
                className="text-white/40 w-full mr-[5px] mt-[1px] cursor-pointer transition-all ease-in-out duration-200 hover:text-accent"
              />
            </section>
            <section className="px-[8px] pt-[9px] overflow-y-scroll h-[calc(100vh-135px)] hide-scrollbar">
              <div className="flex items-center justify-start py-[5px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-white/40 bg-white/5 hover:bg-accent/5 hover:text-accent mb-[7px]">
                <LuTextCursorInput className="w-[24%]" size={22} />
                <p className="text-[16px] font-medium -mt-[0.8px]">
                  Autocomplete
                </p>
              </div>
              <div className="flex items-center justify-start py-[5px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-white/40 bg-white/5 hover:bg-accent/5 hover:text-accent mb-[7px]">
                <LuTextCursorInput className="w-[24%]" size={22} />
                <p className="text-[16px] font-medium -mt-[0.8px]">
                  Autocomplete
                </p>
              </div>
            </section>
          </React.Fragment>
        )}

        {showToogleButton && (
          <section className="absolute top-1/2 -right-5 flex items-center justify-center bg-accent/15 rounded-full h-[38px] w-[38px] cursor-pointer hover:bg-accent/10 ease-in-out transition-all duration-200 opacity-30 hover:opacity-100">
            {toggleSidebar ? (
              <TbArrowBigLeftLinesFilled
                className={`text-accent h-[26px] w-[26px] -mt-[1px]`}
                onClick={() => setToggleSidebar(false)}
              />
            ) : (
              <TbArrowBigRightLinesFilled
                className={`text-accent h-[26px] w-[26px] -mt-[1px]`}
                onClick={() => setToggleSidebar(true)}
              />
            )}
          </section>
        )}
      </section>
      <section className="absolute flex items-center justify-center gap-1 bottom-[10px] right-[10px] bg-accent/10 py-2 px-3 rounded-[10px] text-accent hover:bg-accent/5 cursor-pointer transition-all ease-in-out duration-200">
        <HiBuildingStorefront />
        <p>Builder</p>
      </section>
    </section>
  );
};

export default Studio;
