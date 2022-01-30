import "./style.css";
import Whitepaper from "../../assets/img/whitepaper.png";
const SpreadMap = ({ SectionIcon11 }) => {
  return (
    <section className="spread-map download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xs-12">
            <div className="welcome-meter">
              <img
                draggable="false"
                src={Whitepaper}
                className="center-block"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-xs-12 mt-s">
            <div className="who-we-contant">
              <div className="dream-dots text-left">
                <img draggable="false" src={SectionIcon11} alt="" />
              </div>
              <h4 className="text-white">Learn more about our NFT project</h4>
              <p className="text-white">
                Download our white paper or watch our introductory video.
              </p>
              <a className="btn dream-btn mt-30" href="#">
                Video
              </a>
              <a className="btn white-pp dream-btn mt-30" href="#">
                White Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpreadMap;
