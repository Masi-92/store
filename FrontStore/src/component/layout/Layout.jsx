import HomeIcon from "@mui/icons-material/Home";
import {
  Heart,
  ShoppingCart,
  User,
  SearchNormal1,
  TriangleLogo,
} from "iconsax-react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const items = [
    { name: "Home", to: "/", icon: HomeIcon, id: "1" },
    { name: "", to: "/ContactMe", icon: User, id: "2" },
    { name: "Shopping Cart", to: "/", icon: ShoppingCart, id: "3" },
    { name: "", to: "/favorite", icon: Heart, id: "4" },
    { name: "", to: "/search", icon: SearchNormal1, id: "5" },
    { name: "SealOrganization", to: "/seal-organization", id: "6" },
    { name: "News", to: "/news", id: "7" },
    { name: "Stor", to: "/Stor", id: "8" },
    { name: "About", to: "/about-us", id: "9" },
  ];

  return (
    <div>
      <nav className="   gap-y-2 py-3   fixed top-0 w-full z-10">
        <ul className=" flex py-1 px-3 gap-y-2 justify-around   items-center">
          <div className="flex gap-2 items-center bg-blue-gray-50 bg-opacity-30 rounded-md p-1">
            <li>
              <NavLink
                to={items[2].to}
                //className="text-blue-500 border-b-2 border-gray-500"
              >
                <ShoppingCart />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={items[1].to}
            
                className="items-center space-x-2 "
              >
                <User />
              </NavLink>
            </li>
          </div>
          {/* ****************** */}

          <div className=" flex gap-4  bg-blue-gray-50 bg-opacity-30 rounded-md p-1">
            <li>
              <NavLink to={items[5]}>
                <span>{items[5].name}</span>
              </NavLink>
            </li>

            <li>
              <NavLink to={items[6].to}>
                <span>{items[6].name}</span>
              </NavLink>
            </li>
            <span>
              <TriangleLogo />
            </span>
            <li>
              <NavLink to={items[7].to}>
                <span>{items[7].name}</span>
              </NavLink>
            </li>

            <li>
              <NavLink to={items[8]}>
                <span> {items[8].name}</span>
              </NavLink>
            </li>
          </div>
          {/* ******************************** */}
          <div className=" flex gap-3 bg-blue-gray-50  bg-opacity-30 rounded-md p-1 ">
            <li>
              <NavLink to={items[1]}>
                <span>
                  <Heart />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={items[4]}>
                <span>
                  {items[4].name} <SearchNormal1 />
                </span>
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
