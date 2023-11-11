import logo from "/technigo-logo.svg";
import QRPortfolio from "/PortfolioQR.png";
import styled from "styled-components";

/* Styling for the footer */
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 10px;
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
    font-size: 25px;
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f8f8;
  font-size: 18px;
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4px;

  p {
    display: flex;
  }

  img.logo-small {
    min-width: 40px;
    max-width: 45px;
    padding-left: 7px;
  }

  .separator {
    display: none; /* Initially hide the separator on small screens */
  }

  @media (min-width: 667px) {
    flex-direction: row;
    gap: 0;

    .separator {
      display: inline; /* Display the separator as inline on screens wider than 667px */
      margin: 0 5px; /* Add space on both sides of the separator */
    }
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  color: #f8f8f8;
  margin-top: 15px;

  img.link-qr {
    width: 40px;
    height: 40px;
    margin-left: 50px;
  }
`;

const Contact = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
`;

// Define the Footer component as a functional component.
export const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        <Copyright>
          <p>Anna Robertsson, 2023</p>
          <p className="separator"> | </p>
          <p>Web Development student at</p>
          <a
            href="https://www.technigo.io"
            target="_blank"
            title="Technigo"
            rel="noreferrer"
          >
            <img className="logo-small" src={logo} alt="Technigo logo" />
          </a>
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
