import { Section } from "./Section";
import { projects } from "../data/projects";
import { Project } from "./Project";

type WorkProps = {};

export const Work = (props: WorkProps) => {
  const {} = props;
  return (
    <Section>
      <h2 id="work">Work</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </Section>
  );
};
