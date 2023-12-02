type ButtonData = {
  label: string;
  url: string;
  variant?: "primary" | "secondary";
};

type ProjectData = {
  title: string;
  description: string;
  imageUrl: string;
  stack?: string[];
  urls?: ButtonData[];
};
