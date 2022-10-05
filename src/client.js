import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2022-02-03",
	useCdn: true,
	token: process.env.REACT_APP_SANITY_TOKEN,
});
