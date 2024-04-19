import React from "react";

// icons import from react-icons
import {
  IoMailOutline,
  IoChevronForward,
  IoApps,
  IoNotifications,
  IoPieChart,
  IoNewspaper,
  IoCard,
  IoColorFill,
} from "react-icons/io5";
import { IconContext } from "react-icons";

function Card() {
  return (
    <>
      <div className="service-card">
        <div className="card">
          <span className="service-icon" style={{ backgroundColor: "#189AB4" }}>
            <IconContext.Provider value={{ size: "22px", color: "#05445E" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </span>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ size: "18px", color: "#189AB4" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
