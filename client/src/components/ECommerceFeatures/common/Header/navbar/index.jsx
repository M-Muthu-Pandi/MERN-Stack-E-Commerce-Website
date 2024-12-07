import LogoAndSearch from "./LogoAndSearch";
import UserBtn from "./User";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around bg-gray-950 px-3 py-2">
        <LogoAndSearch />

        <UserBtn />
      </nav>
    </>
  );
};

export default Navbar;
