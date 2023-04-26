import avatar from "../../images/avatar.png";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="sidebar__info">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <p className="sidebar__name">John Doe</p>
    </div>
  );
}

export default SideBar;
