import { AdminContext } from "@/App";
import { AdminContextType } from "@/utils/types";
import { useContext } from "react";
import { FaChevronDown, FaMapMarkedAlt } from "react-icons/fa";
import { GiRadarSweep } from "react-icons/gi";
import { IoFingerPrint } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { setIsAdmin } = useContext(AdminContext) as AdminContextType;
  const NavbarItems = [
    {
      name: "Map",
      icon: FaMapMarkedAlt,
      link: "/",
    },
    {
      name: "Fingerprint",
      icon: IoFingerPrint,
      link: "/fingerprint/scan",
    },
    {
      name: "BLE Scanner",
      icon: GiRadarSweep,
      link: "/ble-scan",
    },
  ];

  function handleCollapse() {
    setIsAdmin(false);
  }

  return (
    <div className="bottom-0 left-0 w-full border-t border-gray-700 bg-gray-900">
      <div className="grid h-full grid-cols-7 m-0 font-medium text-2xl">
        {NavbarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              (isActive
                ? "font-semibold text-white bg-gray-700"
                : "text-gray-300 hover:text-white hover:bg-gray-800") +
              " h-12 py-1 flex flex-none center justify-center text-2xl border-r-2 col-span-2"
            }
            aria-label={item.name}
          >
            <item.icon className="text-white" />
          </NavLink>
        ))}
        <button className="center text-2xl text-gray-300 hover:text-white" onClick={handleCollapse}>
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
