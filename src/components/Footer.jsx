import logo from "/technigo-logo.svg";
import QRPortfolio from "/PortfolioQR.png";
import styled from "styled-components";

/* Styling for the footer */
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 20px;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  background: -webkit-linear-gradient(
    45deg,
    #42121d,
    #7b3848,
    #965862,
    #7b3848,
    #42121d
  );

  a {
    font-size: 20px;
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f8f8;
  font-size: 18px;
  /* Apply a gradient background to the footer using webkit-linear-gradient */
  /* background: -webkit-linear-gradient(
    45deg,
    #42121d,
    #7b3848,
    #965862,
    #7b3848,
    #42121d
  );*/
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;

  p {
    display: flex;
    align-items: center;
  }

  img.logo-small {
    display: flex;
    width: 40px;
    padding-left: 7px;
    border: none;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  color: #f8f8f8;

  img.link-qr {
    width: 50px;
    border: none;
  }
`;

const Contact = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

// Define the Footer component as a functional component.
export const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        <Copyright>
          <p>
            Anna Robertsson, 2023 | Web Development student at
            <a
              href="https://www.technigo.io"
              target="_blank"
              title="Technigo"
              rel="noreferrer"
            >
              <img className="logo-small" src={logo} alt="Technigo logo" />
            </a>
          </p>
        </Copyright>
        <Links>
          <Contact>
            <a
              href="https://www.linkedin.com/in/anna-robertsson-829967272/"
              target="_blank"
              title="Anna's LinkedIn"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/AnnaRobertsson"
              target="_blank"
              title="Anna's GitHub"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="mailto:robertsson_anna@hotmail.com"
              target="_blank"
              title="Anna's e-mail"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </Contact>
          <img
            className="link-qr"
            src={QRPortfolio}
            alt="QR code to Anna's portfolio"
          />
        </Links>
      </FooterText>
    </StyledFooter>
  );
};
