import { Html, Head, Main, NextScript } from "next/document";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const themeScript = `
  (function () {
    try {
      var saved = localStorage.getItem("master-lab-theme");
      var preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      var theme = saved || preferred;
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0D1117" : "#FFFFFF");
    } catch (error) {
      document.documentElement.dataset.theme = "dark";
      document.documentElement.style.colorScheme = "dark";
    }
  })();
`;

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta name="theme-color" content="#0D1117" />
        <link rel="icon" href={`${basePath}/favicon.svg`} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
