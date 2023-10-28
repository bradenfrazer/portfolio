import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

type ProjectProps = {
  project: ProjectData;
  layout?: "image/content" | "content/image";
};

export const Project = (props: ProjectProps) => {
  const { project, layout } = props;
  return (
    <Container className="flex flex-col items-center justify-between gap-x-16 md:flex-row [&>*]:flex-1">
      <div className={layout === "content/image" ? "md:order-2" : ""}>
        <img src={project.imageUrl} />
      </div>
      <div className="flex flex-col items-start">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.stack && (
          <div className="mb-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge>{item}</Badge>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <Button href={project.url}>View</Button>{" "}
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary">
              <span></span>
              <span>GitHub</span>
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};
