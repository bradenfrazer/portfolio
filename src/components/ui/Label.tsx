import React, { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return (
    <label className="text-sm font-bold text-primary-950" {...rest}>
      {children}
    </label>
  );
};
