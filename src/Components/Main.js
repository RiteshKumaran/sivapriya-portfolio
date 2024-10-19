import profile from "../image/profile3.jpeg";

const Main = () => {
  const data = {
    facebook: "https://www.facebook.com/profile.php?id=100028138461886",
    linkedin: "https://www.linkedin.com/in/sahil-verma1",
    github: "https://github.com/Sahil-Coder1",
  };

  const contactMe = () => {
    window.open(
      "mailto:26maysahil@gmail.com&subject=Lets Collabe&body=" +
        document.getElementById("desText").value
    );
    document.getElementById("desText").value = "";
  };

  return (
    <div div="main">
      <div className="line" />
      <div className="content-body">
        <div className="div-name">
          <h3>Hi I am</h3>
          <h2>Sivapriya</h2>
          <h1>
            Tech <p style={{ color: "#f4b8da" }}>Enthusiast</p>
          </h1>
          <p>
            Here you'll find a collection of my interests,skills and project
            works. I take interest in solving coding challenges and exploring
            new tech information.
            <br /> I possess a solid foundation in programming languages such as
            Python, Java and C++. I enjoy engaging with teams and exhibiting my
            efforts and endeavours.
          </p>
        </div>

        <div className="div-img">
          <div className="container-img"></div>
          <img alt="logo" src={profile} />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Main;
