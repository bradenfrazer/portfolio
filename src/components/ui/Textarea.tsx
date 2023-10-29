import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="border-primary-950 bg-primary-50 focus:border-primary-800 w-full rounded border-4 p-2 shadow focus:bg-white focus:shadow-sm focus:outline-none"
    />
  );
};
