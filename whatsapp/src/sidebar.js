import React from "react";
import "./sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <div className="sidebar__header">
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
