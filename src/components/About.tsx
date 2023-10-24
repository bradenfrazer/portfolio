import { Section } from "./Section";
import photo from "../assets/about.jpg";

export const About = () => {
  return (
    <Section>
      <div>
        <h2 id="about">About</h2>
        <p>
          My name is Braden Frazer, and I'm a web developer currently residing
          in the Dallas, TX area. I have a passion for all kinds of tech, and a
          particular focus in media and design that spans anywhere from
          designing websites and logos to running sound for a football stadium.
          I've maintained a unique balance between creative and tech throughout
          my life, studying programming as a Computer Science major at Texas A&M
          University while dabbling in photography, video editing, audio
          engineering, graphic design and more with a minor in Art. Most
          recently, I worked as a UX Engineer at{" "}
          <a href="https://www.dropps.com/" target="_blank">
            Dropps
          </a>
          , building out a design system and working between design and code to
          create an optimal user experience for our website visitors. If you
          have any questions or interest in my work, don't hesitate to contact
          me through the form below!
        </p>
      </div>
      <div>
        <img className="rounded-full" src={photo} />
      </div>
    </Section>
  );
};
