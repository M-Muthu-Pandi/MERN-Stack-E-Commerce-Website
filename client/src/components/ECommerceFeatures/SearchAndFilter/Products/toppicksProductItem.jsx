import { useProduct } from "../../common/Context/ProductsContext";

const TopPicksItems = () => {
  const { setSelectedProduct, features, featureMapping } = useProduct();

  return (
    <div>
      {features.map((feature, index) => {
        const featureItems = featureMapping[feature];

        return (
          <div
            key={index}
            className="rounded-lg bg-white flex justify-around flex-wrap gap-1 sm:gap-5 my-1 sm:my-5"
          >
            {featureItems.map((item) => {
              return (
                <div
                  className="flex flex-col basis-[49%] sm:basis-[30%] lg:basis-[23%] border rounded-md p-2"
                  key={item._id}
                  onClick={() => setSelectedProduct(item)}
                >
                  <img
                    className="h-28 sm:h-44 rounded-md"
                    src={item.image}
                    alt={item.subtitle}
                  />
                  <p className="my-2 text-xs">{item.title}</p>
                  <div className="sm:flex items-center gap-2">
                    <img
                      className="w-16 sm:w-20"
                      src={item.rating}
                      alt="Rating"
                    />
                    <p className="text-xs sm:text-sm">
                      {item.review} <span className="sm:hidden">Reviews</span>
                    </p>
                  </div>
                  <p className="font-medium text-sm sm:text-base mt-1">
                    ₹.{item.price}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TopPicksItems;
