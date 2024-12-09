import CartAndOrdersSideNav from "./CartAndOrderSideNav";
import SideNavHeader from "./sideHeaderContent";
import SidenavUserBtn from "./SideNavUser";

const Sidenavbar = ({ handleClose }) => {
  return (
    <>
      <aside className="bg-gray-950 sm:hidden w-1/2 h-screen fixed top-0 left-0 z-40">
        <div className="flex justify-end p-2">
          <button
            onClick={handleClose}
            className="text-white text-xl font-bold"
          >
            &times;
          </button>
        </div>
        <SidenavUserBtn />

        <CartAndOrdersSideNav />

        <SideNavHeader handleClose={handleClose} />
      </aside>
    </>
  );
};

export default Sidenavbar;
