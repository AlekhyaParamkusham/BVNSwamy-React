import React from "react";
import NewsFeatures from "./NewsFeatures";
import SS1 from "../images/NewsFeatures/Anasuyamma sanmanam.jpg";
import SS2 from "../images/NewsFeatures/Andubaatu Ft..jpg";
import SS3 from "../images/NewsFeatures/Andubaatu more Ft..jpg";
import SS4 from "../images/NewsFeatures/Andubaatu more2.jpg";
import SS5 from "../images/NewsFeatures/Andubaatu Release.jpg";
import SS6 from "../images/NewsFeatures/Doctorate.jpg";
import SS7 from "../images/NewsFeatures/Engili pulu Ft..jpg";
import SS8 from "../images/NewsFeatures/General 2.jpg";
import SS9 from "../images/NewsFeatures/General Ft..jpg";
import SS10 from "../images/NewsFeatures/Katha Telanganam Puraskaram Ft..jpg";
import SS11 from "../images/NewsFeatures/Katha Tg Release.jpg";
import SS12 from "../images/NewsFeatures/Kuduru Ft..jpg";
import SS13 from "../images/NewsFeatures/Ph.D Ft..jpg";
import SS14 from "../images/NewsFeatures/Raathri Pagalu Release.jpg";
import SS15 from "../images/NewsFeatures/Rathri Pagalu Ft..jpg";
import SS16 from "../images/NewsFeatures/Sahithi Puras.jpg";
import SS17 from "../images/NewsFeatures/Sahithi Puraskraskaram.jpg";
import SS18 from "../images/NewsFeatures/Sangham Ft..jpg";
import SS19 from "../images/NewsFeatures/Talapatram Ft..jpg";
import SS20 from "../images/NewsFeatures/Telangana Chauk Ft..jpg";
import SS21 from "../images/NewsFeatures/Telangana Chauk Release.jpg";
import SS22 from "../images/NewsFeatures/Tg Jaagruthi Ft..jpg";
import SS23 from "../images/NewsFeatures/Virvaram Ft..jpg";

import "../styles/NewsFeatures.css";

function NewsOuter() {
  return (
    <div className="container newsOuter">
      <div className="row">
        <NewsFeatures src={SS1} />
        <NewsFeatures src={SS2} />
        <NewsFeatures src={SS3} />
        <NewsFeatures src={SS4} />
        <NewsFeatures src={SS5} />
        <NewsFeatures src={SS6} />
        <NewsFeatures src={SS7} />
        <NewsFeatures src={SS8} />
        <NewsFeatures src={SS9} />
        <NewsFeatures src={SS10} />
        <NewsFeatures src={SS11} />
        <NewsFeatures src={SS12} />
        <NewsFeatures src={SS13} />
        <NewsFeatures src={SS14} />
        <NewsFeatures src={SS15} />
        <NewsFeatures src={SS16} />
        <NewsFeatures src={SS17} />
        <NewsFeatures src={SS18} />
        <NewsFeatures src={SS19} />
        <NewsFeatures src={SS20} />
        <NewsFeatures src={SS21} />
        <NewsFeatures src={SS22} />
        <NewsFeatures src={SS23} />
      </div>
    </div>
  );
}

export default NewsOuter;
