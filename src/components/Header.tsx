import CustomModal from "./CustomModal";
import { IconBgDesktop, IconBgMobile, IconLogo } from "./Icons";

const Menu = () => {
  return (
    <header className="relative flex flex-row items-center justify-between p-8 text-base font-BeVietnamPro bg-neutral-5 text-neutral-1 font-normal">
      {/* <picture className="md:hidden absolute top-0 right-0 z-30 max-w-max h-96">
        <IconBgMobile></IconBgMobile>
      </picture>
      <picture className="hidden absolute top-0 right-0 z-20 w-96 h-96">
        <IconBgDesktop></IconBgDesktop>
      </picture> */}
      <a className="text-primary-2">
        <IconLogo></IconLogo>
      </a>
      <CustomModal></CustomModal>
      <nav className="hidden md:block text-primary-2">
        <ul className="flex flex-row items-center gap-4 lg:gap-8">
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
