// import React from "react";

// function NavBar() {
//   const links = ["home", "about", "projects"];

//   return <nav>{/* display an <a> tag for each link here */}</nav>;
// }

// export default NavBar;

import React from "react";

const NavBar = () => {
  return (
    <nav>
      <a href="#home" key="home">
        Home
      </a>
      <a href="#about" key="about">
        About
      </a>
      <a href="#projects" key="projects">
        Projects
      </a>
    </nav>
  );
};

export default NavBar;

