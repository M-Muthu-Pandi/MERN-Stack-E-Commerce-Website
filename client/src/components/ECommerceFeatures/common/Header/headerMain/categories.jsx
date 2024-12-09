import men from "../../../../../assets/categories/men.png";
import women from "../../../../../assets/categories/women.png";
import kids from "../../../../../assets/categories/kids.png";
import footwear from "../../../../../assets/categories/footwear.png";
import luggage from "../../../../../assets/categories/luggage.png";
import watch from "../../../../../assets/categories/Watches.png";
import handbag from "../../../../../assets/categories/handbags.png";
import sunglass from "../../../../../assets/categories/sunglass.png";

const Categories = () => {
  const categorytitle = [
    {
      src: men,
      title: "Men's Clothing",
      route: "#men's-clothing",
    },
    {
      src: women,
      title: "Women's Clothing",
      route: "#women's-clothing",
    },
    {
      src: kids,
      title: "Kid's Fashion",
      route: "#kid's-fashion",
    },
    {
      src: footwear,
      title: "Footwear",
      route: "#footwear",
    },
    {
      src: luggage,
      title: "Luggage & Bags",
      route: "#luggage-bags",
    },
    {
      src: watch,
      title: "Watches",
      route: "#watches",
    },
    {
      src: handbag,
      title: "Handbags",
      route: "#handbags",
    },
    {
      src: sunglass,
      title: "Sunglasses",
      route: "#sunglasses",
    },
  ];

  return (
    <div className="flex justify-around mt-5 overflow-x-auto mb-3">
      {categorytitle.map((item, index) => {
        return (
          <a
            href={item.route}
            className="flex flex-col min-w-32 sm:min-w-36 items-center border-2 border-white hover:border-red-500"
            key={index}
          >
            <img className="w-28" src={item.src} alt="Categories" />
            <p className="text-sm sm:text-base">{item.title}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Categories;
