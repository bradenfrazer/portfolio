import { Section } from "./Section";

export const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <Section>
      <p className="m-0 text-xs sm:text-sm md:text-base">
        © 2016-{currYear.toString()} Braden Frazer. All rights reserved.
      </p>
    </Section>
  );
};
