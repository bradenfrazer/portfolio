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
        "whitespace-nowrap rounded-lg border border-gray-950 bg-gray-800 px-2 py-1 text-xs font-normal text-gray-50",
        className,
      )}
    >
      {children}
    </span>
  );
};
