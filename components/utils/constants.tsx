import { customAlphabet } from "nanoid";
import { UserCircle, Cloud, DoorEnter, Moneybag } from "tabler-icons-react";

const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
export const generateUniqueID = customAlphabet(alphabet, 15);

export class AppImages {
  static HOMEPAGE_BG = "/assets/images/home_page_bg.png";
  static CONTACT_US = "/assets/images/contact_us.png";
  static LONG_LOGO = "/assets/images/long_logo.webp";
  static BRAND_AD = "/assets/images/brand_ad.png";
  static PLAYSTORE_DOWNLOAD = "/assets/images/playstore_download.webp";

  static SCREENSHOTS = {
    HOME: "/assets/app_screenshots/app_home_page.webp",
    FEED: "/assets/app_screenshots/feed.webp",
    FILES: "/assets/app_screenshots/files.webp",
    ROOMS: "/assets/app_screenshots/rooms.webp",
    CHAT: "/assets/app_screenshots/chat.webp",
    MEETINGS: "/assets/app_screenshots/meetings.png",
    PAYMENTS: "/assets/app_screenshots/payments.png",
    FEATURES: "/assets/app_screenshots/features.webp",
  };

  static ILLUSTRATIONS = {
    CONFIGURE: "/assets/illustrations/configure.png",
    PRICING: "/assets/illustrations/pricing.png",
    SETUP: "/assets/illustrations/setup.png",
    FREE_TIER: "/assets/illustrations/free_tier.png",
    CONTACT_US: "/assets/illustrations/contact_us.png",
  };
  static ICONS = {
    APPS: "/assets/icons/apps.svg",
    FLASH: "/assets/icons/flash.svg",
    PRICE_TAG: "/assets/icons/price_tag.svg",
    RIGHT_ARROW: "/assets/icons/right_arrow.svg",
  };
}

export const PLAYSTORE_LINK = "https://play.google.com/store/apps/details?id=com.tuft.app";

export class BLOG_IMAGES {
  static MANAGE_TUITION_CENTRE_LIKE_NEVER_BEFORE = {
    COVER_PHOTO: "/assets/blog_images/manage_your_tuition_centre/cover_photo.jpg",
    IMG1: "/assets/blog_images/manage_your_tuition_centre/img_1.jpg",
    IMG2: "/assets/blog_images/manage_your_tuition_centre/img_2.jpg",
    IMG3: "/assets/blog_images/manage_your_tuition_centre/img_3.jpg",
  };
}

export const FEATURES_LIST = [
  {
    title: "Chat Spaces",
    description: `
      Every Club and Room has its own Chat space where you can chat with other members of the Club or Room. 
      Whether it may be discussing the next event or just having a casual conversation, you can do it all here.`,
  },
  {
    title: "Rooms",
    description: `
      Segregate your Club into Rooms. A Room can be a space for a particular topic or may be an event.
      You can charge a fee for joining a Room. You can also create a Room for free.
      `,
  },
  {
    title: "File Storage",
    description: `
      Save all your files in one place in an organized way. Create folders as per your needs and upload files into it.
      Whether it may be a materials for a course or clicks of an event, you can store them all here.
    `,
  },
  {
    title: "Feed",
    description: `
      Post important updates and announcements in the Feed. Only admins can post in the Feed so it stays focussed for the members.
      You can also give access to other members to post in the Feed.
    `,
  },
  {
    title: "Analytics",
    description: `
      Get insights about your Club and its members rather than operating in the dark. 
      See how many people visited your club vs members joined. Also get insights of how they are interacting with the club.
    `,
  },
  {
    title: "Coming Soon...",
    description: `
      We are working on more features to make your Club experience better.
      If you have any suggestions, please let us know and we would be happy to prioritize those for you.
    `,
  },
];

export const PRICING_LIST = [
  {
    title: "Members",
    price: "₹ 5",
    free_text: (
      <span>
        * First <b>2000</b> members free
      </span>
    ),
    price_per: "per user / month",
    icon: <UserCircle color="white" size={30} />,
  },
  {
    title: "Storage",
    price: "₹ 2",
    free_text: (
      <span>
        * Free upto <b>5 GB</b> forever
      </span>
    ),
    price_per: "per GB / month",
    icon: <Cloud color="white" size={30} />,
  },
  {
    title: "Rooms",
    price: "₹ 10",
    free_text: (
      <span>
        * First <b>50</b> free
      </span>
    ),
    price_per: "per room / month",
    icon: <DoorEnter color="white" size={30} />,
  },
  {
    title: "Payments",
    price: "1.5 %",
    free_text: (
      <span>
        * No Fee upto <b>₹10,000</b> every month
      </span>
    ),
    price_per: "per payment",
    icon: <Moneybag color="white" size={30} />,
  },
];
