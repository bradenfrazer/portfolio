import { Section } from "./Section";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Textarea } from "./ui/Textarea";

export const Contact = () => {
  return (
    <Section title="Contact" variant="light">
      <div>
        <p>
          Have any questions? Like my work? You can contact me using the form
          below and I'll get back to you as soon as I can!
        </p>
      </div>
      <div>
        <div data-form-alert="" hidden>
          Thanks for filling out the form!
        </div>
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-4"
        >
          <div data-for="name">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              data-form-field="Name"
              required
              id="name"
            />
          </div>
          <div data-for="email">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              data-form-field="Email"
              required
              id="email"
            />
          </div>
          <div data-for="message">
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              rows={5}
              data-form-field="Message"
              id="message"
            />
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button type="submit" className="btn btn-primary self-start">
            Send
          </button>
        </form>
      </div>
    </Section>
  );
};
