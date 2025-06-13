import type { NextApiRequest, NextApiResponse } from "next";
import { trackPageVisit } from "../../utils/track-page-visit";

export const runtime = "experimental-edge";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await trackPageVisit(req);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error tracking visit:", error);
    res.status(500).json({ success: false, error: "Failed to track visit" });
  }
}
