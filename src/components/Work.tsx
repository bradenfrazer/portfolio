import { Section } from "./Section";
import { projects } from "../data/projects";
import { Project } from "./Project";

type WorkProps = {};

export const Work = (props: WorkProps) => {
  const {} = props;
  return (
    <Section title="Work" className="z-10">
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <Project
            key={project.title}
            project={project}
            layout={index % 2 ? "image/content" : "content/image"}
          />
        ))}
      </div>
    </Section>
  );
};
