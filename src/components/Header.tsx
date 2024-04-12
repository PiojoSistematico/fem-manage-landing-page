import CustomModal from "./CustomModal";
import { IconBgDesktop, IconBgMobile, IconLogo } from "./Icons";

const Menu = () => {
  return (
    <header className="relative flex flex-row items-center justify-between p-8 text-base font-BeVietnamPro bg-neutral-5 text-neutral-1 font-normal">
      <a className="text-primary-2">
        <IconLogo></IconLogo>
      </a>
      <CustomModal></CustomModal>
      <nav className="hidden md:block text-primary-2">
        <ul className="flex flex-row items-center gap-4 lg:gap-8">
          <li className="hover:opacity-70 focus-visible:opacity-70">
            <a href="">Pricing</a>
          </li>
          <li className="hover:opacity-70 focus-visible:opacity-70">
            <a href="">Product</a>
          </li>
          <li className="hover:opacity-70 focus-visible:opacity-70">
            <a href="">About Us</a>
          </li>
          <li className="hover:opacity-70 focus-visible:opacity-70">
            <a href="">Careers</a>
          </li>
          <li className="hover:opacity-70 focus-visible:opacity-70">
            <a href="">Community</a>
          </li>
        </ul>
      </nav>
      <a
        className="hidden bg-primary-1 text-neutral-4 rounded-3xl px-8 py-2 hover:opacity-70 focus-visible:opacity-70 md:block"
        href=""
      >
        Get Started
      </a>
    </header>
  );
};

export default Menu;
