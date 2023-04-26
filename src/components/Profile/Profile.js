import React from "react";
import SideBarasdfasdf from "../SideBarasdfasdf/SideBarasdfasdf";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ cards, onCardClick, addClothes }) {
  return (
    <div className="profile">
      <div className="profile__side-bar">
        <SideBarasdfasdf />
      </div>
      <div className="profile__main">
        <ClothesSection
          cards={cards}
          onCardClick={onCardClick}
          addClothes={addClothes}
        />
      </div>
    </div>
  );
}

export default Profile;
