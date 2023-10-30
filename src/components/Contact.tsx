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
          name="contactform"
          method="POST"
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div data-for="name">
            <Label htmlFor="name">
              Name
              <Input type="text" name="name" required />
            </Label>
          </div>
          <div data-for="email">
            <Label htmlFor="email">
              Email
              <Input type="email" name="email" required />
            </Label>
          </div>
          <div data-for="message">
            <Label htmlFor="message">
              Message
              <Textarea name="message" rows={5} />
            </Label>
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
