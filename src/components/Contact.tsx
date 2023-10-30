import { Section } from "./Section";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Textarea } from "./ui/Textarea";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export const Contact = () => {
  return (
    <Section title="Contact" variant="light">
      <div>
        <p>
          Have any questions? Like my work? You can contact me using this form
          and I'll get back to you as soon as I can!
        </p>
        <hr className="border-primary-950" />
        <ul className="list-none p-0 text-primary-950">
          <li className="flex gap-2 whitespace-nowrap p-0">
            <MapPinIcon className="w-5" />
            <span className="font-medium">Dallas, TX</span>
          </li>
          <li className="flex gap-2 whitespace-nowrap p-0">
            <EnvelopeIcon className="w-5" />
            <a href="mailto:bradenfrazer@gmail.com">bradenfrazer@gmail.com</a>
          </li>
          <li className="flex gap-2 whitespace-nowrap p-0">
            <PhoneIcon className="w-5" />
            <a href="tel:2819097514">281-909-7514</a>
          </li>
        </ul>
      </div>
      <form
        name="contactform"
        method="POST"
        netlify-honeypot="company"
        data-netlify="true"
        className="mt-8 flex w-full flex-col gap-4 md:mt-0"
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
    </Section>
  );
};
