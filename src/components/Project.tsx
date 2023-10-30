import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import GithubLogo from "./../assets/github.svg?react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type ProjectProps = {
  project: ProjectData;
  layout?: "image/content" | "content/image";
};

export const Project = (props: ProjectProps) => {
  const { project, layout } = props;
  return (
    <Container className="flex flex-col items-center justify-between gap-x-16 md:flex-row [&>*]:flex-1">
      <div className={layout === "content/image" ? "md:order-2" : ""}>
        <img
          src={project.imageUrl}
          className="border-4 border-primary-950 shadow"
        />
      </div>
      <div className="flex flex-col items-start">
        <h3 className="lg:text-2xl">{project.title}</h3>
        <p>{project.description}</p>
        {project.stack && (
          <div className="mb-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        )}
        <div className="flex gap-4">
          <Button href={project.url} openExternal>
            <span>
              <ArrowTopRightOnSquareIcon className="w-4" />
            </span>
            <span>View</span>
          </Button>
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary" openExternal>
              <span>
                <GithubLogo className="w-4" />
              </span>
              <span>GitHub</span>
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};
