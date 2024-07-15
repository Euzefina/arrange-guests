import React from "react";

const Navbar = () => {
 return (
   <header className="header">
     <nav className="nav container">
         Navigation Bar

       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           <li className="nav__item">
               Home
           </li>
           <li className="nav__item">
               News
           </li>
           <li className="nav__item">
               About Us
           </li>
           <li className="nav__item">
               Favorite
           </li>
           <li className="nav__item">
               Location
           </li>
           <li className="nav__item">
               Get Started
           </li>
         </ul>
         <div className="nav__close" id="nav-close">
           x
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle">
         ---
       </div>
     </nav>
   </header>
 );
};

export default Navbar;