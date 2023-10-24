import headshot from "../assets/hero.png";
import { Section } from "./Section";
import { Button } from "./ui/Button";

type HeroProps = {};

export const Hero = (props: HeroProps) => {
  const {} = props;
  return (
    <Section className="relative top-16 items-center justify-between">
      <div>
        <h1>Hi, I'm Braden.</h1>
        <p>I help design meet code.</p>
        <Button href="#work">View My Work</Button>
      </div>
      <div className="max-w-lg">
        <picture>
          <source media="(min-width: 768px)" srcSet={headshot} />
          <img src={headshot} alt="Braden Frazer logo" />
        </picture>
      </div>
    </Section>
  );
};
