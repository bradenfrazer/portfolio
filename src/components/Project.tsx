import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import GithubLogo from "./../assets/github.svg?react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { AnimateIn } from "./ui/AnimateIn";

type ProjectProps = {
  project: ProjectData;
  layout?: "image/content" | "content/image";
};

export const Project = (props: ProjectProps) => {
  const { project, layout } = props;
  return (
    <AnimateIn>
      <Container className="flex flex-col items-center justify-between gap-x-16 md:flex-row [&>*]:flex-1">
        <div className={layout === "content/image" ? "md:order-2" : ""}>
          <img
            src={project.imageUrl}
            className="border-4 border-gray-950 shadow"
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="mt-0 flex items-center gap-4 sm:mt-4 lg:text-2xl">
            {project.title}
            {project.status && <Badge>{project.status}</Badge>}
          </h3>

          <p>{project.description}</p>
          {project.stack && (
            <div className="mb-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          )}
          <div className="flex gap-4">
            {project.urls?.map((item) => (
              <Button
                key={item.url}
                href={item.url}
                variant={item.variant}
                openExternal
              >
                <span>
                  {item.label == "GitHub" ? (
                    <GithubLogo className="w-4" />
                  ) : (
                    <ArrowTopRightOnSquareIcon className="w-4" />
                  )}
                </span>
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </AnimateIn>
  );
};
