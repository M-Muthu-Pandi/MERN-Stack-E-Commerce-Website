import { Link } from "react-router-dom";

const SignUpBtn = (props) => {
  const data = props.data;
  const btn = props.button;
  const link = props.link;

  return (
    <section className="flex flex-col gap-3 w-96 px-7">
      <div className="flex items-center justify-center my-2">
        <div className="flex-1 h-px bg-gray-400 mr-2.5"></div>
        <p className="text-gray-500 text-sm">{data}</p>
        <div className="flex-1 h-px bg-gray-400 ml-2.5"></div>
      </div>

      <Link
        to={link} // Navigate to the specified link
        className="mb-2 rounded-md p-2 text-sm bg-gray-100 hover:bg-gray-200 border border-gray-400"
      >
        <button className="w-full">{btn}</button>
      </Link>
    </section>
  );
};

export default SignUpBtn;
