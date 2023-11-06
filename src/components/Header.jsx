import { AiFillGithub } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import logo from "/studio-qr-code-logo.png";

export const Header = () => {
  return (
    <header>
      <div className="flex">
        <a href="https://github.com/JuliaHolm">
          <AiFillGithub className="github-icon" />
        </a>
        <a href="https://github.com/JuliaHolm">By Julia Holm</a>
      </div>
      <img className="logo" src={logo} alt="" />
      <div className="flex">
        <p>QR generator</p>
        <BsQrCodeScan className="scan-icon" />
      </div>
    </header>
  );
};
