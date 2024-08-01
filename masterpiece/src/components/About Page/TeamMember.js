// src/TeamMember.jsx
import React from "react";
import "./TeamMember.css"; // Importing CSS for styling

const TeamMember = ({ imgSrc, name, title, bio }) => {
  return (
    <div className="team-member">
      <img src={imgSrc} alt={name} className="team-member-img" />
      <h3>{name}</h3>
      <p>{title}</p>
      <p>{bio}</p>
    </div>
  );
};

export default TeamMember;
