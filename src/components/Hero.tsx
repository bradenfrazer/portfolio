import headshot from "../assets/hero.png";
import { Section } from "./Section";
import { Button } from "./ui/Button";

type HeroProps = {};

export const Hero = (props: HeroProps) => {
  const {} = props;
  return (
    <Section
      containerClassName="bg-[linear-gradient(110deg,var(--tw-gradient-stops))] from-transparent from-50% to-blue-300 to-50%"
      contentClassName="relative items-center pb-0 md:pb-0"
    >
      <div>
        <h1>Hi, I'm Braden.</h1>
        <p>I help design meet code.</p>
        <Button href="#work">View My Work</Button>
      </div>
      <div className="not-prose max-w-xs px-5 md:max-w-lg">
        <picture>
          <source media="(min-width: 768px)" srcSet={headshot} />
          <img src={headshot} alt="Braden Frazer logo" />
        </picture>
      </div>
    </Section>
  );
};
