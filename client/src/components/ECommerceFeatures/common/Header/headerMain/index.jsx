import { useState } from "react";
import Categories from "./categories";
import { useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const headerList = [
    {
      route: "#top-picks",
      list: "Trending",
    },
    {
      route: "#top-picks",
      list: "Best Sellers",
    },
    {
      route: "#categories",
      list: "Categories",
    },
    {
      route: "#top-picks",
      list: "Today's Deals",
    },
    {
      route: "#top-picks",
      list: "New Arrivals",
    },
    {
      route: "#help",
      list: "Help & Settings",
    },
  ];

  return (
    <header id="home">
      <ul className="flex justify-evenly bg-gray-800 pt-1 pb-2 items-center text-sm md:text-base text-white font-medium">
        {headerList.map((item, index) => {
          if (item.list === "Categories") {
            return (
              <li
                className="border border-gray-800 px-5 sm:p-1 hover:border-white cursor-pointer"
                key={index}
                onClick={toggleVisibility}
              >
                <a href={item.route}>{item.list}</a>
                <span className="opacity-90 text-[10px] ml-1">▼</span>
              </li>
            );
          }

          if (item.list === "Help & Settings") {
            return (
              <li
                className="hidden sm:inline-block border border-gray-800 p-1 hover:border-white"
                key={index}
              >
                <a href={item.route} onClick={() => navigate("/settings")}>
                  {item.list}
                </a>
              </li>
            );
          }

          return (
            <li
              className="hidden sm:inline-block border border-gray-800 p-1 hover:border-white"
              key={index}
            >
              <a href={item.route} onClick={() => navigate("/")}>
                {item.list}
              </a>
            </li>
          );
        })}
      </ul>

      {isVisible && <Categories />}
    </header>
  );
};

export default HeaderMain;
