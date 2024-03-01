// src/components/UserProfile.js
import React from 'react';

function UserProfile({ name, email, profilePicture }) {
  return (
    <div className="user-profile">
      <img src={profilePicture} alt="Profile" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserProfile;
