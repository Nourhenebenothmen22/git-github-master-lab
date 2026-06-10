import { NextSeo } from "next-seo";

export default function SEO({ title, description, path = "" }) {
  const fullTitle = `${title} | Git & GitHub Master Lab`;
  const url = `https://git-github-master-lab.github.io${path}`;
  return (
    <NextSeo
      title={fullTitle}
      description={description}
      canonical={url}
      openGraph={{
        type: "website",
        locale: "fr_FR",
        url,
        title: fullTitle,
        description,
        siteName: "Git & GitHub Master Lab"
      }}
      additionalMetaTags={[
        { name: "keywords", content: "Git, GitHub, cours Git, commandes Git, tutoriel Git, labs Git, apprendre Git" }
      ]}
    />
  );
}
