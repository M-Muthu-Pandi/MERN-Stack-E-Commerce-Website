const SideNavHeader = ({ handleClose }) => {
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
    <div>
      <ul className="pt-1 pb-2 md:text-base text-white font-medium">
        {headerList.map((item, index) => {
          return (
            <li
              className="mx-5 my-3 hover:underline cursor-pointer"
              key={index}
            >
              <a onClick={handleClose} href={item.route}>
                {item.list}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNavHeader;
