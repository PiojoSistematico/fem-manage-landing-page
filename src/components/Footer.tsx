import {
  IconFacebook,
  IconInstagram,
  IconLogo,
  IconPinterest,
  IconTwitter,
  IconYoutube,
} from "./Icons";
import CustomForm from "./CustomForm";

const Footer = () => {
  return (
    <footer className="overflow-hidden relative md:grid md:grid-cols-3 md:items-start md:pt-12 bg-neutral-2 p-8 text-base font-BeVietnamPro text-neutral-3 font-normal flex flex-col items-center gap-8">
      <CustomForm></CustomForm>
      <nav className="flex flex-row items-start justify-between w-full px-12 md:px-4 py-4 md:py-0 gap-4 md:order-2">
        <ul className="flex flex-col gap-4">
          <li className="hover:text-primary-1 focus-visible:text-primary-1">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-primary-1 focus-visible:text-primary-1">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-primary-1 focus-visible:text-primary-1">
            <a href="#">Products</a>
          </li>
          <li className="hover:text-primary-1 focus-visible:text-primary-1">
            <a href="#">About Us</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="hover:text-primary-1 focus-visible:text-primary-1">
            <a href="#">Careers</a>
          </li>
          <li className="hover:text-primary-1 focus-visible:text-primary-1">
            <a href="#">Community</a>
          </li>
          <li className="hover:text-primary-1 focus-visible:text-primary-1">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col md:items-start gap-12 md:flex-col-reverse md:pl-12 md:order-1">
        <div className="flex flex-row items-center justify-center gap-4 scale-125 md:justify-start">
          <a
            href="#"
            className="hover:text-primary-1 focus-visible:text-primary-1"
          >
            <IconFacebook></IconFacebook>
          </a>
          <a
            href="#"
            className="hover:text-primary-1 focus-visible:text-primary-1"
          >
            <IconYoutube></IconYoutube>
          </a>
          <a
            href="#"
            className="hover:text-primary-1 focus-visible:text-primary-1"
          >
            <IconTwitter></IconTwitter>
          </a>
          <a
            href="#"
            className="hover:text-primary-1 focus-visible:text-primary-1"
          >
            <IconPinterest></IconPinterest>
          </a>
          <a
            href="#"
            className="hover:text-primary-1 focus-visible:text-primary-1"
          >
            <IconInstagram></IconInstagram>
          </a>
        </div>
        <a href="#" className="text-neutral-5">
          <IconLogo></IconLogo>
        </a>
      </div>

      <p className="text-neutral-1 md:absolute md:right-4 md:bottom-4">
        Copyright 2020. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
