import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="w-full rounded border-4 border-gray-950 bg-gray-50 p-2 shadow focus:border-gray-800 focus:bg-white focus:shadow-gray-800 focus:outline-none"
    />
  );
};
