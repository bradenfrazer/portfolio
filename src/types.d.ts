type ButtonData = {
  label: string;
  url: string;
  variant?: "primary" | "secondary";
};

type ProjectData = {
  title: string;
  description: string;
  imageUrl: string;
  status?: string;
  stack?: string[];
  urls?: ButtonData[];
};
