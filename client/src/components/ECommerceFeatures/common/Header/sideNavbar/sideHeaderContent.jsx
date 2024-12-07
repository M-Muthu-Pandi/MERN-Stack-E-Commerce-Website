const SideNavHeader = () => {
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
    <div>
      <ul className="pt-1 pb-2 md:text-base text-white font-medium">
        {headerList.map((item, index) => {
          return (
            <li
              className="mx-5 my-3 hover:underline cursor-pointer"
              key={index}
            >
              <a href={item.route}>{item.list}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNavHeader;
