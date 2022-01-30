import Alien from "../../../assets/img/alien2.png";
import "./style.css";
const ServicesBlock = () => {
  return (
    <div className="parent-img">
      <div className="main-img">
        <img className="alien-img" src={Alien} />
        <div className="alien-text">
          <p>20% minted = 50 miners (about 6,500 TH/s)</p>
          <p>40% minted = 100 miners (about 13,000 TH/s)</p>
          <p>100% minted = 250 miners (about 32,500 TH/s)</p>
        </div>
      </div>
      <button className="btn ds-btn btn-warning">
        Join Our Discord Server
      </button>
    </div>
  );
};

export default ServicesBlock;

{
  /* <div className="inner-box">
  <div className="icon-img-box">
    <img draggable="false" src={img} alt="" />
  </div>
  <h3>
    <a href="#">{title}</a>
  </h3>
  <div className="text">{text}</div>
</div>; */
}
