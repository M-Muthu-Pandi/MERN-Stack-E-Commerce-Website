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
    },
    {
      src: women,
      title: "Women's Clothing",
    },
    {
      src: kids,
      title: "Kid's Fashion",
    },
    {
      src: footwear,
      title: "Footwear",
    },
    {
      src: luggage,
      title: "Luggage & Bags",
    },
    {
      src: watch,
      title: "Watches",
    },
    {
      src: handbag,
      title: "Handbags",
    },
    {
      src: sunglass,
      title: "Sunglasses",
    },
  ];

  return (
    <ul className="flex justify-around mt-5 overflow-x-auto">
      {categorytitle.map((item, index) => {
        return (
          <li className="flex flex-col min-w-32 sm:min-w-36 items-center" key={index}>
            <img className="w-28" src={item.src} alt="Categories" />
            <p className="text-sm sm:text-base">{item.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
