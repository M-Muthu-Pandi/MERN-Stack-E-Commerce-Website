import { Link } from "react-router-dom";

const FilterTitles = ({
  men,
  women,
  kids,
  footwear,
  luggage,
  watches,
  handbag,
  sunglass,
  trending,
  bestseller,
  todaydeal,
  newarrival,
  allproducts,
}) => {
  const category = [
    {
      navigate: "/filter/men",
      style: men,
      title: "Men Clothing",
    },
    {
      navigate: "/filter/women",
      style: women,
      title: "Women Clothing",
    },
    {
      navigate: "/filter/kids",
      style: kids,
      title: "Kid's Fashion",
    },
    {
      navigate: "/filter/footwear",
      style: footwear,
      title: "Footwear",
    },
    {
      navigate: "/filter/luggage",
      style: luggage,
      title: "Luggage & Bags",
    },
    {
      navigate: "/filter/watches",
      style: watches,
      title: "Watches",
    },
    {
      navigate: "/filter/handbag",
      style: handbag,
      title: "Handbags",
    },
    {
      navigate: "/filter/sunglass",
      style: sunglass,
      title: "Sunglasses",
    },
  ];

  const toppicks = [
    {
      navigate: "/filter/trending",
      style: trending,
      title: "Trending",
    },
    {
      navigate: "/filter/bestseller",
      style: bestseller,
      title: "Best Sellers",
    },
    {
      navigate: "/filter/todaydeal",
      style: todaydeal,
      title: "Today's Deals",
    },
    {
      navigate: "/filter/newarrival",
      style: newarrival,
      title: "New Arrivals",
    },
  ];
  return (
    <section className="sm:flex-grow basis-1/4 md:basis-1/5 border-r border-r-gray-300 p-2 sm:px-5 sm:pb-5">
      <h2 className="pt-3 sticky top-12 sm:top-16 z-40 bg-white text-lg sm:text-xl md:text-2xl text-gray-900 font-medium border-b border-b-gray-300 pb-1 sm:pb-3">
        <a
          className="hover:text-green-500 hover:underline hover:underline-offset-4"
          href="#home"
        >
          Filters
        </a>
      </h2>

      <Link to={"/search"}>
        <p
          className={`py-3 text-xs md:text-sm lg:text-base hover:text-blue-500 border-b border-b-gray-300 ${allproducts}`}
        >
          All Products
        </p>
      </Link>

      <div className="border-b border-b-gray-300 pb-3">
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          CATEGORIES
        </h3>
        {category.map((item, index) => {
          return (
            <Link key={index} to={item.navigate}>
              <p
                className={`mb-1 text-xs md:text-sm lg:text-base hover:text-blue-500 ${item.style}`}
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="border-b border-b-gray-300 pb-3">
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          TOP PICKS
        </h3>
        {toppicks.map((item, index) => {
          return (
            <Link key={index} to={item.navigate}>
              <p
                className={`mb-1 text-xs md:text-sm lg:text-base hover:text-blue-500 ${item.style}`}
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FilterTitles;
