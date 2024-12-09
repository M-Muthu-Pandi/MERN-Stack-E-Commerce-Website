import rating from "../../../assets/rating-5.png";
import trend from "../../../assets/Collections/Men/shirt.jpg";
import bestsell from "../../../assets/Collections/Men/cargo-pant.jpg";
import todaysdeal from "../../../assets/Collections/Men/hoody.jpg";
import arrival from "../../../assets/Collections/Men/kurtha.jpg";

const FeaturedSection = () => {
  const features = [
    "Trending",
    "Best Sellers",
    "Today's deals",
    "New Arrivals",
  ];
  const trending = [
    {
      image: trend,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
    {
      image: bestsell,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
    {
      image: todaysdeal,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
    {
      image: arrival,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
    {
      image: trend,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
    {
      image: bestsell,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
    {
      image: todaysdeal,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
    {
      image: arrival,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
  ];

  const bestseller = [
    {
      image: bestsell,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
  ];

  const todaydeal = [
    {
      image: todaysdeal,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
  ];

  const newarrival = [
    {
      image: arrival,
      title: "Allen Solly Men Sweatshirt",
      subtitle: "Sweatshirt",
      rating: rating,
      review: 2000,
      price: "₹.923",
    },
  ];

  const featureMapping = {
    Trending: trending,
    "Best Sellers": bestseller,
    "Today's deals": todaydeal,
    "New Arrivals": newarrival,
  };

  return (
    <section className="py-1 px-2 sm:px-5 bg-green-200">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mt-5 font-medium">
        Top Picks for You
      </h2>
      {features.map((feature, index) => {
        const featureItems = featureMapping[feature];
        return (
          <div
            key={index}
            id={feature.toLowerCase().replace(" ", "-")}
            className="my-5 px-2 pt-2 pb-3 sm:px-5 sm:py-3 rounded-lg bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl italic font-semibold mb-3 text-gray-900">
              {feature}
            </h3>
            <div className="flex gap-2 sm:gap-5 text-xs sm:text-base overflow-x-auto">
              {featureItems.map((item, index) => {
                return (
                  <div
                    className="flex flex-col w-32 min-w-32 sm:min-w-52 md:min-w-60 border rounded-md p-2"
                    key={index}
                  >
                    <img
                      className="h-28 sm:h-40 md:h-56 rounded-md"
                      src={item.image}
                      alt={item.subtitle}
                    />
                    <p className="my-2">{item.title}</p>
                    <div className="sm:flex items-center gap-2">
                      <img className="w-20" src={item.rating} alt="Rating" />
                      <p>
                        {item.review} <span className="sm:hidden">Reviews</span>
                      </p>
                    </div>
                    <p className="font-medium text-sm sm:text-lg mt-1">{item.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedSection;
