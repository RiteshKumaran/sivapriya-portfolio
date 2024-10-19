import logo from "../image/logo.png";

const Footer = () => {
  return (
    <div className="bottom-nav">
      <div style={{ height: "50px" }}></div>
      <div className="nav">
        <img alt="logo" src={logo} height="60" />
        <h2>Sivapriya</h2>
      </div>
      <div className="navigator">
        <ul type="none">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>

          <li>Contact</li>
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
