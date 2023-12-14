import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      user Profile
      <div>
        <div>
          <NavLink to="blogs">Blogs</NavLink>
          <br />
          <NavLink to="newpost">New Post</NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default UserProfile;
