import type { JunkItem } from "./types";
import { siteConfig } from "./site";

export const junkItems: JunkItem[] = [
  {
    slug: "mattress-removal",
    name: "Mattress Removal",
    title: "Book Mattress Removal Online",
    description:
      "Start an online booking for mattress pickup and disposal through a sponsored booking flow.",
    heroImage: siteConfig.defaultImage,
    imageAlt: "Junk removal themed characters prepared for bulky-item pickup",
    bookingIntent: "mattress-removal",
    prepNotes: [
      "Count each mattress and box spring separately.",
      "Confirm whether pickup is curbside, inside, upstairs, or in a storage area.",
      "Mention stains, damage, or unusual size during booking when asked.",
    ],
    faqs: [
      {
        question: "Can I book mattress removal without calling?",
        answer:
          "Yes. Use the booking module to enter item and access details, then confirm partner availability.",
      },
      {
        question: "Can a box spring be included?",
        answer:
          "Usually, but list it separately in the booking flow so the quote and job details are accurate.",
      },
    ],
  },
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    title: "Book Furniture Removal Online",
    description:
      "Start an online booking for sofa, table, desk, and bulky furniture removal through a sponsored booking flow.",
    heroImage: siteConfig.defaultImage,
    imageAlt: "Junk removal themed characters moving household furniture",
    bookingIntent: "furniture-removal",
    prepNotes: [
      "List each large item separately.",
      "Measure oversized pieces if they may be hard to move through doors or stairs.",
      "Add building access rules, parking notes, and elevator reservations if relevant.",
    ],
    faqs: [
      {
        question: "What furniture can be booked online?",
        answer:
          "Common items include couches, sectionals, tables, desks, dressers, chairs, and bed frames when partner service is available.",
      },
      {
        question: "Should reusable furniture be donated?",
        answer:
          "If it is clean and usable, note the condition during booking. Donation options depend on local partner availability and item condition.",
      },
    ],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    title: "Book Appliance Removal Online",
    description:
      "Start an online booking for appliance removal through a sponsored booking flow.",
    heroImage: siteConfig.defaultImage,
    imageAlt: "Junk removal themed characters with appliance and household junk",
    bookingIntent: "appliance-removal",
    prepNotes: [
      "Disconnect appliances before pickup when required.",
      "Confirm whether the item is upstairs, in a basement, or outside.",
      "Use the booking flow to confirm item eligibility and local restrictions.",
    ],
    faqs: [
      {
        question: "Can appliances be booked online?",
        answer:
          "Many bulky appliances can be entered into the booking flow, but final eligibility depends on item type and local service rules.",
      },
      {
        question: "Do I need to disconnect the appliance?",
        answer:
          "Assume appliances should be safely disconnected before pickup unless the booking partner says otherwise.",
      },
    ],
  },
];

export function getItemBySlug(slug: string) {
  return junkItems.find((item) => item.slug === slug);
}
