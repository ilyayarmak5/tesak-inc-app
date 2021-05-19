import ProjectHeader from "./ProjectHeader";
import ProjectAbout from "./about/ProjectAbout";
import DynamicScrollToTop from "../DynamicScrollToTop";

const ProjectSection = () => {
  return (
    <main className="project-section-container">
      <DynamicScrollToTop />
      <ProjectHeader />
      <section className="project-section-about">
        <ProjectAbout />
      </section>
    </main>
  );
};

export default ProjectSection;
