import React, { useCallback, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Dialog, TextInput } from "../../components";

const AdminStudio: React.FC = () => {
  const [toggleDialog, setToggleDialog] = useState(false);

  const handleDialogOpen = useCallback(() => setToggleDialog(true), []);
  const handleDialogClose = useCallback(() => setToggleDialog(false), []);

  return (
    <section className="p-5 w-full relative">
      <header className="flex items-center justify-between">
        <h1 className="text-text-secondary text-[35px] font-semibold">
          Libraries
        </h1>
        <button
          onClick={handleDialogOpen}
          className="h-[42px] px-4 bg-overlay-primary text-text-secondary hover:bg-accent/5 hover:text-accent flex items-center rounded-[10px] gap-2 cursor-pointer transition-all ease-in-out duration-200"
        >
          <FaPlus />
          <span className="font-semibold -mt-[1.1px]">Add Library</span>
        </button>
        <button
          onClick={handleDialogOpen}
          className="h-[42px] px-4 bg-overlay-primary text-text-secondary hover:bg-accent/5 hover:text-accent flex items-center rounded-[10px] gap-2 cursor-pointer transition-all ease-in-out duration-200"
        >
          <FaPlus />
          <span className="font-semibold -mt-[1.1px]">Add Component</span>
        </button>
      </header>

      {toggleDialog && (
        <Dialog
          heading="Create Component"
          handleDialogClose={handleDialogClose}
        >
          <form>
            <TextInput
              id="library-title"
              label="Title"
              placeholder="Library Name"
              inputType="text"
              required={true}
            />
            <TextInput
              id="library-logo"
              label="Logo"
              placeholder="Choose from Simple Icons"
              inputType="text"
              required={true}
            />

            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="cursor-pointer font-medium outline-none rounded-[10px] text-text-secondary px-3 pt-[7px] pb-[9px] border-2 border-border-primary hover:text-text-primary hover:border-accent transition-all ease-in-out duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </Dialog>
      )}

      {/* {toggleDialog && (
        <Dialog heading="Create Library" handleDialogClose={handleDialogClose}>
          <form>
            <TextInput
              id="library-title"
              label="Title"
              placeholder="Library Name"
              inputType="text"
              required={true}
            />
            <TextInput
              id="library-url"
              label="URL"
              placeholder="Library Official URL"
              inputType="text"
              required={true}
            />
            <TextInput
              id="library-logo"
              label="Logo"
              placeholder="Choose from Simple Icons"
              inputType="text"
              required={true}
            />

            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="cursor-pointer font-medium outline-none rounded-[10px] text-text-secondary px-3 pt-[7px] pb-[9px] border-2 border-border-primary hover:text-text-primary hover:border-accent transition-all ease-in-out duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </Dialog>
      )} */}
    </section>
  );
};

export default AdminStudio;
