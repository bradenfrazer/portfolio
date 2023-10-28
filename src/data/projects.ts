import droppsUxBriefPdf from "../assets/projects/DroppsUXBrief.pdf";
import droppsUxBriefImage from "../assets/projects/droppsuxbrief.png";
import nintendleImage from "../assets/projects/nintendle.png";
import pokedexImage from "../assets/projects/pokedex.jpg";
import weathrrImage from "../assets/projects/weathrr.png";
import nationalParksImage from "../assets/projects/nationalparks.png";

export const projects: ProjectData[] = [
  {
    title: "Dropps UX Brief",
    description:
      "A brief that highlights a portion of the UX work I performed during my time at Dropps. It covers design system work, some components built, A/B tests ran, and other UI improvements.",
    url: droppsUxBriefPdf,
    imageUrl: droppsUxBriefImage,
    stack: ["Figma", "React", "Tailwind CSS", "Design System", "A/B Tests"],
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
  {
    title: "Weathrr",
    description:
      "Weather conditions app built in React. The current temperature, humidity, pressure, wind speed, and conditions are pulled from OpenWeatherMap's API.",
    url: "https://weathrr.bradenfrazer.com",
    imageUrl: weathrrImage,
    githubUrl: "https://github.com/bradenfrazer/weathrr",
    stack: ["React", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
  },
  {
    title: "Pokédex",
    description:
      "Pokédex app based on the Pokémon series games, built in React. The app includes the full collection of 1000+ characters, sourced by the awesome PokeAPI. Clicking a Pokémon's card in the main list view will open a detailed view of the Pokémon with multiple images and stats about the monster. NES.css was used as a framework for styling the app to give it that nice nostalgic, Gameboy feel.",
    url: "https://pokedex.bradenfrazer.com",
    imageUrl: pokedexImage,
    githubUrl: "https://github.com/bradenfrazer/pokedex",
    stack: ["React", "NES.css", "Tailwind CSS", "PokeAPI"],
  },
  {
    title: "National Parks",
    description:
      "A listing of national parks located in the United States built in Vue. Clicking on one of the parks will open a modal with some additional info on the park.",
    url: "https://nationalparks.bradenfrazer.com",
    imageUrl: nationalParksImage,
    stack: ["Vue", "SCSS", "National Park Service API"],
  },
];
