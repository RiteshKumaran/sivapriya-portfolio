import logo from "../image/logo.png";

const Footer = () => {
  return (
    <div className="bottom-nav">
      <div style={{ height: "50px" }}></div>
      <div className="nav">
        {/* <img alt="logo" src={logo} height="60" /> */}
        <span style={{ color: "#f4b8da", fontSize: "35px" }}>S</span>
        <h2>ivapriya</h2>
      </div>
      <div className="navigator">
        <ul type="none">
          <a href=".">
            <li>Home</li>
          </a>
          <a href="#content-body">
            <li>About Me</li>
          </a>
          <a href="#services-div">
            <li>Interests</li>
          </a>
          <a href="#my-projects">
            <li>Projects</li>
          </a>
          <a href="#together">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div>
        <div>
          Email :<span>sivapriyyaa@gmail.com</span>
        </div>
        <div>
          Phone :<span>8667707807</span>
        </div>
      </div>
      <br />
      <p id="visits"></p>{" "}
      <div className="copyright">
        &copy; 2024 <span>Sivapriya</span> All Right Reserved , Inc.
      </div>
    </div>
  );
};

export default Footer;
