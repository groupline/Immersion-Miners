import { SlideCountdown } from "react-fancy-countdown";
import { Line } from "rc-progress";

const Counter = ({ icoCounterClass }) => {
  return (
    <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
      <div className={icoCounterClass}>
        <div className="counter-down">
          <div className="content">
            <div className="conuter-header">
              <h3 className="w-text text-center">Minting Starts In.....</h3>
            </div>
            <div className="counterdown-content">
              <div className="count-down titled circled text-center">
                <SlideCountdown weeks={false} deadline="2030-12-31 14:23:22" />
              </div>
              <div className="ico-progress">
                <ul className="list-unstyled list-inline clearfix mb-10">
                  <li className="title">1,232,100</li>
                  <li className="strength">2,464,200 MATIC</li>
                </ul>
                <div className="current-progress">
                  <Line
                    percent="70"
                    trailWidth="3"
                    strokeWidth="4"
                    strokeColor="#fb881d"
                  />
                </div>
                <span className="pull-left">Softcapin 45 days</span>
                <span className="pull-right">in 61 daysHardcap</span>
              </div>
              <div className="text-center">
                <a
                  className="btn dream-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  href="#"
                >
                  White List
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
