import { Link } from "react-router-dom";

const OrderTitles = ({ ordered, delivered, cancelled, returned }) => {
  // Define the navigation links and associated styles
  const orderdetails = [
    {
      navigate: "/orders",
      style: ordered,
      title: "Ordered",
    },
    {
      navigate: "/orders/delivered",
      style: delivered,
      title: "Delivered",
    },
    {
      navigate: "/orders/cancelled",
      style: cancelled,
      title: "Cancelled",
    },
    {
      navigate: "/orders/returned",
      style: returned,
      title: "Returned",
    },
  ];
  return (
    <section className="rounded-t-lg bg-white p-3 sm:p-5 flex flex-col items-center border-b">
      <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium mb-2 pb-2">
        YOUR ORDERS
      </h1>
      <div className="flex gap-5 sm:gap-10 md:gap-20 lg:gap-40 font-medium text-sm sm:text-base">
        {orderdetails.map((item, index) => {
          return (
            <Link key={index} to={item.navigate}>
              <h3
                className={`hover:text-blue-500 hover:underline underline-offset-4 ${item.style}`}
              >
                {item.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default OrderTitles;
