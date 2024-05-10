import "../styles/Footer.scss";
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/">
          <img src="/assets/logo.png" alt="logo" />
        </a>
        <p> @2024-Omaima&Hajer </p>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>

          <li>
            powered by: <a href="https://logicom-dev.com/">LOGICOM</a>
          </li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+216 58 080 681</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>dreamtravel@support.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  );
};

export default Footer;

// import "../styles/Footer.scss";
// import { LocationOn, LocalPhone, Email } from "@mui/icons-material";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer_left">
//         <a href="/">
//           <img src="/assets/logo.png" alt="logo" />
//         </a>
//       </div>

//       <div className="footer_center">
//         <h3>Useful Links</h3>
//         <ul>
//           <li>About Us</li>
//           <li>Terms and Conditions</li>
//           <li>Return and Refund Policy</li>
//         </ul>
//       </div>

//       <div className="footer_right">
//         <h3>Contact</h3>
//         <div className="footer_right_info">
//           <LocalPhone />
//           <p>+216 58 080 681</p>
//         </div>
//         <div className="footer_right_info">
//           <Email />
//           <p>dreamnest@support.com</p>
//         </div>
//         <img src="/assets/payment.png" alt="payment" />
//       </div>
//     </div>
//   );
// };

// export default Footer;
