import { DocumentTextIcon } from "@heroicons/react/20/solid";
import { Section } from "./Section";
import { Button } from "./ui/Button";
import GitHubLogo from "./../assets/github.svg?react";
import LinkedInLogo from "./../assets/linkedin.svg?react";

export const Links = () => {
  return (
    <Section variant="mid" slant className="z-10 mt-[-6vw]">
      <ul className="not-prose mx-auto flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-16">
        <li className="sm:pb-12">
          <Button
            href="https://resume.bradenfrazer.com/"
            variant="secondary"
            openExternal
          >
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
            openExternal
          >
            <span>
              <LinkedInLogo className="w-4" />
            </span>
            <span>LinkedIn</span>
          </Button>
        </li>
        <li className="sm:pt-12">
          <Button
            href="https://github.com/bradenfrazer/"
            variant="secondary"
            openExternal
          >
            <span>
              <GitHubLogo className="w-4" />
            </span>
            <span>GitHub</span>
          </Button>
        </li>
      </ul>
    </Section>
  );
};
