import logo from "../image/logo.png";

const Header = () => {
  return (
    <div className="header">
      <h2>
        <span>S</span>ivapriya
      </h2>
      <div className="menu-container">
        <ul type="none">
          <a href=".">
            <li>Home</li>
          </a>
          <a href="#content-body">
            <li>About Me</li>
          </a>
          <a href="#services-div">
            <li>Interest</li>
          </a>
          <a href="#my-projects">
            <li>Projects</li>
          </a>

          <a href="#together">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
