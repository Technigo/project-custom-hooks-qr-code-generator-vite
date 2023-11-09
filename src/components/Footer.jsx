// Import SVG file for logo and the CSS file for this component to apply styles.
import logo from "/technigo-logo.svg";
import styled from "styled-components";

/* CSS styles for the footer */
const StyledFooter = styled.div`
  .footer {
    background: #fff;
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
  }

  .footer-text {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    /* Apply a gradient background to the text using webkit-linear-gradient */
    background: -webkit-linear-gradient(
      45deg,
      #42121d,
      #7b3848,
      #965862,
      #7b3848,
      #42121d
    );
    /* Clip the background to the text */
    background-clip: text;
    /* Clip the background to the text (webkit version) */
    -webkit-background-clip: text;
    /* Set the text color to transparent, making it appear as a gradient */
    -webkit-text-fill-color: transparent;
  }

  .copyright img {
    width: 30px;
    padding-left: 7px;
  }

  .footer a {
    padding: 5px;
    font-size: 20px;
  }
`;

// Define the Footer component as a functional component.
export const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-text">
        <div className="copyright">
          <p>
            Anna Robertsson, 2023 | Web Development student at
            <a
              href="https://www.technigo.io"
              target="_blank"
              title="Technigo"
              rel="noreferrer"
            >
              <img src={logo} alt="Technigo logo" />
            </a>
          </p>
        </div>
        <address className="contact">
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
        </address>
      </div>
    </StyledFooter>
  );
};
