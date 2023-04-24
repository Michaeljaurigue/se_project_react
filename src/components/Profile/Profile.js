import React from "react";

import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";

function Profile({ cards, onCardClick, addClothes }) {
  return (
    <div className="profile">
      <div className="profile__side-bar">
        <Sidebar />
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
