import { Section } from "./Section";
import { Button } from "./ui/Button";

export const Links = () => {
  return (
    <Section variant="white">
      <ul className="not-prose mx-auto flex justify-center gap-12">
        <li>
          <Button href="https://resume.bradenfrazer.com/">Resume</Button>
        </li>
        <li>
          <Button href="https://www.linkedin.com/in/bradenfrazer">
            LinkedIn
          </Button>
        </li>
        <li>
          <Button href="https://github.com/bradenfrazer/">Github</Button>
        </li>
      </ul>
    </Section>
  );
};
