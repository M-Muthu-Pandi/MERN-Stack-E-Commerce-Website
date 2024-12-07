const Footer = () => {
  return (
    <section className="text-xs w-80 px-8 mb-10 border-t-2 border-gray-300 pt-5">
      <ul className=" mb-5 flex justify-between">
        <li className="text-blue-500 hover:underline hover:text-red-500 font-medium cursor-pointer">
          Conditions of Use{" "}
        </li>
        <li className="text-blue-500 hover:underline hover:text-red-500 font-medium cursor-pointer">
          Privacy Notice{" "}
        </li>
        <li className="text-blue-500 hover:underline hover:text-red-500 font-medium cursor-pointer">
          Help
        </li>
      </ul>

      <p className="text-center">
        © 1996-2024, Infinity.com, Inc. or its affiliates
      </p>
    </section>
  );
};

export default Footer;
