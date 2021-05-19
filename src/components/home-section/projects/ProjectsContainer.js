
import "swiper/swiper-bundle.css";

import SwiperContainer from "./SwiperContainer";
import ViewAllBtn from "../../buttons/ViewAllBtn";

import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <div className="projects-header">
        <h2>
          <Fade top cascade>
            Featured Projects
          </Fade>
        </h2>
        <Bounce left>
          <p>
            Learn about our projects or check out our most favourite ones by
            swiping the slider.
          </p>
          <ViewAllBtn url={"/projects"} />
        </Bounce>
      </div>
      <SwiperContainer />
    </section>
  );
};

export default ProjectsContainer;
