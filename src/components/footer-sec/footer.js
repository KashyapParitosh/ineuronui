import React from "react";
import "./footer.scss";
import FooterLogo from "../../gallery/logo-ineunon-footer1.png";
import ISO from "../../gallery/cbimage.png";
function Footer() {
  return (
    <div className="footerMainContainer">
      <div className="footer-sec">
        <div className="footer-box1">
          <div className="footerbox2">
            <div className="try">
              <div className="footer-LinksAndLogo">
                <div className="footer-socialLink-box">
                  <div className="footerLogo">
                    <img src={FooterLogo} alt="FooterLogo" />
                  </div>
                  <div className="footer-socialLink">
                    <span><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                    <span><i class="fa fa-twitter-square" aria-hidden="true"></i></span>
                    <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                    <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
                  </div>
                </div>
              </div>
              <div className="footer-address-details">
                <p>1110 Tower B, Brigade Signature Towers, </p>
                <p>Sannatammanahalli, Bengaluru, Karnataka </p>
                <p>562129.</p>
                <p>contact@ineuron.a</p>
              </div>
            </div>

            <div className="footer-aboutAndContact">
              <div className="footerBoxes">
                <div className="footer-company sameClass">Company</div>
                <div className="footer-company-details sameClass2">
                  <span>About Us</span>
                  <span>Blog</span>
                  <span>Success Stories</span>
                </div>
              </div>

              <div className="footerBoxes">
                <div className="footer-QuickLinks sameClass">Quicks Links</div>
                <div className="footer-QuickLinks-details sameClass2">
                  <div>Internship</div>
                  <div>iNeuron Vision</div>
                </div>
              </div>

              <div className="footerBoxes">
                <div className="footer-support sameClass">Support</div>
                <div className="footer-support-details sameClass2">
                  <div>Contact Us</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-box2">
          <div className="ISO-Logo-box">
            <div className="isoLogo">
              <img src={ISO} alt="Photo ISO" />
              <div className="iso9001">ISO 9001</div>
            </div>
          </div>

          <div className="terms-condition-box">
            <div className="TAndC-Box1">&#169; iNeuron, inc. 2021</div>
            <div className="TAndC-Box2">Terms & Condition | Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
