import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonClasses = cva(["px-4 py-2 rounded-full border-0"], {
  variants: {
    variant: {
      primary: "bg-blue-700",
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
