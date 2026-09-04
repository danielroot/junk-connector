type BookingPageParams = {
  campaign?: string;
  region?: string;
  item?: string;
  back?: string;
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function withBasePath(path: string) {
  if (!basePath) return path;
  return path === "/" ? `${basePath}/` : `${basePath}${path}`;
}

export function bookingPagePath({ campaign, region, item, back }: BookingPageParams = {}) {
  const params = new URLSearchParams();

  if (campaign) params.set("campaign", campaign);
  if (region) params.set("region", region);
  if (item) params.set("item", item);
  if (back) params.set("back", back);

  const query = params.toString();
  return query ? `${withBasePath("/book/")}?${query}` : withBasePath("/book/");
}
