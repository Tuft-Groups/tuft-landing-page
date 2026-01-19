import { type ElementType } from "react";
import {
  ChatRoundDotsBold,
  LetterBold,
  VideocameraRecordBold,
  FolderWithFilesBold,
  MoneyBagBold,
  PinBold,
  TagBold,
  WidgetBold,
  BellBold,
  ReplyBold,
  RecordCircleBold,
  HistoryBold,
  GlobalBold,
  PieChartBold,
  CheckCircleBold,
  EyeBold,
  DocumentTextBold,
  ShieldCheckBold,
  DownloadSquareBold,
  CalendarBold,
  ChartSquareBold,
  UsersGroupTwoRoundedBold,
  DocumentsBold,
  CartLargeMinimalisticBold,
  GraphUpBold,
} from "solar-icon-set";

export const NO_AVATAR_IMAGE = "https://media.tuft.in/no_icon.png";

export interface Badge {
  icon: ElementType;
  text: string;
}

export interface Feature {
  id: string;
  tag: string;
  accent: string; // hex color
  color: "tuft-purple" | "tuft-pink";
  titleFirst: string;
  titleSecond: string;
  description: string;
  badges: Badge[];
  mockup: string;
}

export const FEATURE_DATA: Feature[] = [
  {
    id: "feed",
    tag: "Broadcast",
    accent: "#8B5CF6",
    color: "tuft-purple",
    titleFirst: "Signal,",
    titleSecond: "Not Noise.",
    description:
      "Separate official announcements from daily chatter. Ensure your most important updates are never buried and always seen first.",
    badges: [
      { icon: LetterBold, text: "Admin-Only Postings" },
      { icon: PinBold, text: "Priority Pinned Alerts" },
      { icon: BellBold, text: "Real-time Notifications" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/feed.webp",
  },
  {
    id: "chat",
    tag: "Conversations",
    accent: "#EC4899",
    color: "tuft-pink",
    titleFirst: "Threads,",
    titleSecond: "Not Chaos.",
    description: "Keep deep-dives organized. Topical threading allows your community to explore subjects without cluttering the main line.",
    badges: [
      { icon: ChatRoundDotsBold, text: "Topical Sub-channels" },
      { icon: TagBold, text: "HD Media Sharing" },
      { icon: ReplyBold, text: "Threaded Replies" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/chat.webp",
  },
  {
    id: "meetings",
    tag: "Collaboration",
    accent: "#06B6D4",
    color: "tuft-pink",
    titleFirst: "Native",
    titleSecond: "HD Meetings.",
    description:
      "Host professional virtual sessions directly inside your group. No external links or 40-minute limits—just seamless connection.",
    badges: [
      { icon: VideocameraRecordBold, text: "Unlimited Call Duration" },
      { icon: WidgetBold, text: "Integrated Screen Sharing" },
      { icon: RecordCircleBold, text: "Recording & Transcripts" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/meetings.webp",
  },
  {
    id: "files",
    tag: "Organization",
    accent: "#F59E0B",
    color: "tuft-purple",
    titleFirst: "The Vault:",
    titleSecond: "Smart Drive.",
    description:
      "An intelligent cloud library built into your workspace. Store PDFs, links, and HD videos in organized folders that never expire.",
    badges: [
      { icon: FolderWithFilesBold, text: "Smart Folders" },
      { icon: WidgetBold, text: "Global Instant Search" },
      { icon: HistoryBold, text: "Version History" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/files.webp",
  },
  {
    id: "payments",
    tag: "Monetization",
    accent: "#10B981",
    color: "tuft-purple",
    titleFirst: "Revenue",
    titleSecond: "on Autopilot.",
    description:
      "Turn your community into a business. Automate entry fees, handle payouts, and manage subscriptions with built-in financial tools.",
    badges: [
      { icon: MoneyBagBold, text: "Daily Direct Settlements" },
      { icon: WidgetBold, text: "Subscription Analytics" },
      { icon: GlobalBold, text: "Multi-currency Support" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/payments.webp",
  },
  {
    id: "polls",
    tag: "Engagement",
    accent: "#3B82F6",
    color: "tuft-pink",
    titleFirst: "Group",
    titleSecond: "Opinions.",
    description: "Create polls to gather opinions, make decisions, and engage your group members in a fun, interactive way.",
    badges: [
      { icon: PieChartBold, text: "Real-time Results" },
      { icon: CheckCircleBold, text: "Correct Answers" },
      { icon: EyeBold, text: "Admin Insights" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/polls.webp",
  },
  {
    id: "forms",
    tag: "Collection",
    accent: "#6366F1",
    color: "tuft-purple",
    titleFirst: "Easy",
    titleSecond: "Data Collection.",
    description: "Collect detailed information from your community members securely and efficiently with custom forms.",
    badges: [
      { icon: DocumentTextBold, text: "Custom Fields" },
      { icon: ShieldCheckBold, text: "Secure Entries" },
      { icon: DownloadSquareBold, text: "Easy Export" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/forms.webp",
  },
  {
    id: "attendance",
    tag: "Tracking",
    accent: "#2563EB",
    color: "tuft-pink",
    titleFirst: "Smart",
    titleSecond: "Attendance.",
    description:
      "Manage attendance like a pro. Mark presence for every session and keep a permanent history of all records in one organized timeline.",
    badges: [
      { icon: CalendarBold, text: "Session History" },
      { icon: ChartSquareBold, text: "Presence Stats" },
      { icon: DownloadSquareBold, text: "Excel Export" },
    ],
    mockup: "https://media.tuft.in/internal_assets/app_screenshots/attendance.webp",
  },
];
