import BestSellerProductUpload from "./bestseller";
import NewArrivalProductUpload from "./newarrival";
import TodayDealProductUpload from "./todayDeals";
import TrendingProductUpload from "./trending";

const TopProductUpload = () => {
  return (
    <section className="flex flex-col gap-2 p-3 sm:px-5 bg-gray-200 rounded-lg w-full sm:w-4/5">
      <h2 className="text-lg md:text-xl lg:text-2xl font-medium ml-3 mb-1">
        Top picks
      </h2>

      {/* Component for Trending products upload */}
      <TrendingProductUpload />
      {/* Component for Best Seller products upload */}
      <BestSellerProductUpload />
      {/* Component for Today Deals products upload */}
      <TodayDealProductUpload />
      {/* Component for New Arrival products upload */}
      <NewArrivalProductUpload />
    </section>
  );
};

export default TopProductUpload;
