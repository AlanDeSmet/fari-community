import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Harmony Drive",
    description:
      "Build a campaign-style adventure TTRPG, one that lets players express themselves, work together, and make difficult choices, this is the system for you!",
    links: {
      itchIo: "https://peachgardengames.itch.io/harmony-drive",
    },
  };
}