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
      "Book junk removal online for Chicago homes, apartments, alley pickups, and move-out cleanouts.",
    serviceAreaNote:
      "Explore pickup guidance for apartments, condos, alley access, curbside piles, and multi-unit move-outs.",
    localSignals: [
      {
        icon: "apartment",
        text: "Apartment and condo cleanouts often need elevator, loading zone, or alley access details before booking.",
      },
      {
        icon: "calendar_month",
        text: "Late spring and summer move-out periods can create higher demand around rentals and multi-unit buildings.",
      },
      {
        icon: "volunteer_activism",
        text: "Reusable furniture may be eligible for local donation routes when condition and timing allow.",
      },
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
          "Yes. Open the online booking form and enter your ZIP code, items, access details, and pickup preferences to confirm availability.",
      },
      {
        question: "What access details should I include?",
        answer:
          "Include stairs, elevators, parking restrictions, alley access, building rules, and whether items are inside, curbside, or in a storage area.",
      },
      {
        question: "Does Junk Connector provide the hauling service?",
        answer:
          "No. Junk Connector provides booking guides and connects you with a third-party service provider that handles the pickup.",
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
      "Book furniture removal, garage cleanouts, and household junk pickup online in Atlanta.",
    serviceAreaNote:
      "Explore pickup guidance for driveways, garage cleanouts, apartment moves, and bulky items.",
    localSignals: [
      {
        icon: "garage_home",
        text: "Driveway and garage cleanouts are common around suburban moves and renovation projects.",
      },
      {
        icon: "move_down",
        text: "Booking details should separate curbside items from items that need in-home removal.",
      },
      {
        icon: "volunteer_activism",
        text: "Donation may be a fit for clean furniture, working appliances, or reusable household goods.",
      },
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
      "Describe reusable items accurately during booking so the service provider can review any available donation or recycling options.",
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
          "Junk Connector does not perform hauling services. We provide local booking information and connect you with a third-party service provider where available.",
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
      "Book mattress removal, furniture pickup, and garage cleanouts online in Denver.",
    serviceAreaNote:
      "Explore pickup guidance for bulky items, garages, storage spaces, and move-related cleanouts.",
    localSignals: [
      {
        icon: "weather_snowy",
        text: "Snow, steep driveways, and alley access can affect pickup logistics during colder months.",
      },
      {
        icon: "inventory_2",
        text: "Garage and storage cleanouts are common before moves, renovations, and seasonal gear changes.",
      },
      {
        icon: "recycling",
        text: "Reusable furniture and working appliances should be separated from broken or damaged items when possible.",
      },
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
          "Yes. Open the online booking form and enter your ZIP code, mattress type, quantity, and pickup location.",
      },
      {
        question: "Who handles the actual pickup?",
        answer:
          "The third-party service provider handles availability, pricing, scheduling, and pickup details.",
      },
    ],
    bookingTracking: {
      campaign: "denver-co",
      region: "denver",
    },
    approved: true,
  },
  {
    slug: "new-york",
    city: "New York City",
    state: "New York",
    stateCode: "ny",
    heroImage: siteConfig.defaultImage,
    imageAlt: "Junk removal themed characters prepared for a New York City pickup",
    imagePrompt:
      "Photo-real junk removal crew moving furniture from a New York City apartment building, no landmarks, no logos, truthful service scene.",
    title: "Book Junk Removal in New York City, NY",
    description:
      "Book furniture removal, apartment cleanouts, and bulky-item pickup online in New York City.",
    serviceAreaNote:
      "Explore pickup guidance for apartments, walk-ups, elevator buildings, curb access, and move-out cleanouts.",
    localSignals: [
      {
        icon: "apartment",
        text: "Apartment pickups may require elevator reservations, building approval, or a certificate of insurance.",
      },
      {
        icon: "stairs",
        text: "Walk-up buildings and narrow hallways can affect labor, timing, and item-removal planning.",
      },
      {
        icon: "signpost",
        text: "Curb placement and building rules should be confirmed before moving bulky items outside.",
      },
    ],
    acceptedCategories: [
      "Furniture",
      "Mattresses",
      "Appliances",
      "Electronics",
      "Office furniture",
      "Bagged household junk",
    ],
    donationRecyclingNote:
      "New York City has specific rules for some bulky items. Check local requirements and describe item condition before booking private pickup.",
    commonScenarios: [
      "Removing furniture from a walk-up apartment",
      "Coordinating a move-out cleanout with building access hours",
      "Clearing bulky items from a storage room or office",
    ],
    faqs: [
      {
        question: "Can I book apartment junk removal in New York City?",
        answer:
          "Yes. Enter the ZIP code, item list, floor, elevator details, and building requirements to check availability.",
      },
      {
        question: "What building details should I provide?",
        answer:
          "Include stairs, elevator reservations, loading access, parking limits, service-entry rules, and any insurance requirements.",
      },
      {
        question: "Does Junk Connector perform the pickup?",
        answer:
          "No. Junk Connector provides booking information and connects you with a third-party service provider that handles the pickup.",
      },
    ],
    bookingTracking: {
      campaign: "new-york-city-ny",
      region: "new-york",
    },
    approved: true,
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    state: "California",
    stateCode: "ca",
    heroImage: siteConfig.defaultImage,
    imageAlt: "Junk removal themed characters prepared for a Los Angeles pickup",
    imagePrompt:
      "Photo-real junk removal crew loading furniture from a Los Angeles home driveway, no landmarks, no logos, truthful service scene.",
    title: "Book Junk Removal in Los Angeles, CA",
    description:
      "Book furniture removal, garage cleanouts, and bulky-item pickup online in Los Angeles.",
    serviceAreaNote:
      "Explore pickup guidance for homes, apartments, driveways, garages, and move-related cleanouts.",
    localSignals: [
      {
        icon: "local_parking",
        text: "Limited street parking and long carries from the property can affect pickup planning.",
      },
      {
        icon: "garage_home",
        text: "Garage and storage cleanouts are easier to quote with a complete item list and clear access notes.",
      },
      {
        icon: "recycling",
        text: "Usable furniture and working appliances may have donation or reuse options depending on condition.",
      },
    ],
    acceptedCategories: [
      "Couches",
      "Mattresses",
      "Appliances",
      "Patio furniture",
      "Office furniture",
      "General household junk",
    ],
    donationRecyclingNote:
      "Los Angeles offers municipal options for some bulky items. Compare local programs with private pickup before booking.",
    commonScenarios: [
      "Clearing furniture before or after a move",
      "Removing bulky items from a garage or storage area",
      "Preparing a rental property for new occupants",
    ],
    faqs: [
      {
        question: "Can I book same-day junk removal in Los Angeles?",
        answer:
          "Availability varies by ZIP code, item list, access details, and schedule. Enter the job details to view current options.",
      },
      {
        question: "Should I list every item before requesting a quote?",
        answer:
          "Yes. A complete item list helps produce a more accurate quote and reduces the chance of changes at pickup.",
      },
      {
        question: "Who provides the hauling service?",
        answer:
          "A third-party service provider handles availability, pricing, scheduling, and the pickup itself.",
      },
    ],
    bookingTracking: {
      campaign: "los-angeles-ca",
      region: "los-angeles",
    },
    approved: true,
  },
  {
    slug: "houston",
    city: "Houston",
    state: "Texas",
    stateCode: "tx",
    heroImage: siteConfig.defaultImage,
    imageAlt: "Junk removal themed characters prepared for a Houston pickup",
    imagePrompt:
      "Photo-real junk removal crew loading household items from a Houston home garage, no skyline, no logos, truthful service scene.",
    title: "Book Junk Removal in Houston, TX",
    description:
      "Book furniture removal, garage cleanouts, and household junk pickup online in Houston.",
    serviceAreaNote:
      "Explore pickup guidance for homes, apartments, garages, driveways, and move-related cleanouts.",
    localSignals: [
      {
        icon: "garage_home",
        text: "Garage and driveway pickups should include an accurate item count and notes about gate access.",
      },
      {
        icon: "apartment",
        text: "Apartment pickups may require parking instructions, elevator access, and property-management approval.",
      },
      {
        icon: "rainy",
        text: "Outdoor items should be kept safely accessible while protected from rain when possible.",
      },
    ],
    acceptedCategories: [
      "Furniture",
      "Mattresses",
      "Appliances",
      "Patio furniture",
      "Exercise equipment",
      "Bagged household junk",
    ],
    donationRecyclingNote:
      "Houston collection options vary by address and item type. Check local rules and describe reusable or regulated items accurately before booking.",
    commonScenarios: [
      "Clearing a garage before a move or renovation",
      "Removing furniture from an apartment or rental home",
      "Hauling bulky household items after a cleanout",
    ],
    faqs: [
      {
        question: "Can I get a junk removal quote online in Houston?",
        answer:
          "Yes. Enter the ZIP code, item list, quantities, access details, and preferred timing to check pricing and availability.",
      },
      {
        question: "What access details should I include?",
        answer:
          "Include gate codes, stairs, elevators, parking limits, driveway access, and whether items are indoors or curbside.",
      },
      {
        question: "Does Junk Connector provide hauling services?",
        answer:
          "No. Junk Connector provides booking guides and connects you with a third-party service provider that performs the pickup.",
      },
    ],
    bookingTracking: {
      campaign: "houston-tx",
      region: "houston",
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
