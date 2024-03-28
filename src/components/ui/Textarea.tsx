import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="focus:border-blue focus:shadow-blue w-full border-4 border-gray-950 bg-white  p-2 shadow focus:outline-none"
    />
  );
};
