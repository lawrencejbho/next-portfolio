import { Experience } from "../../typings";

export const fetchExperiences = async (): Promise<Experience[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  ).catch(() => {
    return;
  });

  if (!res) {
    return Promise.resolve([]);
  }

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  // console.log("fetching", experiences);

  return experiences;
};
