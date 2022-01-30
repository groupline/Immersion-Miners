const SecHeroSection = ({
  ClassSec = "",
  ClassDiv = "",
  specialHead = "",
  title = "",
  link1 = "",
  link2 = "",
  img = "",
  HomeDemo1Or3Or4Or5Or6 = true,
  HomeDemo1Or4Or5Or6 = true,
}) => {
  // AbsoImgInfo="",
  // AddWrapper=false,
  // HomeDemo1=false,
  // HomeDemo2=false,
  // HomeDemo3=false,
  // HomeDemo4=false,
  // HomeDemo5=false,
  // HomeDemo6=false

  return (
    <section className={ClassSec} id="home">
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="welcome-content">
                <div className="promo-section">
                  <h3 className="special-head dark">{specialHead}</h3>
                </div>
                <h1>{title}</h1>
                <p className="w-text fadeInUp" data-wow-delay="0.3s">
                  Whitelist today for our NFT and join our bitcoin mining clud.
                  Each of our NFT’s comes with a smart contract utility on the
                  block chain allowing you to earn 40-50% APR* thru our bitcoin
                  immersion mining farms.
                </p>
                <p className="w-text fadeInUp" data-wow-delay="0.3s">
                  At the current mining difficulty, 32,500 TH/s will produce
                  slightly more than 5 BTC per month. with our power cost of
                  $.04/KWh, the monthly power bill comes out to only $30k. This
                  means that at bitcoins current price of $40k, the 250 miners
                  will profit about $180k worth of bitcoin every month. Since
                  our energy cost is so low, the price of bitcoin would need to
                  drop below $6000 for the miners to not be profitable.
                </p>

                <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                  <a href="#" className="btn more-btn mr-3">
                    White List
                  </a>
                  <a href="#" className="btn more-btn">
                    Video
                  </a>
                </div>
              </div>
            </div>
            {HomeDemo1Or3Or4Or5Or6 && (
              <div className="col-lg-6">
                {HomeDemo1Or4Or5Or6 && (
                  <div className="illusto-2">
                    <img draggable="false" draggable="false" src={img} alt="" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecHeroSection;
