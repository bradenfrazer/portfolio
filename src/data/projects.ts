import droppsUxBriefPdf from "../assets/projects/DroppsUXBrief.pdf";
import droppsUxBriefImage from "../assets/projects/droppsuxbrief.png";
import nintendleImage from "../assets/projects/nintendle.png";

export const projects: ProjectData[] = [
  {
    title: "Dropps UX Brief",
    description:
      "A brief that highlights a portion of the UX work I performed during my time at Dropps. It covers design system work, some components built, A/B tests ran, and other UI improvements.",
    url: droppsUxBriefPdf,
    imageUrl: droppsUxBriefImage,
  },
  {
    title: "Nintendle",
    description:
      "Wordle clone with an emphasis on Nintendo-themed solutions. The dictionary of solutions was curated by hand and includes a variety of Nintendo characters, themes, locations, and concepts. Like Wordle, Nintendle features a new challenge each day and includes a share button to easily share your score.",
    url: "https://nintendle.bradenfrazer.com",
    imageUrl: nintendleImage,
    githubUrl: "https://github.com/bradenfrazer/nintendle",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Vitest (Testing)",
    ],
  },
];
