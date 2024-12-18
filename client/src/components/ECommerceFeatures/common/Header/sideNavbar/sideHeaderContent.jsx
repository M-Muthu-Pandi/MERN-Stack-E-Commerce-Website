import { useNavigate } from "react-router-dom";

const SideNavHeader = ({ setIsSideNavVisible }) => {
  const navigate = useNavigate();

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

  // Navigate to Help & Settings page
  const handleHelp = () => {
    navigate("/settings");
    setIsSideNavVisible(false);
  };

  // Navigate to homepage
  const handleHeader = () => {
    navigate("/");
    setIsSideNavVisible(false);
  };

  return (
    <div>
      <ul className="pt-1 pb-2 md:text-base text-white font-medium">
        {headerList.map((item, index) => {
          if (item.list === "Help & Settings") {
            return (
              <li
                className="mx-5 my-3 hover:underline cursor-pointer"
                key={index}
              >
                <a href={item.route} onClick={handleHelp}>
                  {item.list}
                </a>
              </li>
            );
          }

          return (
            <li
              className="mx-5 my-3 hover:underline cursor-pointer"
              key={index}
            >
              <a onClick={handleHeader} href={item.route}>
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
