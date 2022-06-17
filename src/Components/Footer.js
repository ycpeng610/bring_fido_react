import React from "react";
import "../Styles/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="grid ctr">
          {/* <!-- left --> */}
          <div class="grid_column_left">
            <nav>
              <div class="footer_cnt">
                <h2>COMPANY INFO</h2>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                  <li>
                    <a href="#">Rate Us on TrustPilot</a>
                  </li>
                  <li>
                    <a href="#">iOS App</a>
                  </li>
                  <li>
                    <a href="#">Android App</a>
                  </li>
                  <li>
                    <a href="#">Order Book</a>
                  </li>
                </ul>
              </div>
              <div class="footer_cnt">
                <h2>PARTNERS</h2>
                <ul>
                  <li>
                    <a href="#">Advertise with Us</a>
                  </li>
                  <li>
                    <a href="#">Media</a>
                  </li>
                  <li>
                    <a href="#">Pet Charities</a>
                  </li>
                  <li>
                    <a href="#">Affiliates</a>
                  </li>
                  <li>
                    <a href="#">Link to Us</a>
                  </li>
                  <li>
                    <a href="#">Pet-Friendly Hotel Chains</a>
                  </li>
                  <li>
                    <a href="#">Sites We Like</a>
                  </li>
                </ul>
              </div>
              <div class="footer_cnt">
                <h2>CUSTOMER SERVICE</h2>
                <ul>
                  <li>
                    <a href="#">Cancel a Reservation</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Post a Business</a>
                  </li>
                  <li>
                    <a href="#">Write a Review</a>
                  </li>
                  <li>
                    <a href="#">Share a Photo</a>
                  </li>
                  <li>
                    <a href="#">Pet Friendly Guarantee</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* <!-- right --> */}
          <div class="grid_column_right">
            <h2>
              <a href="#">Post a Spot</a>
            </h2>
            <p>
              Know of another great place to bring Fido?
              <a href="#">Let us know</a>
              <br />
              by sharing your dog’s favorite spot.
            </p>
            <tag>#BringFido</tag>
            <div class="socialIcon">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaPinterest />
              </a>
              <a href="#">
                <FaApple />
              </a>
              <a href="#">
                <FaAndroid />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="sub_footer">
        <div class="ctr ctr_ft">
          <div class="footer_left">
            <span>© 2005-2022 Kendall Media, Inc.</span>
            <span>Privacy Policy & Ads Disclosure</span>
            <span>Terms & Conditions</span>
            <span>Sitemap</span>
          </div>
          <div class="footer_right">
            <span>$USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
