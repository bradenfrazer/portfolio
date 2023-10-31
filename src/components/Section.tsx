import { cva, cx, type VariantProps } from "class-variance-authority";
import { Container } from "./ui/Container";

const sectionClasses = cva(["group relative z-[1] w-full px-5 py-8 md:p-14"], {
  variants: {
    variant: {
      dark: "text-light",
      light: "bg-primary-400",
      hybrid:
        "text-light bg-[linear-gradient(110deg,var(--tw-gradient-stops))] from-transparent from-65% to-primary-400 to-65% sm:from-50% sm:to-50%",
      mid: "text-light bg-primary-800",
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
        {title && (
          <h2
            id={title.toLowerCase()}
            className="m-0 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
        )}
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
