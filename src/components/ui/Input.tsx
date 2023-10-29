import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="border-primary-950 bg-primary-50 focus:border-primary-800 w-full rounded border-4 p-2 shadow focus:bg-white focus:shadow-sm focus:outline-none"
    />
  );
};
