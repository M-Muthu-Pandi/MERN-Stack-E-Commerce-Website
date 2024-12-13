import { useState } from "react";

const DeliveryDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [state, setState] = useState("");
  const [addAddress, setAddAddress] = useState([
    {
      name: "Muthupandi M",
      number: 9003183706,
      address: "200/129, 2nd floor, Mettu street lane, Ayanavaram",
      landmark: "Near Vanniyar kalyana mandapam.",
      city: "Chennai",
      code: 600023,
      state: "Tamil Nadu",
    },
  ]);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    setAddAddress([
      ...addAddress,
      {
        name: name,
        number: number,
        address: address,
        landmark: landmark,
        city: city,
        code: code,
        state: state,
      },
    ]);
    setName("");
    setNumber("");
    setAddress("");
    setLandmark("");
    setCity("");
    setCode("");
    setState("");
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="bg-white p-5 rounded-lg">
      <h2 className="text-gray-500 font-medium mb-2 pb-2 border-b border-b-gray-300">
        DELIVERY DETAILS
      </h2>

      <button
        onClick={toggleVisibility}
        className="font-medium rounded-md p-2 text-sm bg-orange-400 hover:bg-orange-500"
      >
        Add Address
      </button>

      {isVisible && (
        <form
          onSubmit={handleAddAddress}
          className="bg-green-200 rounded-lg my-3 py-3 flex flex-col items-center"
        >
          <div className="md:w-[424px] lg:w-[520px] px-1 md:px-3 pb-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 my-1 w-11/12 sm:w-48 lg:w-60 border border-gray-400"
              type="text"
              placeholder="Name"
            />
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 my-1 w-11/12 sm:w-48 lg:w-60 border border-gray-400"
              type="text"
              placeholder="10-digit mobile number"
            />
            <br />
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 mt-1.5 w-11/12 sm:w-[98%] lg:w-[98.3%] border border-gray-400"
              placeholder="Address (House No., Floor, Street and Area)"
            />
            <br />
            <input
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 my-1 w-11/12 sm:w-48 lg:w-60 border border-gray-400"
              type="text"
              placeholder="Landmark (Optional)"
            />
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 my-1 w-11/12 sm:w-48 lg:w-60 border border-gray-400"
              type="text"
              placeholder="City/District/Town"
            />
            <br />
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 my-1 w-11/12 sm:w-48 lg:w-60 border border-gray-400"
              type="text"
              placeholder="Pin Code"
            />
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 my-1 w-11/12 sm:w-48 lg:w-60 border border-gray-400"
              type="text"
              placeholder="State"
            />
          </div>
          <button
            className="font-medium mx-4 rounded-md p-2 text-sm bg-orange-400 hover:bg-orange-500"
            type="submit"
          >
            Save Address
          </button>
        </form>
      )}

      {addAddress.map((item, index) => {
        return (
          <div
            key={index}
            className="text-sm lg:text-base mt-5 pt-3 flex gap-4 border-t border-t-gray-300"
          >
            <input className="w-4" id={`address${index}`} type="radio" name="address" />
            <label
              htmlFor={`address${index}`}
              className="cursor-pointer hover:text-blue-500 flex flex-col"
            >
              <span className="font-medium text-lg">
                {item.name} - {item.number}
              </span>
              <span>
                {item.address}, {item.city}, {item.state} - {item.code}.
              </span>
              <span>({item.landmark})</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default DeliveryDetails;
