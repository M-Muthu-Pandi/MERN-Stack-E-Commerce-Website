import { useAdmin } from "../../ECommerceFeatures/common/Context/AdminContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../ECommerceFeatures/common/Footer";
import Header from "../../ECommerceFeatures/common/Header";
import CategoryHeadingUpload from "./categoryHeadingUpload";
import SliderUpload from "./sliderUpload";

const OtherUpload = () => {
  const admin = useAdmin();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {admin ? (
        <>
          <Header />
          <main className="flex flex-col gap-5 items-center p-3 sm:p-5">
            <h1 className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium">
              ADD OTHERS
            </h1>
            <section className="flex flex-col gap-2 p-3 sm:px-5 bg-gray-200 rounded-lg w-full sm:w-4/5">
              <CategoryHeadingUpload />
              <SliderUpload />
            </section>

            <button
              onClick={() => navigate("/adminaccess")}
              className="bg-orange-400 rounded-3xl p-2 text-sm hover:bg-orange-500 w-3/4"
            >
              Add Products Page
            </button>
          </main>
          <Footer />
        </>
      ) : (
        <div className="flex flex-col gap-5 items-center mt-5">
          <p className="md:text-lg">
            We're sorry, but this page is not available for user access.
          </p>
          <button
            onClick={handleClick}
            className="font-medium bg-yellow-400 rounded-md p-2 text-sm hover:bg-yellow-500"
          >
            Go to Home
          </button>
        </div>
      )}
    </>
  );
};

export default OtherUpload;
