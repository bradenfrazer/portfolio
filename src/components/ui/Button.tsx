import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonClasses = cva(["btn"], {
  variants: {
    variant: {
      primary: "btn-primary",
      secondary: "btn-secondary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  className?: string;
  href: string;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { className, href, children, variant } = props;
  return (
    <a className={cx(buttonClasses({ variant }), className)} href={href}>
      {children}
    </a>
  );
};
