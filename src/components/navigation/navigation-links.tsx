import "./navigation-links.css";
import { NavLink } from "react-router-dom";

type Props = {
  rootClassName?: string;
  link1?: string;
  link2?: string;
  link3?: string;
};

const NavigationLinks = ({
  rootClassName = "",
  link1 = "אודותינו",
  link2 = "פרוייקטים",
  link3 = "למה אנחנו",
}: Props) => {
  return (
    <nav className={`navigation-links-nav ${rootClassName}`}>
      <span className="navigation-links-text1 Navigation-Link">{link1}</span>
      <NavLink
        to="/projects"
        className="navigation-links-text2 Navigation-Link"
      >
        {link2}
      </NavLink>
      <span className="navigation-links-text3 Navigation-Link">{link3}</span>
    </nav>
  );
};

export default NavigationLinks;
