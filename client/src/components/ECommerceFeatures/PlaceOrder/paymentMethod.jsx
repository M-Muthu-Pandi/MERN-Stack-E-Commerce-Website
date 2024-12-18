const PaymentMethod = ({ setSelectedPaymentMethod }) => {
  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      <h2 className="text-gray-500 font-medium mb-2 pb-2 border-b border-b-gray-300">
        PAYMENT METHOD
      </h2>

      {/* Payment options */}
      <div className="flex gap-4 mb-2 pt-1 pb-3 text-sm lg:text-base border-b border-b-gray-300">
        <input className="w-4" id="upi" type="radio" name="payment" disabled />
        <label
          htmlFor="upi"
          className="cursor-pointer font-medium text-gray-500"
        >
          UPI
          <span className="ml-1 font-normal text-sm text-gray-500">
            - Pay by any UPI app
          </span>
        </label>
      </div>
      <div className="flex gap-4 mb-2 pt-1 pb-3 text-sm lg:text-base border-b border-b-gray-300">
        <input className="w-4" id="card" type="radio" name="payment" disabled />
        <label
          htmlFor="card"
          className="cursor-pointer font-medium text-gray-500"
        >
          Credit / Debit / ATM Card
        </label>
      </div>
      <div className="flex gap-4 mb-2 pt-1 pb-3 text-sm lg:text-base border-b border-b-gray-300">
        <input
          className="w-4"
          id="net-banking"
          type="radio"
          name="payment"
          disabled
        />
        <label
          htmlFor="net-banking"
          className="cursor-pointer font-medium text-gray-500"
        >
          Net Banking
        </label>
      </div>
      <div className="flex gap-4 mb-2 pt-1 pb-3 text-sm lg:text-base border-b border-b-gray-300">
        <input
          className="w-4"
          id="cod"
          type="radio"
          name="payment"
          onChange={() => setSelectedPaymentMethod("COD")}
        />
        <label
          htmlFor="cod"
          className="cursor-pointer hover:text-blue-500 font-medium"
        >
          Cash On Delivery
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
