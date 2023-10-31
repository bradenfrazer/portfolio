import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="w-full rounded border-4 border-primary-950 bg-primary-50 p-2 shadow focus:border-primary-800 focus:bg-white focus:shadow-primary-800 focus:outline-none"
    />
  );
};
