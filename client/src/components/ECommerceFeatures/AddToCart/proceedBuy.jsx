const ProceedBuy = ({ totalItems, subtotalPrice, width }) => {
  return (
    <section className="hidden md:flex p-3 bg-white rounded-md flex-grow basis-1/4 flex-col items-center">
      <h2 className="text-xl lg:text-2xl font-medium mb-5">
        Subtotal ({totalItems} items): ₹.{subtotalPrice.toLocaleString()}
      </h2>
      <button className="bg-yellow-400 rounded-3xl p-2 text-sm hover:bg-yellow-500 w-3/4">
        Proceed to buy
      </button>
    </section>
  );
};

export default ProceedBuy;
