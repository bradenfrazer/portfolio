import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section title="Contact" variant="white">
      <form name="contact-form" method="POST" data-netlify="true">
        <div data-for="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            data-form-field="Name"
            required
            id="name"
          />
        </div>
        <div data-for="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            data-form-field="Email"
            required
            id="email"
          />
        </div>
        <div data-for="message">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows={7}
            data-form-field="Message"
            id="message"
          />
        </div>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Send</button>
      </form>
    </Section>
  );
};
