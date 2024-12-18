import FootwearProductUpload from "./footwear";
import HandbagProductUpload from "./handbag";
import KidsProductUpload from "./kidsfashion";
import LuggageProductUpload from "./luggages";
import MenProductUpload from "./menClothing";
import SunglassProductUpload from "./sunglass";
import WatchProductUpload from "./watches";
import WomenProductUpload from "./womenClothing";

const CatProductUpload = () => {
  return (
    <section className="flex flex-col gap-2 p-3 sm:px-5 bg-gray-200 rounded-lg w-full sm:w-4/5">
      <h2 className="text-lg md:text-xl lg:text-2xl font-medium ml-3 mb-1">
        Categories
      </h2>

      {/* Render product upload components for each category */}
      <MenProductUpload />
      <WomenProductUpload />
      <KidsProductUpload />
      <FootwearProductUpload />
      <LuggageProductUpload />
      <WatchProductUpload />
      <HandbagProductUpload />
      <SunglassProductUpload />
    </section>
  );
};

export default CatProductUpload;
