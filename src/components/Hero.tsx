import headshot from "../assets/hero.png";
import { Section } from "./Section";
import { Button } from "./ui/Button";

type HeroProps = {};

export const Hero = (props: HeroProps) => {
  const {} = props;
  return (
    <Section variant="hybrid" className="pb-0 pt-20 md:pb-0 md:pt-32">
      <div className="w-full pt-5 md:pt-0">
        <h1 className="mb-4 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Hi, I'm Braden.
        </h1>
        <p className="lead text-base sm:text-xl">I help design meet code.</p>
        <Button href="#work">View My Work</Button>
      </div>
      <div className="flex w-full justify-end">
        <div className="md:hover:animate-wobble not-prose relative -mt-32 w-1/2 max-w-xs sm:w-auto md:top-2 md:m-0 md:max-w-lg">
          <picture>
            <source media="(min-width: 768px)" srcSet={headshot} />
            <img src={headshot} alt="Braden Frazer logo" />
          </picture>
          <img
            className="absolute top-0 z-[-1] ml-3 mt-6 opacity-70 brightness-0"
            src={headshot}
          />
          <img
            className="absolute top-0 z-[-1] -ml-2 opacity-70 brightness-0"
            src={headshot}
          />
        </div>
      </div>
    </Section>
  );
};
