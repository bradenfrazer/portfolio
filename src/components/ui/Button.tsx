import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonClasses = cva(
  [
    "px-4 py-2 rounded-full no-underline inline-flex gap-2 items-center relative border-4  text-sm sm:text-base font-bold border-primary-950 transition duration-100  after:absolute after:top-0 after:left-0 after:content-[''] after:mt-2 after:ml-2 after:h-full after:w-full after:rounded-full after:bg-primary-950 after:z-[-1]",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary-50 text-primary-950 hover:bg-primary-400 hover:text-gray-900",
        secondary:
          "bg-primary-400 text-primary-950 hover:bg-primary-300 hover:text-gray-900",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

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
