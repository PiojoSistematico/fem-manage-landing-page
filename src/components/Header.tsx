import CustomModal from "./CustomModal";
import { IconBgDesktop, IconBgMobile, IconLogo } from "./Icons";

const Menu = () => {
  return (
    <header className="relative flex flex-row items-center justify-between p-8 text-base font-BeVietnamPro bg-neutral-5 text-neutral-1 font-normal">
      <picture className="md:hidden absolute top-0 right-0 z-30 max-w-max h-96">
        <IconBgMobile></IconBgMobile>
      </picture>
      <picture className="hidden absolute top-0 right-0 z-20 w-96 h-96">
        <IconBgDesktop></IconBgDesktop>
      </picture>
      <a className="text-primary-2">
        <IconLogo></IconLogo>
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
