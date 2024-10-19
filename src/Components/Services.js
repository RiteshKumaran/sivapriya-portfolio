import graphic from "../image/graphic-design.png";
import ui from "../image/ui-design.png";
import web from "../image/web-design.png";
import ux from "../image/ux-design.png";

const Services = () => {
  return (
    <div className="services-div" id="services-div">
      <div className="line"></div>
      <h1>Interests</h1>
      <p className="desc">
        My area of interest is to work on web development, app development, and
        <br />
        designing
      </p>
      <ul type="none">
        <li>
          <div className="round-box">
            <h2>Web development</h2>
            <p>
              Includes visual,UX,and technical aspects,arranging
              elements,choosing best colors, and images.
            </p>
          </div>
        </li>
        <li>
          <div className="round-box">
            <h2>App development</h2>
            <p>
              Creating the app's flow and structure,Making stylistic choices
              from colors to fonts, app security
            </p>
          </div>
        </li>
        <li>
          <div className="round-box">
            <h2>Data structure</h2>
            <p>
              {" "}
              Problem-solving, data structures, algorithms, and complexity
              efficiently and effectively
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;
