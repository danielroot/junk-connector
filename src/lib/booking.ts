type BookingPageParams = {
  campaign?: string;
  region?: string;
  item?: string;
  back?: string;
};

export function bookingPagePath({ campaign, region, item, back }: BookingPageParams = {}) {
  const params = new URLSearchParams();

  if (campaign) params.set("campaign", campaign);
  if (region) params.set("region", region);
  if (item) params.set("item", item);
  if (back) params.set("back", back);

  const query = params.toString();
  return query ? `/book/?${query}` : "/book/";
}
