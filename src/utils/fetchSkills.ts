import { Skill } from "../../typings";

export const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
  ).catch(() => {
    return;
  });

  if (!res) {
    return Promise.resolve([]);
  }

  const data = await res.json();
  const skills: Skill[] = data.skills;

  // console.log("fetching", skills);

  return skills;
};
