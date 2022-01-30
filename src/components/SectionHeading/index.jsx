const SectionHeading = ({
  title,
  text,
  img,
  ClassSpan = "dream-dots justify-content-center",
  ClassSpanTitle = "",
}) => {
  return (
    <>
      {img ? (
        <div className="section-heading text-center">
          <div className="dream-dots justify-content-center" data-aos="fade-up">
            <img draggable="false" src={img} alt="" />
          </div>
          <h2 data-aos="fade-up">{title}</h2>
          <p data-aos="fade-up">{text}</p>
        </div>
      ) : (
        <div className="section-heading text-center">
          <div className={ClassSpan} data-aos="fade-up">
            <span className={ClassSpanTitle}>{title}</span>
          </div>
          <h2 data-aos="fade-up">{text}</h2>
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
      )}
    </>
  );
};

export default SectionHeading;
