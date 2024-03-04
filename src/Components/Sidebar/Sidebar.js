import React, { useState } from "react";
import "./Sidebar.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SidebarList from "./SidebarList";

const Sidebar = ({ theme, changeTheme }) => {
  const [expandSidebar, setExpandSidebar] = useState(false);

  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar-expand sidebar":"sidebar"}>

        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={handleExpandClick}>

            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}

          </p>
        </div>

        <SidebarList expandSidebar={expandSidebar}/>


      </div>

      {/* <div className="container">
        <Home changeTheme={changeTheme} theme={theme}/>
      </div> */}
    </div>
  );
};

export default Sidebar;




