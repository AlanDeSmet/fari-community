import { loader } from "public/catalog/loader";
import { Home } from "./page-component";

export async function generateMetadata(props: Parameters<typeof Page>[0]) {
  return {
    title: `Fari Community | Free TTRPG Resources`,
    description: "Free and Open RPG Resources Maintained by the Fari Community",
    icons: {
      icon: [
        {
          url: "/images/favicon-light.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/images/favicon-dark.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
    },
    openGraph: {
      title: "Fari Community",
      description: `Free and Open RPG Resources maintained by the Fari Community`,
      url: "https://fari.community",
      siteName: "Fari Community",
      images: [
        {
          url: "/images/og.png",
          width: 800,
          height: 600,
        },
      ],
      locale: "en-US",
      type: "website",
    },
  };
}

export default async function Page(props: {}) {
  const allCreators = await loader.getAllCreators();
  return <Home creators={allCreators} />;
}
