import { PageInfo } from "../../typings";

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  ).catch(() => {
    return;
  });

  if (!res) {
    return Promise.resolve({} as PageInfo);
  }

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  // console.log("fetching", pageInfo);

  return pageInfo;
};
