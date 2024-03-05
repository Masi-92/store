import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Search from "@mui/icons-material/Search";

const Layout = () => {
  const items = [
    { name: "Home", to: "/", icon: HomeIcon, id: "1" },
    { name: "Contact Me", to: "/ContactMe", icon: PermIdentityIcon, id: "2" },
    { name: "Shopping Cart", to: "/", icon: ShoppingCartIcon, id: "3" },
    { name: "Favorite", to: "/favorite", icon: FavoriteIcon, id: "4" },
    { name: "Search", to: "/search", icon: SearchIcon, id: "5" },
    { name: "SealOrganization", to: "/seal-organization", id: "6" },
    { name: "News", to: "/news", id: "7" },
    { name: "Stor", to: "/Stor", id: "8" },
    { name: "About", to: "/about-us", id: "9" },
  ];

  return (
    <nav className="  bg-red-100   gap-y-2 py-8  h-30 ">
      <ul className=" flex py-1 px-3 gap-y-2 justify-around  " >
        <div className="bg-orange-300 flex">
          <li>
            <NavLink
              to={items[2].to}
              activeClassName="text-blue-500 border-b-2 border-gray-500"
              className="items-center space-x-2"
            >
              <ShoppingCartIcon />
              <span>{items[2].name}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={items[1].to}
              activeClassName="text-blue-500 border-b-2 border-gray-500"
              className="items-center space-x-2"
            >
              <PermIdentityIcon />
              <span>{items[1].name}</span>
            </NavLink>
          </li>
        </div>
        {/* ****************** */}

        <div className="bg-slate-300 flex gap-3">
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

        <div className="bg-white flex gap-3">
          <li>
            <NavLink to={items[1]}>
              <span>
                {items[3].name}
                <FavoriteIcon />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={items[4]}>
              <span>
                {items[4].name} <Search />
              </span>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Layout;
