import React from "react";

import Logo from "../../../public/logo.svg";
function Header() {
  return (
    <header className="container flex">
      <div className="header__top">
        <img src={Logo} alt="" />
      </div>
      <div className="header__nav">
        <ul>
          <li>Home</li>
          <li>Destinations</li>
          <li>About</li>
          <li>Partner</li>
        </ul>
        <Button text="Login" />
        <Button text="Register" />
      </div>

      <div className="header__home">
        <div>
          <h1>Explore and Travel</h1>
          <p>Holiday finder</p>
          <hr />
   <select>
    <option value="Location">Location</option>
    <option value="Grade">Grade</option>
    <option value="Activity">Activity</option>
    <option value="Grade">Date</option>

   </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
