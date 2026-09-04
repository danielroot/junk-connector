import type { Region } from "./types";
import { siteConfig } from "./site";

export const regions: Region[] = [
  {
    slug: "chicago",
    city: "Chicago",
    state: "Illinois",
    stateCode: "il",
    heroImage: siteConfig.defaultImage,
    imageAlt: "Junk removal themed characters holding furniture and bagged items",
    imagePrompt:
      "Photo-real junk removal crew loading furniture into a truck on a Chicago residential street, no landmarks, no logos, truthful service scene.",
    title: "Book Junk Removal in Chicago, IL",
    description:
      "Start an online junk removal booking for Chicago homes, apartments, alley pickups, and move-out cleanouts through a sponsored booking flow.",
    serviceAreaNote:
      "Useful for apartments, condos, alley pickups, curbside piles, and multi-unit move-out projects where partner service is available.",
    localSignals: [
      "Apartment and condo cleanouts often need elevator, loading zone, or alley access details before booking.",
      "Late spring and summer move-out periods can create higher demand around rentals and multi-unit buildings.",
      "Reusable furniture may be eligible for local donation routes when condition and timing allow.",
    ],
    acceptedCategories: [
      "Furniture",
      "Mattresses",
      "Appliances",
      "Electronics",
      "Exercise equipment",
      "General household junk",
    ],
    donationRecyclingNote:
      "For reusable items, check donation eligibility before booking. For regulated items, confirm disposal limits inside the booking flow.",
    commonScenarios: [
      "Clearing a storage unit before a lease deadline",
      "Removing a sofa or mattress from an upper-floor apartment",
      "Preparing a garage or basement before a sale or renovation",
    ],
    faqs: [
      {
        question: "Can I book junk removal online in Chicago?",
        answer:
          "Yes. Start with the booking module and enter your ZIP code, items, access details, and pickup preferences to confirm availability.",
      },
      {
        question: "What access details should I include?",
        answer:
          "Include stairs, elevators, parking restrictions, alley access, building rules, and whether items are inside, curbside, or in a storage area.",
      },
      {
        question: "Does Junk Connector provide the hauling service?",
        answer:
          "No. Junk Connector is a publisher and referral site. Booking and service details are handled by the sponsored booking partner.",
      },
    ],
    bookingTracking: {
      campaign: "chicago-il",
      region: "chicago",
    },
    approved: true,
  },
  {
    slug: "atlanta",
    city: "Atlanta",
    state: "Georgia",
    stateCode: "ga",
    heroImage: siteConfig.defaultImage,
    imageAlt: "Junk removal themed characters ready to haul household items",
    imagePrompt:
      "Photo-real junk removal crew removing old furniture from an Atlanta residential driveway, no skyline, no logos, truthful service scene.",
    title: "Book Junk Removal in Atlanta, GA",
    description:
      "Start an online booking for Atlanta furniture removal, garage cleanouts, and household junk pickup through a sponsored booking flow.",
    serviceAreaNote:
      "Useful for driveway pickups, garage cleanouts, apartment moves, and bulky-item removal where partner service is available.",
    localSignals: [
      "Driveway and garage cleanouts are common around suburban moves and renovation projects.",
      "Booking details should separate curbside items from items that need in-home removal.",
      "Donation may be a fit for clean furniture, working appliances, or reusable household goods.",
    ],
    acceptedCategories: [
      "Couches",
      "Mattresses",
      "Appliances",
      "Patio furniture",
      "Office furniture",
      "Bagged household junk",
    ],
    donationRecyclingNote:
      "Reusable items should be described accurately during booking so the service partner can route the job appropriately when options exist.",
    commonScenarios: [
      "Clearing bulky furniture after a move",
      "Removing old patio sets before listing a home",
      "Cleaning out a garage after renovation debris has been separated",
    ],
    faqs: [
      {
        question: "Can I get upfront pricing for Atlanta junk removal?",
        answer:
          "The booking partner may show pricing after you enter the exact items, ZIP code, pickup details, and timing.",
      },
      {
        question: "Should I list every item?",
        answer:
          "Yes. Accurate item counts and access details help prevent booking issues or pricing changes later.",
      },
      {
        question: "Is this a local Atlanta junk company?",
        answer:
          "Junk Connector is not a local hauling company. It connects visitors to a sponsored booking partner where available.",
      },
    ],
    bookingTracking: {
      campaign: "atlanta-ga",
      region: "atlanta",
    },
    approved: true,
  },
  {
    slug: "denver",
    city: "Denver",
    state: "Colorado",
    stateCode: "co",
    heroImage: siteConfig.defaultImage,
    imageAlt: "Junk removal themed characters with bulky household items",
    imagePrompt:
      "Photo-real junk removal crew loading a mattress and boxes from a Denver home driveway, no mountains, no logos, truthful service scene.",
    title: "Book Junk Removal in Denver, CO",
    description:
      "Start an online junk removal booking for Denver mattress removal, furniture pickup, and garage cleanouts through a sponsored booking flow.",
    serviceAreaNote:
      "Useful for bulky-item pickup, garage cleanouts, storage cleanouts, and move-related removal where partner service is available.",
    localSignals: [
      "Snow, steep driveways, and alley access can affect pickup logistics during colder months.",
      "Garage and storage cleanouts are common before moves, renovations, and seasonal gear changes.",
      "Reusable furniture and working appliances should be separated from broken or damaged items when possible.",
    ],
    acceptedCategories: [
      "Mattresses",
      "Furniture",
      "Appliances",
      "Storage cleanout items",
      "Outdoor gear",
      "Boxes and bagged junk",
    ],
    donationRecyclingNote:
      "Describe item condition in the booking flow. Donation or recycling outcomes depend on item type, condition, and local availability.",
    commonScenarios: [
      "Removing a mattress before a new delivery",
      "Clearing storage space after a move",
      "Hauling broken furniture from a basement or garage",
    ],
    faqs: [
      {
        question: "Can weather affect junk removal pickup?",
        answer:
          "It can. Add driveway, stairs, alley, and weather-related access notes during booking so the service partner has accurate details.",
      },
      {
        question: "Can I book mattress removal online?",
        answer:
          "Yes, start in the booking module and enter your ZIP code, mattress type, quantity, and pickup location.",
      },
      {
        question: "Who handles the actual pickup?",
        answer:
          "The sponsored booking partner handles service availability, pricing, scheduling, and pickup details.",
      },
    ],
    bookingTracking: {
      campaign: "denver-co",
      region: "denver",
    },
    approved: true,
  },
];

export const approvedRegions = regions.filter((region) => region.approved);

export function getRegionByParams(state: string, city: string) {
  return approvedRegions.find(
    (region) => region.stateCode === state && region.slug === city,
  );
}
