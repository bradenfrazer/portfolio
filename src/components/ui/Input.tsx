import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="w-full rounded border-4 border-primary-950 bg-primary-50 p-2 shadow focus:border-primary-800 focus:bg-white focus:shadow-primary-800 focus:outline-none"
    />
  );
};
