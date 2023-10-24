import { Section } from "./Section";
import headshot from "../assets/hero.png";

type HeroProps = {};

export const Hero = (props: HeroProps) => {
  const {} = props;
  return (
    <Section>
      <div>
        <h1>Hi, I'm Braden.</h1>
        <p>I help design meet code.</p>
        <a href="#work">View My Work</a>
      </div>
      <div>
        <img src={headshot} />
      </div>
    </Section>
  );
};
