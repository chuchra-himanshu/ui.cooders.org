import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Dialog } from "../../components";
import { IoClose } from "react-icons/io5";

const AdminStudio: React.FC = () => {
  const [toggleDialog, setToggleDialog] = useState<boolean>(false);

  const handleDialogClose = () => {
    setToggleDialog(false);
  };

  return (
    <section className="p-5 w-full relative">
      <section className="flex items-center justify-between">
        <p className="text-text-secondary text-[35px] font-semibold">
          Libraries
        </p>
        <div
          className="h-[42px] px-4 bg-overlay-primary text-text-secondary hover:bg-accent/5 hover:text-accent flex items-center rounded-[10px] justify-center gap-2 cursor-pointer transition-all ease-in-out duration-200"
          onClick={() => setToggleDialog(true)}
        >
          <FaPlus />
          <p className="font-semibold -mt-[1.1px]">Add Library</p>
        </div>
      </section>
      {toggleDialog && (
        <Dialog>
          <section className="flex items-center justify-between mb-4">
            <p className="text-[21px] font-semibold text-text-secondary">
              Create Library
            </p>
            <div
              className="flex items-center justify-center bg-background-primary h-[30px] w-[30px] rounded-full cursor-pointer text-text-secondary hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200"
              onClick={handleDialogClose}
            >
              <IoClose className="" size={22} />
            </div>
          </section>
          <div className="flex flex-col text-text-secondary font-medium focus-within:text-accent gap-[2px] transition-all ease-in-out duration-200 mb-[14px]">
            <label htmlFor="library-title" className="text-[16px] ml-1">
              Title
            </label>
            <input
              type="text"
              id="library-title"
              placeholder="Library Name"
              className="outline-none w-full rounded-[10px] px-3 py-2 border-2 border-border-primary focus:text-text-primary focus:border-accent transition-all ease-in-out duration-200"
            />
          </div>
          <div className="flex flex-col text-text-secondary font-medium focus-within:text-accent gap-[2px] transition-all ease-in-out duration-200 mb-[14px]">
            <label htmlFor="library-url" className="text-[16px] ml-1">
              URL
            </label>
            <input
              type="text"
              id="library-url"
              placeholder="Library Official URL"
              className="outline-none w-full rounded-[10px] px-3 py-2 border-2 border-border-primary focus:text-text-primary focus:border-accent transition-all ease-in-out duration-200"
            />
          </div>
          <div className="flex flex-col text-text-secondary font-medium focus-within:text-accent gap-[2px] transition-all ease-in-out duration-200 mb-[14px]">
            <label htmlFor="library-logo" className="text-[16px] ml-1">
              Logo
            </label>
            <input
              type="text"
              id="library-logo"
              placeholder="Choose from Simple Icons"
              className="outline-none w-full rounded-[10px] px-3 py-2 border-2 border-border-primary focus:text-text-primary focus:border-accent transition-all ease-in-out duration-200"
            />
          </div>
          <div className="flex justify-end mt-5">
            <button
              className="cursor-pointer font-medium outline-none rounded-[10px] text-text-secondary px-3 pt-[7px] pb-[9px] border-2 border-border-primary hover:text-text-primary hover:border-accent transition-all ease-in-out duration-200"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Dialog>
      )}
    </section>
  );
};

export default AdminStudio;
