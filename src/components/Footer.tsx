import { Button, TextField } from "react-aria-components";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconYoutube from "../assets/images/icon-youtube.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import Logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer>
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
          <img src={iconFacebook} alt="icon Facebook" />
        </a>
        <a href="#">
          <img src={iconYoutube} alt="icon Youtube" />
        </a>
        <a href="#">
          <img src={iconTwitter} alt="icon Twitter" />
        </a>
        <a href="#">
          <img src={iconPinterest} alt="icon Pinterest" />
        </a>
        <a href="#">
          <img src={iconInstagram} alt="icon Instagram" />
        </a>
      </div>
      <a href="#">
        <img src={Logo} alt="manage logo" />
      </a>
      <p>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
