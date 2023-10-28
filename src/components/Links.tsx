import { DocumentTextIcon } from "@heroicons/react/20/solid";
import { Section } from "./Section";
import { Button } from "./ui/Button";

export const Links = () => {
  return (
    <Section variant="mid">
      <ul className="not-prose mx-auto flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
        <li>
          <Button href="https://resume.bradenfrazer.com/" variant="secondary">
            <span>
              <DocumentTextIcon className="w-4" />
            </span>
            <span>Resume</span>
          </Button>
        </li>
        <li>
          <Button
            href="https://www.linkedin.com/in/bradenfrazer"
            variant="secondary"
          >
            LinkedIn
          </Button>
        </li>
        <li>
          <Button href="https://github.com/bradenfrazer/" variant="secondary">
            GitHub
          </Button>
        </li>
      </ul>
    </Section>
  );
};
