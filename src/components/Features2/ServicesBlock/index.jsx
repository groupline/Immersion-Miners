const ServicesBlock = ({ img, title, text }) => {
  return (
    <div className="services-block-four v2">
      <div className="inner-box">
        <div className="icon-img-box">
          <img draggable="false" src={img} alt="" />
        </div>
        <h3>
          <a href="#">{title}</a>
        </h3>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default ServicesBlock;
