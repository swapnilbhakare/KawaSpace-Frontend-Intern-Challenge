import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="branding">
        <h2>YourChallenge</h2>
      </div>
      <ul>
        <li>
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Download</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
