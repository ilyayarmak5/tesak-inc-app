import Fade from "react-reveal/Fade";

const AboutContainer = () => {
  return (
    <section className="about-us-container">
      <article className="about-us">
        <h1>
          <Fade top cascade>
            Who we are
          </Fade>
        </h1>
        <p>
          We are a group of digital nomads 🧑‍💻 who would like to make your
          life simpler. We're a fast-growing agency as we convey excellence in
          Web Development by providing the right skillset and immaculate work to
          our clients. 🤝
        </p>
      </article>
    </section>
  );
};

export default AboutContainer;
