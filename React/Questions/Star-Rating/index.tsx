// 5 stars .

// 1. User can give star StarRating out of 5;
// 2. Show Avg rating ;

// This component uses React-icons package. Add it to package.json file
import { GoSmiley } from "react-icons/go";
import { PiSmileySadLight } from "react-icons/pi";
import { PiSmileyBlankLight } from "react-icons/pi";
import { PiSmileyMehThin } from "react-icons/pi";
import { PiSmileyLight } from "react-icons/pi";
import { BiHappyHeartEyes } from "react-icons/bi";

import "./styles.css";
import { ReactNode, createRef, useState } from "react";
import Rating from "./Rating";

const StarRating = () => {
  type PropTypes = {
    isReadOnly?: boolean;
    disableHover?: boolean;
    rating?: number;
    disabled?: number;
    icon?: ReactNode;
  };

  return (
    <div className="app-container">
      <div>
        <p>Give your rating</p>
        <Rating />
      </div>
      <div>
        <p>Read only - Rating</p>
        <Rating disableHover isReadOnly avgRating={4}/>
      </div>
      <div>
        <p>Give your rating without hover</p>
        <Rating disableHover />
      </div>

      <div>
        <p>Disabled</p>
        <Rating disableHover disabled avgRating={3}/>
      </div>

      <div>
        <p>Give your rating with Custom Icon</p>
        <Rating Icon={GoSmiley}/>
      </div>

      <div>
        <p>Give your rating with Custom Icons</p>
        <Rating Icons={[PiSmileySadLight, PiSmileyBlankLight, PiSmileyMehThin, PiSmileyLight, BiHappyHeartEyes]}/>
      </div>
    </div>
  );
};

export default StarRating;
