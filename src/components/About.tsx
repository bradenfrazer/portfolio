import { Section } from "./Section";
import photo from "../assets/about.jpg";

export const About = () => {
  return (
    <Section
      title="About"
      variant="mid"
      slant
      className="z-10 mb-[-6vw] mt-[6vw]"
    >
      <div className="md:order-2">
        <img
          className="mx-auto w-48 max-w-xs rounded-full border-4 border-primary-950 shadow md:w-auto"
          src={photo}
        />
      </div>
      <div className="pb-[6vw]">
        <p>
          My name is Braden Frazer, and I'm a web developer currently residing
          in the Dallas, TX area. I have a passion for all kinds of tech, and a
          particular focus in user experience design, creating modern user
          interfaces for websites and applications, while also practicing
          empathy from the user perspective to form an experience that is fun
          and not frustrating. Most recently, I worked as a UX Engineer at{" "}
          <a href="https://www.dropps.com/" target="_blank">
            Dropps
          </a>
          , building out a design system and working between design and code to
          create an optimal user experience for our website visitors. If you
          have any questions or interest in my work, don't hesitate to contact
          me through the form below!
        </p>
      </div>
    </Section>
  );
};
