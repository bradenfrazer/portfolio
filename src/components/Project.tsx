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
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Button href={project.url}>View</Button>
      </div>
    </Container>
  );
};
