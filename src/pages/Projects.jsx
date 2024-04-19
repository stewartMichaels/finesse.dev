import React, { useRef } from "react";

function Projects() {
  const projects = useRef();

  return (
    <>
      <section id="projects" ref={projects} className="pt-[140px]">
        <div className="h-[100vh]">Projects</div>
      </section>
    </>
  );
}

export default Projects;
