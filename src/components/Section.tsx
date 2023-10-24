import { cva, cx, type VariantProps } from "class-variance-authority";

const sectionClasses = cva(["flex flex-col justify-center"], {
  variants: {
    direction: {
      horizontal: "sm:flex-row",
      vertical: "",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});

interface SectionProps extends VariantProps<typeof sectionClasses> {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  const { className, title, children, direction } = props;
  return (
    <section className="prose prose-invert container flex max-w-screen-xl flex-col px-5 py-8 md:p-14">
      {title && <h2 id={title.toLowerCase()}>{title}</h2>}
      <div className={cx(sectionClasses({ direction }), className)}>
        {children}
      </div>
    </section>
  );
};
