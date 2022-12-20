import { items, lang, navbarContainer, title } from "./styles";

export const Navbar = () => {
  return (
    <nav className={navbarContainer}>
      <div className={lang}>
        <li>EN</li>
        <li>FR</li>
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
