import './style.css';
import React, { useState } from 'react';

//
const StarRating = ({ rating = 0, disable = false }) => {
  const [currRating, setCurrRating] = useState(() => {
    return rating > 5 ? 5 : rating < 0 ? 0 : rating;
  });
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleCircleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      const val = parseFloat(e.target.dataset.val);
      const circle = e.target.getBoundingClientRect();
      const isClickedLeft = e.clientX - circle.left < circle.width / 2;

      setCurrRating(val - (isClickedLeft ? 0.5 : 0));
    }
  };

  const handleMouseEnter = (e) => {
    const val = parseFloat(e.target.dataset.val);
    const circle = e.target.getBoundingClientRect();
    const isClickedLeft = e.clientX - circle.left < circle.width / 2;
    setHoveredRating(val - (isClickedLeft ? 0.5 : 0));
  };

  const handleMouseLeave = (e) => {
    setHoveredRating(false);
  };

  const circleFilledClass = (val) => {
    if (val - 0.5 < (currRating || hoveredRating)) {
      return 'circle-fill'; // Full circle
    } else if (val - 0.5 === (currRating || hoveredRating)) {
      return 'circle-fill-half'; // Half circle
    }
    return ''; // Empty circle
  };
  return (
    <>
      <div className="circle-rating-wrapper" onClick={handleCircleClick}>
        {[1, 2, 3, 4, 5].map((val) => {
          return (
            <button
              key={'circle' + val}
              data-val={val}
              className={`circle-rating ${circleFilledClass(val)}`}
              disabled={disable}
              onMouseMove={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></button>
          );
        })}{' '}
        {currRating ? currRating : ''}
      </div>
    </>
  );
};

export default StarRating;

/* 
style.css


.circle-rating-wrapper {
  display: flex;
  gap: 2px;
  font-size: 50px;
  align-items: center;
}

.circle-rating {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: whitesmoke;
  border: 1px solid gray;
}

.circle-fill {
  background-color: orange;
}

.circle-fill-half {
  background: linear-gradient(to right, orange 50%, transparent 50%);
}

*/
