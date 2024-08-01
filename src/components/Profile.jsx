import React from "react";
import DisplayCard from "./DisplayCard";

// a profile component to hold profile details
const Profile = () => {
  return (
    <DisplayCard
      fullName={"HARRY"}
      bio={
        "Hi! I'm Harry.  I perform magics. Care to see? Click the button above and watch me go"
      }
      imgSrc={"/harry-potter-4077473_640.png"}
      profession={"Wizard"}
    />
  );
};

export default Profile;
