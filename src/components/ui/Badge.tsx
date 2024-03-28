import { cx } from "class-variance-authority";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export const Badge = (props: BadgeProps) => {
  const { className, children } = props;
  return (
    <span
      className={cx(
        "whitespace-nowrap rounded-full  bg-gray-300 px-2.5 py-1 text-xs font-bold text-gray-950",
        className,
      )}
    >
      {children}
    </span>
  );
};
