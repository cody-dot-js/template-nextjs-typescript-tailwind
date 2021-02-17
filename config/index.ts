export const name = "LONG SITE NAME HERE";

export const shortName = "SITE NAME HERE";

export const defaultTitle = "SITE NAME HERE";

export const defaultDescription = `Website for ${shortName}`;

export const telephoneNumber = "+1 (555) 555-5555";

export const siteDomain = "my-site.com";

export const repoName = "REPO_NAME";

export const emails = {
  tos: `tos@${siteDomain}`,
  contact: `hello@${siteDomain}`,
  privacyPolicy: `policy@${siteDomain}`,
  support: `support@${siteDomain}`,
};

export const socialIds = {
  facebook: "",
  instagram: "",
  twitter: "",
  personal: {
    facebook: "",
    instagram: "",
  },
};

export const urls = {
  site: `https://www.${siteDomain}`,
  facebook: `https://www.facebook.com/${socialIds.facebook}/`,
  instagram: `https://www.instagram.com/${socialIds.instagram}/`,
  twitter: `https://twitter.com/${socialIds.twitter}`,
  github: `https://github.com/dev-cprice/${repoName}`,
  bugReport: `https://github.com/dev-cprice/${repoName}/issues/new`,
  personal: {
    facebook: `https://www.facebook.com/${socialIds.personal.facebook}`,
    instagram: `https://www.instagram.com/${socialIds.personal.instagram}`,
  },
  stripe: {
    privacyPolicy: "https://stripe.com/privacy",
  },
};

export const routes = {
  about: "/about",
  contact: "/contact",
  gallery: "/gallery",
  home: "/",
  pricing: "/pricing",
  privacyPolicy: "/privacy-policy",
  schedule: "/schedule",
  services: "/services", // TODO(cody): necessary?
  termsOfService: "/tos",
};

function removeTrailingSlashes(path: string) {
  return path.replace(/\/+/g, "");
}

export function fullRoutePath(route: keyof typeof routes) {
  const { site } = urls;
  const path = routes[route];

  return removeTrailingSlashes(`${site}${path}`);
}

const config = {
  defaultDescription,
  defaultTitle,
  emails,
  name,
  repoName,
  routes,
  shortName,
  siteDomain,
  socialIds,
  telephoneNumber,
  urls,
};

export default config;
