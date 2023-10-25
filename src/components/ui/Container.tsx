import { cx } from "class-variance-authority";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { className, children } = props;
  return (
    <div className={cx("container mx-auto max-w-screen-xl", className)}>
      {children}
    </div>
  );
};
