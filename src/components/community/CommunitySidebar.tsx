import React, { useCallback, useState } from "react";
import { SidebarToggleButton } from "../../elements";

const CommunitySidebar: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [showToggleButton, setShowToggleButton] = useState(false);

  const handleMouseOver = useCallback(() => setShowToggleButton(true), []);
  const handleMouseOut = useCallback(() => setShowToggleButton(false), []);

  return (
    <section
      className={`relative border-r border-border-primary transition-all duration-200 ease-in-out ${
        toggleSidebar ? "w-[220px]" : "w-0"
      }`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <SidebarToggleButton
        setToggleSidebar={setToggleSidebar}
        showToogleButton={showToggleButton}
        toggleSidebar={toggleSidebar}
      />
    </section>
  );
};

export default CommunitySidebar;
