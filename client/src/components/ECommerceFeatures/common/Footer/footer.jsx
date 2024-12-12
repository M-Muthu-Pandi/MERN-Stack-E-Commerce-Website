const FooterContent = () => {
  const knowUs = ["About Infinity", "Carrers", "Press Releases", "Contact Us"];
  const connectUs = ["Facebook", "Twitter", "Instagram"];
  const help = [
    "Help and Support",
    "Your Account",
    "Recalls and Product Safety Alerts",
    "Returns Centre",
    "100% Purchase Production",
    "Infinity App Download",
    "Orders",
  ];
  const moneyWithUs = [
    "Sell on Infinity",
    "Sell under Infinity Accelerator",
    "Protect and Build Your Brand",
    "Infinity Global Selling",
    "Supply to Infinity",
    "Become an Affiliate",
    "Fulfilment by Infinity",
    "Advertise Your Products",
    "Infinity Pay on Merchants",
  ];

  return (
    <div className="bg-gray-950 p-10 flex justify-around flex-wrap gap-10">
      <div className="flex-grow basis-2/5 md:basis-1/5">
        <h4 className="text-lg sm:text-xl font-bold">Get to Know Us</h4>
        {knowUs.map((item, index) => {
          return (
            <p
              className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex-grow basis-2/5 md:basis-1/5">
        <h4 className="text-lg sm:text-xl font-bold">Connect with Us</h4>
        {connectUs.map((item, index) => {
          return (
            <p
              className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex-grow basis-2/5 md:basis-1/5">
        <h4 className="text-lg sm:text-xl font-bold">Make Money with Us</h4>
        {moneyWithUs.map((item, index) => {
          return (
            <p
              className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex-grow basis-2/5 md:basis-1/5">
        <h4 className="text-lg sm:text-xl font-bold">Let Us Help You</h4>
        {help.map((item, index) => {
          return (
            <p
              className="mt-2 hover:underline cursor-pointer text-sm sm:text-base"
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FooterContent;
