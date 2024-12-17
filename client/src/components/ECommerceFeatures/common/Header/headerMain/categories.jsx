import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const [categorytitle, setCategorytitle] = useState([]);

  useEffect(() => {
    axios
      .get("https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/categorylist")
      .then((res) => {
        setCategorytitle(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <div className="flex justify-around mt-5 overflow-x-auto mb-3">
      {categorytitle.map((item) => {
        return (
          <a
            href={item.route}
            className="flex flex-col min-w-28 sm:min-w-36 items-center border-2 border-white hover:border-red-500"
            key={item._id}
            onClick={() => navigate("/")}
          >
            <img className="w-20 sm:w-28" src={item.image} alt="Categories" />
            <p className="text-xs sm:text-base">{item.title}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Categories;
