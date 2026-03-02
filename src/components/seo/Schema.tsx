"use client";

import Script from "next/script";

export function Schema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tuft",
    url: "https://tuft.in",
    logo: "https://tuft.in/assets/images/short_logo.png",
    sameAs: ["https://www.instagram.com/tuft.in/", "https://x.com/tuft_in", "https://www.linkedin.com/company/tuft-in"],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tuft",
    url: "https://tuft.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tuft.in/blog/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const navigationData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    hasPart: [
      {
        "@type": "WebPage",
        name: "Features",
        url: "https://tuft.in/features",
      },
      {
        "@type": "WebPage",
        name: "Pricing",
        url: "https://tuft.in/pricing",
      },
      {
        "@type": "WebPage",
        name: "Blog",
        url: "https://tuft.in/blog",
      },
      {
        "@type": "WebPage",
        name: "Get Started",
        url: "https://app.tuft.in",
      },
    ],
  };

  return (
    <>
      <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
      <Script id="navigation-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationData) }} />
    </>
  );
}
