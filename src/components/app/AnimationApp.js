import React, { useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch, useLocation } from "react-router-dom";

import experts from "../../data/experts";
import projects from "../../data/projects";

import ContactSection from "../contact-section/ContactSection";
import ProjectsSection from "../projects-section/ProjectsSection";
import ProjectSection from "../project-section/ProjectSection";
import HomeSection from "../home-section/HomeSection";
import ExpertSection from "../expert-section/ExpertSection";
import DataProvider from "../../data/DataProvider";
import TeamSection from "../team-section/TeamSection";

const AnimationApp = () => {
  let location = useLocation();
  const transitionRef = useRef(null);
  return (
    <TransitionGroup>
      <CSSTransition
        nodeRef={transitionRef}
        key={location.key}
        classNames="fade"
        timeout={500}
      >
        <div ref={transitionRef}>
          <Switch location={location}>
            <Route exact path="/" component={HomeSection}></Route>
            <Route path="/contact" component={ContactSection}></Route>
            <Route path="/projects" component={ProjectsSection}></Route>
            {projects.map((project) => {
              const { url, id } = project;
              return (
                <Route key={id} path={url}>
                  <DataProvider data={project}>
                    <ProjectSection />
                  </DataProvider>
                </Route>
              );
            })}
            {experts.map((expert) => {
              const { url, id } = expert;
              return (
                <Route key={id} path={url}>
                  <DataProvider data={expert}>
                    <ExpertSection />
                  </DataProvider>
                </Route>
              );
            })}
            <Route path="/team" component={TeamSection}></Route>
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimationApp;
