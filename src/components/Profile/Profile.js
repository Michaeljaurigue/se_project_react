import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  cards,
  onCardClick,
  addClothes,
  handleEditProfile,
  handleSignOut,
  handleLikeCard,
}) {
  return (
    <div className="profile">
      <div className="profile__side-bar">
        <SideBar
          handleEditProfile={handleEditProfile}
          handleSignOut={handleSignOut}
        />
      </div>
      <div className="profile__main">
        <ClothesSection
          cards={cards}
          onCardClick={onCardClick}
          addClothes={addClothes}
          handleLikeCard={handleLikeCard}
        />
      </div>
    </div>
  );
}

export default Profile;
