import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const MyImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: any;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <div>
      <LazyLoadImage
        alt={alt}
        src={src} // use normal <img> attributes as props
        effect="blur"
        className="rounded-2xl border-2 cursor-pointer border-red-200 object-contain w-full mr-[1rem]  mb-5  "
        width={width}
        height={height}
      />
    </div>
  );
};

export default MyImage;
