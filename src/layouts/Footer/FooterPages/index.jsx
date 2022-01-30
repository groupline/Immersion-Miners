import { FooterPattern } from "../../../utils/allImgs";
import Footerimg from "../../../assets/img/header.png";
import SectionHeading from "../../../components/SectionHeading";
import "./style.css";
import "../Footer.scss";

import IcoName from "../../../data/data-layout/Footer/data-IcoName.json";
import TextFooter from "../../../data/data-layout/Footer/data-TextFooter.json";

const FooterPages = ({ ClassSpanTitle = "" }) => {
  return (
    <footer
      className="footer-area bg-img mt-5"
      style={{ backgroundImage: `url(${FooterPattern})` }}
    >
      <div
        className="footer-area bg-img"
        style={{ backgroundImage: `url(${FooterPattern})` }}
      >
        <div className="footer-content-area demo">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="footer-copywrite-info">
                  <div
                    className="copywrite_text fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="footer-logo">
                      <a href="#">
                        <img
                          draggable="false"
                          width="300"
                          src={Footerimg}
                          alt="logo"
                        />{" "}
                      </a>
                    </div>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Velit ducimus voluptatibus neque illo id repellat
                      quisquam? Autem expedita earum quae laborum ipsum ad.
                    </p> */}
                  </div>
                </div>
              </div>

              {TextFooter &&
                TextFooter.map((item, key) => (
                  <div key={key} className={item.classBlock}>
                    <div className="contact_info_area d-sm-flex justify-content-between">
                      <div className={item.classInfo} data-wow-delay="0.3s">
                        <h5>{item.title}</h5>
                        <a href="">
                          <p>{item.text1}</p>
                        </a>
                        <a href="">
                          <p>{item.text2}</p>
                        </a>
                        <a href="">
                          <p>{item.text3}</p>
                        </a>
                        <a href="">
                          <p>{item.text4}</p>
                        </a>
                        {item.text5 && (
                          <a href="">
                            <p>{item.text5}</p>
                          </a>
                        )}
                        <a href="">
                          <p>{item.text6}</p>
                        </a>
                        <a href="">
                          <p>{item.text7}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="">
                <ul className="social-ul-footer">
                  <a href="">
                    <li>
                      <i class="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </li>
                  </a>
                  <a
                    href="https://www.tiktok.com/@immersion.miners"
                    target="_blank"
                  >
                    <li>
                      <i class="fab fa-tiktok"></i>
                      <span>TikTok</span>
                    </li>
                  </a>
                  <a href="https://t.co/dgjCcyrc65" target="_blank">
                    <li>
                      <i class="fab fa-discord"></i>
                      <span>Discord</span>
                    </li>
                  </a>
                  <a href="https://twitter.com/immersionminers" target="_blank">
                    <li>
                      <i class="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPages;
