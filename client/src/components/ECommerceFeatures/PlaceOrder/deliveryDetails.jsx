import axios from "axios";
import { useState, useEffect } from "react";

const DeliveryDetails = ({ setSelectedAddress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [state, setState] = useState("");
  const [addAddress, setAddAddress] = useState([]);

  useEffect(() => {
    axios
      .get("https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/deliverydetails")
      .then((res) => {
        setAddAddress(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleAddAddress = async (e) => {
    const deliveryData = {
      name: name,
      number: parseFloat(number),
      address: address,
      landmark: landmark,
      city: city,
      code: parseFloat(code),
      state: state,
    };

    if (number.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      e.preventDefault();
      return;
    }
    if (code.length !== 6) {
      alert("Enter a valid 6-digit pin code");
      e.preventDefault();
      return;
    }

    try {
      const response = await axios.post(
        "https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/deliverydetails",
        deliveryData
      );
      alert("Address added successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Failed to add address. Check the console for details.");
      console.error(error);
    }
  };

  const handleRemoveAddress = async (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      try {
        await axios.delete(`https://mu2-infinity-mern-stack-e-commerce.onrender.com/api/deliverydetails/${id}`);
        setAddAddress((prev) => prev.filter((address) => address._id !== id));
        alert("Address removed successfully!");
      } catch (error) {
        alert("Failed to remove address. Check the console for details.");
        console.error(error);
      }
    }
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
              required
            />
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 my-1 w-11/12 sm:w-48 lg:w-60 border border-gray-400"
              type="number"
              placeholder="10-digit mobile number"
              required
            />
            <br />
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 mt-1.5 w-11/12 sm:w-[98%] lg:w-[98.3%] border border-gray-400"
              placeholder="Address (House No., Floor, Street and Area)"
              required
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
              required
            />
            <br />
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 my-1 w-11/12 sm:w-48 lg:w-60 border border-gray-400"
              type="number"
              placeholder="Pin Code"
              required
            />
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="p-1 sm:p-2 rounded-md mx-3 sm:mx-1 my-1 w-11/12 sm:w-48 lg:w-60 border border-gray-400"
              type="text"
              placeholder="State"
              required
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

      {addAddress.map((item) => {
        return (
          <div
            key={item._id}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between border-t border-t-gray-300 mt-5 pt-3"
          >
            <div className="text-sm lg:text-base flex gap-4">
              <input
                className="w-4"
                id={`address${item._id}`}
                type="radio"
                name="address"
                onChange={() => setSelectedAddress(item)}
              />
              <label
                htmlFor={`address${item._id}`}
                className="cursor-pointer hover:text-blue-500 flex flex-col"
              >
                <span className="font-medium text-lg">
                  {item.name} - {item.number}
                </span>
                <span>
                  {item.address}, {item.city}, {item.state} - {item.code}.
                </span>
                <span>{item.landmark}</span>
              </label>
            </div>
            <button
              onClick={() => handleRemoveAddress(item._id)}
              className="lg:min-w-max border-2 border-gray-300 rounded-3xl py-1 px-2 text-xs hover:bg-gray-300 mt-2"
            >
              Remove Address
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DeliveryDetails;
