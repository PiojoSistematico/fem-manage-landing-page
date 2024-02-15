import Logo from "../assets/images/logo.svg";
import { useState } from "react";
import CustomModal from "./CustomModal";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between p-8 text-base font-BeVietnamPro bg-neutral-5 text-neutral-1 font-normal">
      <a>
        <img src={Logo} alt="Logo" />
      </a>
      <CustomModal></CustomModal>
      <nav className="hidden">
        <ul aria-label="Primary" role="list">
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
        </ul>
        <a href="">Get Started</a>
      </nav>
    </header>
  );
};

export default Menu;
