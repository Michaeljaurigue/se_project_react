import React from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar__info">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
