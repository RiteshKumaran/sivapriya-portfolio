import profile from "../image/profile1.jpeg";

const About = () => {
  return (
    <div>
      <div className="content-body" id="content-body">
        <div className="div-img" id="sec-img">
          <div className="stripe2" />
          <img alt="logo" src={profile} height="500" />
          <br />
        </div>
        <div className="div-name2">
          <h1>About Me</h1>
          <p>
            I fell in love with Programming and Designing because feels like
            haven
            <br />I am fluent in classics like C++ , Python , Problem solving ,
            Java
            <br />
            My field of Interest's are building new Web & Design and Apps
          </p>
          <br />
          <div className="experience-meter">
            Python
            <br />
            <div className="prog-back">
              <div className="prog-parent">
                <div className="ux-div"></div>
                <div className="prog-dot"></div>
              </div>
            </div>
            Java
            <br />
            <div className="prog-back">
              <div className="prog-parent">
                <div className="web-div"></div>
                <div className="prog-dot"></div>
              </div>
            </div>
            C++
            <br />
            <div clasName="prog-back">
              <div className="prog-parent">
                <div className="app-div"></div>
                <div className="prog-dot"></div>
              </div>
            </div>
            Problem Solving
            <br />
            <div className="prog-back">
              <div className="prog-parent">
                <div className="graphic-div"></div>
                <div className="prog-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
