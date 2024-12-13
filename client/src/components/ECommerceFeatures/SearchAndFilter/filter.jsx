const Filter = () => {
  const category = [
    { id: "men", title: "Men Clothing" },
    { id: "women", title: "Women Clothing" },
    { id: "kids", title: "Kid's Fashion" },
    { id: "footwear", title: "Footwear" },
    { id: "luggage", title: "Luggage & Bags" },
    { id: "watch", title: "Watches" },
    { id: "handbag", title: "Handbags" },
    { id: "sunglass", title: "Sunglasses" },
  ];

  const toppicks = [
    { id: "trending", title: "Trending" },
    { id: "bestseller", title: "Best Sellers" },
    { id: "todaydeals", title: "Today's Deals" },
    { id: "newarrival", title: "New Arrivals" },
  ];

  return (
    <section className="sm:flex-grow sm:basis-1/4 border-r border-r-gray-300 p-2 sm:px-5 sm:pb-5">
      <h2 className="pt-3 sticky top-12 sm:top-16 z-40 bg-white text-lg sm:text-xl md:text-2xl text-gray-900 font-medium border-b border-b-gray-300 pb-1 sm:pb-3">
        <a className="hover:text-green-500 hover:underline" href="#home">
          Filters
        </a>
      </h2>

      <div className="border-b border-b-gray-300 pb-3">
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          CATEGORIES
        </h3>
        <div className="text-xs sm:text-sm md:text-base">
          {category.map((item, index) => {
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

      <div className="border-b border-b-gray-300 pb-3">
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          TOP PICKS
        </h3>
        <div className="text-xs sm:text-sm md:text-base">
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

      <div>
        <h3 className="text-sm sm:text-base text-gray-500 font-medium py-2">
          PRICE RANGE
        </h3>
        <div className="text-sm flex flex-col sm:flex-row items-center gap-2">
          <input
            className="rounded-md border-2 border-gray-400 p-0.5 sm:p-1 w-20"
            type="number"
            placeholder="Min (₹.)"
          />
          <span className="text-gray-500">to</span>
          <input
            className="rounded-md border-2 border-gray-400 p-0.5 sm:p-1 w-20"
            type="number"
            placeholder="Max (₹.)"
          />
        </div>
      </div>
    </section>
  );
};

export default Filter;
