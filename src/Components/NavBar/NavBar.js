import "./NavBar.scss";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <span className="logo">LOGO</span>

          <ul>
            <li>Home</li>
            <li>Productos</li>
            <li>Contacto</li>
            <li>FAQS</li>
          </ul>

          <CartWidget />
        </nav>
      </header>
    </>
  );
};
