import { CSSProperties } from "react";

type PropTypes = {
  item: {
    src: string;
    alt: string;
  };
  active: boolean;
  style?: CSSProperties
};

const CarouselItem = (props: PropTypes) => {
  const {
    item: { src, alt },
    active,
    style
  } = props;
  return (
    <div className={`carousel-item ${active ? "active" : ""}`} style={style}>
      <img src={src} alt={alt}/>
    </div>
  );
};

export default CarouselItem;
