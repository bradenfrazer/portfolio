import { cva, cx, type VariantProps } from "class-variance-authority";

const sectionClasses = cva(["group w-full"], {
  variants: {
    variant: {
      dark: "text-light",
      light: "bg-blue-300",
      hybrid:
        "text-light bg-[linear-gradient(110deg,var(--tw-gradient-stops))] from-transparent from-65% to-blue-300 to-65% sm:from-50% sm:to-50%",
      white: "bg-white",
    },
  },
  defaultVariants: {
    variant: "dark",
  },
});

interface SectionProps extends VariantProps<typeof sectionClasses> {
  containerClassName?: string;
  contentClassName?: string;
  title?: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  const { containerClassName, contentClassName, title, children, variant } =
    props;
  return (
    <section className={cx(sectionClasses({ variant }), containerClassName)}>
      <div
        className={cx(
          "container prose mx-auto flex max-w-screen-xl flex-col px-5 py-8 group-[.text-light]:prose-invert md:p-14",
          contentClassName,
        )}
      >
        {title && <h2 id={title.toLowerCase()}>{title}</h2>}
        <div
          className={cx(
            "gap-x-16[&>*]:flex-1 flex w-full flex-col items-center justify-between md:flex-row",
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
