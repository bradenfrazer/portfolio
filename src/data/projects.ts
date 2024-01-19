import droppsUxBriefImage from "../assets/projects/droppsuxbrief.png";
import wonderImage from "../assets/projects/wonder.png";
import nintendleImage from "../assets/projects/nintendle.png";
import pokedexImage from "../assets/projects/pokedex.jpg";
import weathrrImage from "../assets/projects/weathrr.png";
import nationalParksImage from "../assets/projects/nationalparks.png";

export const projects: ProjectData[] = [
  {
    title: "Dropps UX Brief",
    description:
      "A brief that highlights a portion of the UX work I performed during my time at Dropps. It covers design system work, some components built, A/B tests ran, and other UI improvements.",
    urls: [
      {
        url: "/DroppsUXBrief.pdf",
        label: "View",
      },
    ],
    imageUrl: droppsUxBriefImage,
    stack: ["React", "Tailwind CSS", "Figma", "Design System", "A/B Tests"],
  },
  {
    title: "Wonder Design System",
    description:
      "A colorful, comic-like design system, inspired by Nintendo's hit 2023 video game 'Super Mario Wonder', and tailored to my own personal portfolio and brand. It strives to stand out in a world full of sterile design systems that have basic, modern UI elements with blue accent colors. Wonder injects personality when used, and represents the creativity and personality I embody as a UX Engineer.",
    imageUrl: wonderImage,
    urls: [
      {
        url: "https://www.figma.com/file/m2Wy4Noptp6XkxBIG9ZGGj/Wonder-Design-System?type=design&node-id=182%3A6921&mode=design&t=rCMZUlKCNIHOfs7R-1",
        label: "View",
      },
    ],
    stack: ["Figma", "Design System"],
  },
  {
    title: "Nintendle",
    description:
      "Wordle clone with an emphasis on Nintendo-themed solutions. The dictionary of solutions was curated by hand and includes a variety of Nintendo characters, themes, locations, and concepts. Like Wordle, Nintendle features a new challenge each day and includes a share button to easily share your score.",
    urls: [
      {
        url: "https://nintendle.bradenfrazer.com",
        label: "View",
      },
      {
        url: "https://github.com/bradenfrazer/nintendle",
        label: "GitHub",
        variant: "secondary",
      },
    ],
    imageUrl: nintendleImage,
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
    urls: [
      {
        url: "https://weathrr.bradenfrazer.com",
        label: "View",
      },
      {
        url: "https://github.com/bradenfrazer/weathrr",
        label: "GitHub",
        variant: "secondary",
      },
    ],
    imageUrl: weathrrImage,
    stack: ["React", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
  },
  {
    title: "Pokédex",
    description:
      "Pokédex app based on the Pokémon series games, built in React. The app includes the full collection of 1000+ characters, sourced by the awesome PokeAPI. Clicking a Pokémon's card in the main list view will open a detailed view of the Pokémon with multiple images and stats about the monster. NES.css was used as a framework for styling the app to give it that nice nostalgic, Gameboy feel.",
    urls: [
      {
        url: "https://pokedex.bradenfrazer.com",
        label: "View",
      },
      {
        url: "https://github.com/bradenfrazer/pokedex",
        label: "GitHub",
        variant: "secondary",
      },
    ],
    imageUrl: pokedexImage,
    stack: ["React", "NES.css", "Tailwind CSS", "PokeAPI"],
  },
  {
    title: "National Parks",
    description:
      "A listing of national parks located in the United States built in Vue. Clicking on one of the parks will open a modal with some additional info on the park.",
    urls: [
      {
        url: "https://national-parks.bradenfrazer.com",
        label: "View",
      },
    ],
    imageUrl: nationalParksImage,
    stack: ["Vue", "SCSS", "National Park Service API"],
  },
];
