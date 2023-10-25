import { cva, cx, type VariantProps } from "class-variance-authority";
import { Container } from "./ui/Container";

const sectionClasses = cva(["group w-full px-5 py-8 md:p-14"], {
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
  className?: string;
  title?: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  const { className, title, children, variant } = props;
  return (
    <section className={cx(sectionClasses({ variant }), className)}>
      <Container className={cx("prose group-[.text-light]:prose-invert")}>
        {title && <h2 id={title.toLowerCase()}>{title}</h2>}
        <div
          className={cx(
            "flex w-full flex-col items-center justify-between gap-x-16 md:flex-row [&>*]:flex-1",
          )}
        >
          {children}
        </div>
      </Container>
    </section>
  );
};
