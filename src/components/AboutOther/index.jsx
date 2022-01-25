import { HomeDemo1Computer } from "../../utils/allImgs";

const AboutOther = ({ ClassTitle = "gradient-text blue" }) => {
  return (
    <section className="about-us-area section-padding-0-100 clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 offset-lg-0">
            <div className="who-we-contant">
              <div
                className="dream-dots text-left fadeInUp"
                data-aos="fade-up"
                data-aos-delay="200"
              ></div>
              <h4 className="fadeInUp" data-aos="fade-up" data-aos-delay="200">
                The Club
              </h4>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="200">
                Our collection consists of 12,222 unique generative art pieces,
                some more rare than others and all with unique names. Each NFT
                grants you access to the immersion miner club where members
                receive the bitcoin that is mined by the club’s 250
                miners(32,500TH/s). At current mining difficulty, that comes out
                to about 5 BTC mined every month. Club members will be able to
                vote on whether to reinvest into more miners for the club, or to
                distribute the profits as WBTC evenly to every NFT holder in the
                club.
              </p>

              <a className="btn more-btn mt-30" href="#">
                Whitelist Requirements
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
            <div className="welcome-meter floating-anim fadeInUp">
              <img draggable="false" src={HomeDemo1Computer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOther;
