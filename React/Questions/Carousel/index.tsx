/*

Build a Carousel Component:
Create a carousel component that displays a collection of images
or content and allows users to navigate through them using previous 
and next buttons or swipe gestures’. 
Goal is to use good design, reusable components,


Example =>       
<Carousel needNavigationDots needNavgationActions delayTime={2000}/>

*/

import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import "./styles.css";

const Items = [
  {
    src: "https://picsum.photos/id/1/1000/500/",
    alt: "alt",
  },
  {
    src: "https://picsum.photos/id/10/1000/500/",
    alt: "alt",
  },
  {
    src: "https://picsum.photos/id/100/1000/500/",
    alt: "alt",
  },
  {
    src: "https://picsum.photos/id/200/1000/500/",
    alt: "alt",
  },
  {
    src: "https://picsum.photos/id/500/1000/500/",
    alt: "alt",
  },
];

type PropTypes = {
  needNavgationActions?: boolean;
  needNavigationDots?: boolean;
  delayTime?: number;
};

const Carousel = function ({
  needNavgationActions,
  needNavigationDots,
  delayTime,
}: PropTypes) {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    if (delayTime !== undefined) {
      const timer = setInterval(() => {
        handleNext();
      }, 2000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [delayTime]);

  const handlePrev = () => {
    setCurrentItem((p) => (p === 0 ? Items.length - 1 : p - 1));
  };
  const handleNext = () => {
    setCurrentItem((p) => (p === Items.length - 1 ? 0 : p + 1));
  };

  const handleNextKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.keyCode === 39) {
      handleNext();
    }
  };
  const handlePrevKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.keyCode === 37) {
      handleNext();
    }
  };

  return (
    <div className="container">
      <div
        className="carousel-items-container"
        style={{
          transform: `translate3d(${
            -currentItem * (100 / Items.length)
          }%, 0, 0)`,
          width: `${Items.length * 100}%`,
        }}
      >
        {Items.map((item, index) => (
          <CarouselItem item={item} active={currentItem === index} />
        ))}
      </div>
      {needNavigationDots && (
        <div className="dots-container">
          {Items.map((item, index) => (
            <div
              onClick={() => {
                setCurrentItem(index);
              }}
              className={`dot ${currentItem === index ? "active" : ""}`}
            ></div>
          ))}
        </div>
      )}
      {needNavgationActions && (
        <div className="actions">
          <button
            type="submit"
            onClick={handlePrev}
            onKeyDown={handlePrevKeyDown}
          >
            {" "}
            Prev
          </button>
          <button
            type="submit"
            onClick={handleNext}
            onKeyDown={handleNextKeyDown}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
