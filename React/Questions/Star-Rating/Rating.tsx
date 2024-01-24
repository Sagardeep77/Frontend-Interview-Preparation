// 5 stars .

// 1. User can give star StarRating out of 5;
// 2. Show Avg rating ;

// This component uses React-icons package. Add it to package.json file

import { FaStar } from "react-icons/fa";
import "./styles.css";
import { ReactNode, createRef, useEffect, useMemo, useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { IconType } from "react-icons";

type PropTypes = {
  isReadOnly?: boolean;
  disableHover?: boolean;
  avgRating?: number;
  disabled?: boolean;
  Icon?: IconType;
  Icons?: IconType[];
  length?: number;
};

const Rating = (props: PropTypes) => {
  const {
    isReadOnly,
    disableHover,
    avgRating,
    disabled,
    Icon,
    Icons,
    length = 5,
  } = props;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const IconsArray: IconType[] = useMemo(() => {
    if (Icons && Icons.length > 0) {
      return Icons;
    }
    if (Icon) {
      return new Array(length).fill(Icon);
    }
    return new Array(length).fill(FaStar);
  }, []);
  useEffect(() => {
    setRating(avgRating || 0);
  }, []);

  const handleClick = (curr: number) => {
    if (!isReadOnly && !disabled) {
      setRating(curr);
    }
  };

  const handleMouseEnter = (curr: number) => {
    if (!disableHover) {
      setHover(curr);
    }
  };

  const handleMouseLeave = (curr: number) => {
    if (!disableHover) {
      setHover(0);
    }
  };
  return (
    <div className="rating-container">
      <div className={`star-rating-container ${disabled ? "disabled" : ""} `}>
        {IconsArray.map((Icon, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={isReadOnly ? avgRating : currentRating}
                onClick={() => {
                  handleClick(currentRating);
                }}
              />
              <span>
                {" "}
                <Icon
                  className={!isReadOnly && !disabled ? "star" : ""}
                  color={currentRating <= (hover || rating) ? "ffc107" : ""}
                  onMouseEnter={() => {
                    handleMouseEnter(currentRating);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(currentRating);
                  }}
                />
              </span>
            </label>
          );
        })}
        <label className="rating-text">{rating}</label>
      </div>
    </div>
  );
};

export default Rating;
