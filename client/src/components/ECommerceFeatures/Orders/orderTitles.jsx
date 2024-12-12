import { Link } from "react-router-dom";

const OrderTitles = ({ ordered, delivered, cancelled, returned }) => {
  return (
    <section className="rounded-t-lg bg-white p-3 sm:p-5 flex flex-col items-center border-b">
      <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium mb-2 pb-2">
        YOUR ORDERS
      </h1>
      <div className="flex gap-5 sm:gap-10 md:gap-20 lg:gap-40 font-medium text-sm sm:text-base">
        <Link to={"/orders"}>
          <h3
            className={`hover:text-blue-500 hover:underline underline-offset-4 ${ordered}`}
          >
            Ordered
          </h3>
        </Link>
        <Link to={"/orders/delivered"}>
          <h3
            className={`hover:text-blue-500 hover:underline underline-offset-4 ${delivered}`}
          >
            Delivered
          </h3>
        </Link>
        <Link to={"/orders/cancelled"}>
          <h3
            className={`hover:text-blue-500 hover:underline underline-offset-4 ${cancelled}`}
          >
            Cancelled
          </h3>
        </Link>
        <Link to={"/orders/returned"}>
          <h3
            className={`hover:text-blue-500 hover:underline underline-offset-4 ${returned}`}
          >
            Returned
          </h3>
        </Link>
      </div>
    </section>
  );
};

export default OrderTitles;
