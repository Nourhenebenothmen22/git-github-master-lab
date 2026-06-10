import { NextSeo } from "next-seo";

export default function SEO({ title, description, path = "" }) {
  const fullTitle = `${title} | Git & GitHub Master Lab`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nourhenebenothmen22.github.io/git-github-master-lab";
  const url = `${siteUrl}${path}`;
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
