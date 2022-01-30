import SectionHeading from "../SectionHeading";

const OurBlog = ({ data, ClassSpanTitle }) => {
  return (
    <section className="our_blog_area clearfix section-padding-100-0" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionHeading
              text="Recent News"
              ClassSpanTitle={ClassSpanTitle}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          {data &&
            data.map((item, key) => (
              <div className="col-12 col-md-6 col-lg-4" key={key}>
                <div className="single-blog-area" data-aos="fade-up">
                  {/* Post Thumbnail */}

                  {/* Post Content */}
                  <div className="blog-content">
                    {/* Dream Dots */}
                    <div className="post-meta mt-20">
                      <p>
                        <a href="#">January 24, 2022</a>{" "}
                        <a href="#" className="post-comments"></a>
                      </p>
                    </div>
                    <a href="#" className="post-title">
                      <h4>{item.title}</h4>
                    </a>
                    <p>{item.text}</p>
                    <a href="#" className="btn more-btn mt-15">
                      Read Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
