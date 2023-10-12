import { NavbarLinks } from "../data/data";
import burger from "./../assets/images/icon-menu.svg";

const Navbar = () => {
  return (
    <>
      <ul className="hidden sm:flex text-[18px] sm: w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        {NavbarLinks.map((link) => (
          <li className="hover:text-SoftOrange">
            <a href="#">{link.name}</a>
          </li>
        ))}
      </ul>
      <img
        src={burger}
        alt="Menu"
        className="sm:hidden cursor-pointer h-4 w-10"
      />
    </>
  );
};

export default Navbar;
