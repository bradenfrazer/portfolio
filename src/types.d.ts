type ButtonData = {
  label: string;
  url: string;
  variant?: "primary" | "secondary";
  icon?: "default" | "github";
};

type ProjectData = {
  title: string;
  description: string;
  imageUrl: string;
  stack?: string[];
  urls?: ButtonData[];
};
