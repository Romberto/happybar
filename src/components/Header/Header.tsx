import { Link } from "react-router-dom";
import ContactBlock from "../UI/ContactBlock";
import MenuBurger from "../UI/MenuBurger";




const Header = () => {
    return (
      <header className="absolute top-0">
        <ul className="p-2 header__inner grid grid-cols-2 md:grid-cols-3 w-full">
          <li className="md:order-1 justify-self-start content-center col-span-1">
            <ContactBlock />
          </li>
          <li className="md:order-3 justify-self-end content-center col-span-1">
            <MenuBurger />
          </li>
          <li className="md:order-2 md:col-span-1 justify-self-center content-center col-span-3">
            <Link to={"/"}>
              <img
                src={"happybar/img/logod70e9670826e3811c6f1..png"}
                alt="Logo"
              />
            </Link>
          </li>
        </ul>
      </header>
    );
}

export default Header;
