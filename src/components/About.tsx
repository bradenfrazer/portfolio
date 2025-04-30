import { Section } from "./Section";
import photo from "../assets/about.jpg";

export const About = () => {
  return (
    <Section
      title="About"
      variant="mid"
      slant
      className="z-10 -mb-[var(--skew-padding)] mt-[var(--skew-padding)]"
    >
      <div className="md:order-2">
        <img
          className="mx-auto w-48 max-w-xs rounded-full border-4 border-gray-950 shadow md:w-auto"
          src={photo}
        />
      </div>
      <div className="pb-[var(--skew-padding)]">
        <p>
          My name is Braden Frazer, and I'm a frontend UX-focused developer
          currently residing in the Dallas, TX area. I have a passion for all
          kinds of tech, and a particular focus in user experience design,
          creating modern user interfaces for websites and applications, while
          also practicing empathy from the user perspective to form an
          experience that is fun and not frustrating. Currently, I am working as
          a Design Engineer at{" "}
          <a href="https://www.onesignal.com/" target="_blank">
            OneSignal
          </a>
          , working to develop the{" "}
          <a href="https://onesignal.supernova-docs.io/" target="_blank">
            internal Beam design system
          </a>{" "}
          and help build the UX and UI of our messaging platform used by 2
          million app developers. If you have any questions or interest in my
          work, don't hesitate to contact me through the form below!
        </p>
      </div>
    </Section>
  );
};
