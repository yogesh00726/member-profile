import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { username, email, city, dob } = useSelector((state) => state.member);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>
        <strong>Date of Birth:</strong> {dob.toDateString()}
      </p>
    </div>
  );
};

export default Profile;
