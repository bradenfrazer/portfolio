import { cva, cx, type VariantProps } from "class-variance-authority";

const sectionClasses = cva(
  ["container flex max-w-screen-xl flex-col justify-center px-5 py-8 md:p-14"],
  {
    variants: {
      direction: {
        horizontal: "sm:flex-row",
        vertical: "",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  },
);

interface SectionProps extends VariantProps<typeof sectionClasses> {
  className?: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  const { className, children, direction } = props;
  return (
    <section className={cx(sectionClasses({ direction }), className)}>
      {children}
    </section>
  );
};
