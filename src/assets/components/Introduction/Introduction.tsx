import Slider from "react-slick";
import "./Introduction.scss";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 1500,
  arrows: false,
};

export default function Introduction() {
  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="introduction-content">
            <div>
              <h3 className="accent">Hello!</h3>
              <h1>
                I'm <span className="accent">Oskar Straszyński</span>
              </h1>
              <h2>A freelance Web Developer</h2>
              <button className="primary-button">Contact me</button>
              <button className="secondary-button"> Work </button>
            </div>
            <img
              src="https://via.placeholder.com/500"
              alt="Placeholder Image"
            />
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </>
  );
}
