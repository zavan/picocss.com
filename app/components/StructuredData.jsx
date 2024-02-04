import metaData from "~/data/meta";

export default function StructuredData() {
  const { defaultDescription, domain, githubRepo, siteName, twitterUrl, version } = metaData;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    url: domain,
    name: siteName,
    abstract: defaultDescription,
    isFamilyFriendly: true,
    codeRepository: githubRepo,
    version,
    programmingLanguage: ["css", "scss"],
    keywords: [
      "css",
      "scss",
      "semantic",
      "minimal",
      "dark-theme",
      "css-framework",
      "minimalist",
      "scss-framework",
      "dark-mode",
      "minimalistic",
      "native-html",
    ],
    license: `${githubRepo}/blob/master/LICENSE.md`,
    sameAs: [githubRepo, twitterUrl],
    image: `${domain}/opengraph.png`,
    maintainer: {
      "@type": "Organization",
      name: "Pico",
      logo: `${domain}/logo.png`,
    },
    author: {
      "@type": "Person",
      name: "Lucas Larroche",
      givenName: "Lucas",
      familyName: "Larroche",
      url: "https://lucaslarroche.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
