import Footer from "../common/Footer";
import Header from "../common/Header";
import { useState, useEffect } from "react";
import DeleteAccountButton from "./DeleteAccount";
import AdminButton from "./adminAccessBtn";

const HelpAndSettings = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Toggle the visibility of the delete account section
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <Header />
      <main className="bg-gray-200 p-5">
        <section className="p-5 bg-white rounded-lg">
          <h2 className="text-gray-500 font-medium mb-2 pb-2 border-b border-b-gray-300">
            HELP & SETTINGS
          </h2>
          <div className="p-5">
            <p className="mb-5">
              Need to delete your account?{" "}
              <button
                onClick={toggleVisibility}
                className="text-blue-500 hover:underline underline-offset-4"
              >
                Click here to get started.
              </button>
            </p>
            {isVisible && <DeleteAccountButton />}
          </div>

          <AdminButton />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HelpAndSettings;
