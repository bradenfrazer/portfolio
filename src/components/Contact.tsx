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
          aside and I'll get back to you as soon as I can!
        </p>
      </div>
      <div>
        <div data-form-alert="" hidden>
          Thanks for filling out the form!
        </div>
        <form
          name="contactform"
          method="POST"
          netlify-honeypot="company"
          data-netlify="true"
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="form-name" value="contact-form" />

          <Label>
            Name
            <Input type="text" name="name" required />
          </Label>

          <Label className="hidden">
            Company
            <Input type="text" name="company" />
          </Label>

          <Label>
            Email
            <Input type="email" name="email" required />
          </Label>

          <Label>
            Message
            <Textarea name="message" rows={5} />
          </Label>

          <button type="submit" className="btn btn-primary self-start">
            Send
          </button>
        </form>
      </div>
    </Section>
  );
};
