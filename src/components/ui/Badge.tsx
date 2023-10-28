import { cva, cx, type VariantProps } from "class-variance-authority";

const badgeClasses = cva(["px-2 py-1 rounded-lg whitespace-nowrap text-xs"], {
  variants: {
    variant: {
      primary: "border border-primary-950 bg-primary-800 text-primary-50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps extends VariantProps<typeof badgeClasses> {
  className?: string;
  children: React.ReactNode;
}

export const Badge = (props: BadgeProps) => {
  const { className, children, variant } = props;
  return (
    <span className={cx(badgeClasses({ variant }), className)}>{children}</span>
  );
};
