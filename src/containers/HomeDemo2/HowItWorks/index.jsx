import SectionHeading from "../../../components/SectionHeading";
import "./style.css";
const HowItWorks = ({ data, ClassSpanTitle }) => {
  return (
    <section
      className="darky how section-padding-0-0"
      style={{ paddingBottom: "70px" }}
    >
      <div className="container">
        <div className="section-heading text-center">
          <div className="dream-dots justify-content-center" data-aos="fade-up">
            <span className="gradient-text blue">Get Started</span>
          </div>
          <h2 data-aos="fade-up">Join Us</h2>
          <p data-aos="fade-up">
            <div className="">
              <ul className="social-ul-sec">
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
          </p>
        </div>

        <div className="row">
          {data &&
            data.map((item, key) => (
              <div className="col-12 col-md-6 col-lg-4" key={key}>
                <div className="service_single_content box-shadow text-center mb-100">
                  <div className="service_icon">
                    <img
                      draggable="false"
                      src={item.img1}
                      className="colored-icon"
                      alt=""
                    />
                    <img
                      draggable="false"
                      src={item.img2}
                      className="white-icon"
                      alt=""
                    />
                    <span className="step-num">{item.steps}</span>
                  </div>
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
