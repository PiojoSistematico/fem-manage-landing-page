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
    <footer className="text-base font-BeVietnamPro bg-neutral-5 text-neutral-1 font-normal">
      <form action="">
        <TextField></TextField>
        <Button>Go</Button>
      </form>
      <nav>
        <ul>
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
        <ul>
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
      <div>
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
      <a href="#">
        <IconLogo></IconLogo>
      </a>
      <p>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
