import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="focus:border-blue focus:shadow-blue w-full rounded border-4 border-gray-950 bg-white p-2  shadow focus:outline-none"
    />
  );
};
