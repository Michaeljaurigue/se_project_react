import React from "react";
import avatar from "../../images/avatar.svg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar__info">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}

export default Sidebar;
