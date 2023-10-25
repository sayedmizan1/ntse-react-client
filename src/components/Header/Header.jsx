import { useEffect, useState, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart, cgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
// import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showcart, setShowcart] = useState(false);
  const [showsearch, setShowsearch] = useState(false);
  const { cartCount } = useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/exam">Exams</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
            <Link to="/">
          <div className="icon">
            <img src="./icon.png" height={"60px"} />

          </div>
            </Link>
          <div className="center">NTSE</div>
          <div className="right">
            <TbSearch onClick={() => setShowsearch(true)} />
          </div>
        </div>
      </header>
      {showsearch && <Search setShowsearch={setShowsearch} />}
    </>
  );
};

export default Header;
