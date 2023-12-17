import React from "react";
import { Link } from "react-router-dom";


interface Props {
  imgSrc: string;
  bgc: string;
  categoryTitle: string;
  href: string;
}
const CategorySmBox: React.FC<Props> = ({
  imgSrc,
  bgc,
  categoryTitle,
  href,
}) => {

  return (
    <Link to={`/`}>
      <a>
        <div
          className={`flex flex-col   items-center text-center min-w-[7rem] w-[9.3rem] sm:w-[10rem] my-2`}
        >
          <div
            className={`flex items-center justify-center w-[60px] h-[60px] rounded-full bg-palette-${bgc}`}
          >
            <img
              src={imgSrc}
              alt={categoryTitle}
              width={45}
              height={45}
              className="drop-shadow-lg"
            />
          </div>
          <h3 className="text-sm md:text-base font-bold mt-2">
            {categoryTitle}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default CategorySmBox;
