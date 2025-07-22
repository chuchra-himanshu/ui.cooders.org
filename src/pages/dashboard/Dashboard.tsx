import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate, type NavigateFunction } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleAdminPanelNavigation = () => {
    navigate("/admin");
  };

  return (
    <section className="relative w-full">
      <div
        className="absolute flex items-center justify-center bottom-[10px] right-[10px] bg-overlay-primary p-3 rounded-full text-text-secondary hover:text-accent hover:bg-accent/5 cursor-pointer transition-all ease-in-out duration-200"
        onClick={handleAdminPanelNavigation}
      >
        <MdAdminPanelSettings size={35} />
      </div>
    </section>
  );
};

export default Dashboard;
