import { cva, cx, type VariantProps } from "class-variance-authority";

const sectionClasses = cva(
  ["w-full flex flex-col justify-between items-center gap-x-16"],
  {
    variants: {
      direction: {
        horizontal: "md:flex-row",
        vertical: "",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  },
);

interface SectionProps extends VariantProps<typeof sectionClasses> {
  containerClassName?: string;
  contentClassName?: string;
  title?: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  const { containerClassName, contentClassName, title, children, direction } =
    props;
  return (
    <section className={cx(containerClassName)}>
      <div
        className={cx(
          "prose prose-invert container mx-auto flex max-w-screen-xl flex-col px-5 py-8 md:p-14",
          contentClassName,
        )}
      >
        {title && <h2 id={title.toLowerCase()}>{title}</h2>}
        <div className={cx(sectionClasses({ direction }), "[&>*]:flex-1")}>
          {children}
        </div>
      </div>
    </section>
  );
};
