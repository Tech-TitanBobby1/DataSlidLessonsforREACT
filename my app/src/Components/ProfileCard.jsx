import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, imageUrl, role }) {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={name} className="profile-img" />
      <p className="profile-text">
        <span className="profile-name">{name}</span> — {role}
      </p>
    </div>
  );
}

export default ProfileCard;