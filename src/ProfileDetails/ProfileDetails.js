import React from "react";
import './ProfileDetails.css';

const ProfileDetails = (props) => {

  const company = props.company;
  const user = props.user;
  return (
    <div className="profile-details-container">
      <div>
        <div>{company.companyName}</div>
        <div>{company.companyEmail}</div>
      </div>
      <div className="user-details-container">
        <div>{user.userName}</div>
        <div>{user.userEmail}</div>
      </div>
    </div>
  )
}

export default ProfileDetails;
