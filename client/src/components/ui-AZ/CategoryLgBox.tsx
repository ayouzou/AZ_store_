import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  title: string;
  description: string;
  styles: {
    backgroundColor: string;
    flexDirection: string;
    paddingInline: string;
    paddingBlock: string;
    textAlign?: string;
    gridRow: string;
    gridColumn: string;
  };
  href: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
}
const CategoryLgBox: React.FC<Props> = ({
  name,
  title,
  description,
  styles,
  href,
  imgSrc,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div
      key={title}
      className={`flex justify-around items-center rounded-md shadow-lg overflow-hidden transition-transform hover:scale-105`}
      style={styles as React.CSSProperties}
    >
      <div className="mx-[0.5rem]">
        <h3 className="text-xl 2xl:text-2xl font-serif">{title}</h3>
        <p className="text-sm mt-2 font-serif">{description}</p>
        <Link to={"/"}>
          <a className="text-white bg-gradient-to-br from-green-500 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium text-sm  text-center mr-2 mb-2  inline-block py-3 px-2 2xl:px-4 mt-4 bg-palette-primary hover:scale-105 transition-transform duration-300 shadow-xl ltr:text-sm rtl:text-xs text-palette-side  rgba(var(--color-primary),var(--tw-bg-opacity)) rounded-lg">
            see All Products
          </a>
        </Link>
      </div>
      <img
        src={imgSrc}
        alt={name}
        width={imgWidth}
        height={imgHeight}
        className="drop-shadow-lg hover:scale-95 transition-transform duration-300 "
      />
    </div>
  );
};

export default CategoryLgBox;
