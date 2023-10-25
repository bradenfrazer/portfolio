import headshot from "../assets/hero.png";
import { Section } from "./Section";
import { Button } from "./ui/Button";

type HeroProps = {};

export const Hero = (props: HeroProps) => {
  const {} = props;
  return (
    <Section
      variant="hybrid"
      containerClassName=""
      contentClassName="relative items-center pt-20 md:pt-32 pb-0 md:pb-0"
    >
      <div className="w-full pt-5 md:pt-0">
        <h1 className="mb-4 sm:text-5xl md:text-6xl">Hi, I'm Braden.</h1>
        <p>I help design meet code.</p>
        <Button href="#work">View My Work</Button>
      </div>
      <div className="flex w-full justify-end">
        <div className="not-prose -mt-32 w-1/2 max-w-xs sm:w-auto md:m-0 md:max-w-lg">
          <picture>
            <source media="(min-width: 768px)" srcSet={headshot} />
            <img src={headshot} alt="Braden Frazer logo" />
          </picture>
        </div>
      </div>
    </Section>
  );
};
