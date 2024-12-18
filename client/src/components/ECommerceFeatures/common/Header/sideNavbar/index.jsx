import CartAndOrdersSideNav from "./CartAndOrderSideNav";
import SideNavHeader from "./sideHeaderContent";
import SidenavUserBtn from "./SideNavUser";

const Sidenavbar = ({ handleClose, setIsSideNavVisible }) => {
  return (
    <>
      <aside className="bg-gray-950 sm:hidden w-3/4 h-screen fixed top-0 left-0 z-40">
        {/* Close button for the side nav */}
        <div className="flex justify-end p-2">
          <button
            onClick={handleClose}
            className="text-white text-xl font-bold"
          >
            &times;
          </button>
        </div>
        <SidenavUserBtn /> {/* User button displaying login/logout status */}
        {/* Cart and Orders side navigation */}
        <CartAndOrdersSideNav setIsSideNavVisible={setIsSideNavVisible} />{" "}
        {/* Header with links like Trending, Best Sellers, etc. */}
        <SideNavHeader setIsSideNavVisible={setIsSideNavVisible} />{" "}
      </aside>
    </>
  );
};

export default Sidenavbar;
