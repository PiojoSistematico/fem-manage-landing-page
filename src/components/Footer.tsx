import { Button, TextField } from "react-aria-components";

import {
  IconFacebook,
  IconInstagram,
  IconLogo,
  IconPinterest,
  IconTwitter,
  IconYoutube,
} from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-neutral-2 p-8 text-base font-BeVietnamPro text-neutral-3 font-normal flex flex-col items-center gap-8">
      <form action="" className="flex flex-row items-center gap-4">
        <input
          type="email"
          className="rounded-3xl text-neutral-1 px-4 py-2 text-sm"
          placeholder="Updates in your inbox"
        />
        <Button className="bg-primary-1 px-6 py-2 rounded-3xl text-neutral-5">
          Go
        </Button>
      </form>
      <nav className="flex flex-row items-start justify-between w-full px-12 py-4">
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row items-center justify-center gap-4 scale-125">
        <a href="#">
          <IconFacebook></IconFacebook>
        </a>
        <a href="#">
          <IconYoutube></IconYoutube>
        </a>
        <a href="#">
          <IconTwitter></IconTwitter>
        </a>
        <a href="#">
          <IconPinterest></IconPinterest>
        </a>
        <a href="#">
          <IconInstagram></IconInstagram>
        </a>
      </div>
      <a href="#" className="text-neutral-5">
        <IconLogo></IconLogo>
      </a>
      <p className="text-neutral-1">Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
