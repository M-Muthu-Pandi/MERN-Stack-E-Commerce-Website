const Filter = () => {
  const category = [
    { id: "api/men", title: "Men Clothing" },
    { id: "api/women", title: "Women Clothing" },
    { id: "api/kids", title: "Kid's Fashion" },
    { id: "api/footwear", title: "Footwear" },
    { id: "api/luggages", title: "Luggage & Bags" },
    { id: "api/watches", title: "Watches" },
    { id: "api/handbags", title: "Handbags" },
    { id: "api/sunglass", title: "Sunglasses" },
  ];

  const toppicks = [
    { id: "api/trending", title: "Trending" },
    { id: "api/bestseller", title: "Best Sellers" },
    { id: "api/todaydeals", title: "Today's Deals" },
    { id: "api/newarrival", title: "New Arrivals" },
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

      <div className="border-b border-b-gray-300 pb-3">
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          CATEGORIES
        </h3>
        <div className="text-xs md:text-sm lg:text-base">
          {category.map((item, index) => {
            return (
              <div key={index} className="flex gap-1 sm:gap-2 mb-1">
                <input
                  className="sm:w-4"
                  type="checkbox"
                  name="categories"
                  value={item.id}
                />
                <label htmlFor={item.id}>{item.title}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-b border-b-gray-300 pb-3">
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          TOP PICKS
        </h3>
        <div className="text-xs md:text-sm lg:text-base">
          {toppicks.map((item, index) => {
            return (
              <div key={index} className="flex gap-1 sm:gap-2 mb-1">
                <input
                  className="sm:w-4"
                  type="checkbox"
                  name="categories"
                  id={item.id}
                />
                <label htmlFor={item.id}>{item.title}</label>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div>
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          PRICE RANGE
        </h3>
        <div className="text-sm flex flex-col md:flex-row items-center gap-2">
          <input
            className="rounded-md border-2 border-gray-400 p-0.5 md:p-1 w-20"
            type="number"
            placeholder="Min (₹.)"
          />
          <span className="text-gray-500">to</span>
          <input
            className="rounded-md border-2 border-gray-400 p-0.5 md:p-1 w-20"
            type="number"
            placeholder="Max (₹.)"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Filter;
