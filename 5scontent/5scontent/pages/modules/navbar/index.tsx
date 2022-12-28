import Circle from "./circle.svg";
import { hoverOffset, items, lang, navbarContainer, title } from "./styles";

export const Navbar = () => {
  return (
    <nav className={navbarContainer}>
      <div className={lang}>
        <li style={{display:"flex", flexDirection:"column", margin:"2rem 0"}} className={hoverOffset}>EN
        <Circle />
        </li>
        <li style={{display:"flex", flexDirection:"column"}} className={hoverOffset}>FR
        <Circle/>
        </li>
      </div>
      <div className={items}>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </div>
      <div className={title}>5S IS A CREATIVE STUDIO</div>
    </nav>
  );
};

export default Navbar;
