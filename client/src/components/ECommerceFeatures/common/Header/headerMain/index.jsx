import { useState } from "react";
import Categories from "./categories";

const HeaderMain = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const headerList = [
    {
      route: "#trending",
      list: "Trending",
    },
    {
      route: "#bestsellers",
      list: "Best Sellers",
    },
    {
      route: "#categories",
      list: "Categories",
    },
    {
      route: "#todaydeals",
      list: "Today's Deals",
    },
    {
      route: "#newarrivals",
      list: "New Arrivals",
    },
    {
      route: "#help",
      list: "Help & Settings",
    },
  ];

  return (
    <header>
      <ul className="hidden sm:flex bg-gray-800 pt-1 pb-2 justify-evenly items-center text-sm md:text-base text-white font-medium">
        {headerList.map((item, index) => {
          if (item.list === "Categories") {
            return (
              <li
                className="border border-gray-800 p-1 hover:border-white cursor-pointer"
                key={index}
                onClick={toggleVisibility}
              >
                <a href={item.route}>{item.list}</a>
                <span className="opacity-90 text-[10px] ml-1">▼</span>
              </li>
            );
          }

          return (
            <li
              className="border border-gray-800 p-1 hover:border-white"
              key={index}
            >
              <a href={item.route}>{item.list}</a>
            </li>
          );
        })}
      </ul>

      {isVisible && <Categories />}
    </header>
  );
};

export default HeaderMain;
