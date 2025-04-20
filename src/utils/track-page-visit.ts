interface VisitData {
  isBot: boolean;
  userAgent: string;
  deviceType: string;
  referrer: string;
  url: string;
  ip: string;
  timestamp: string;
  trackingCode: string | null;
}

export async function trackPageVisit(req: any): Promise<void> {
  try {
    // Extract User-Agent and Referrer
    const userAgent = req.headers["user-agent"] || "";
    const referrer =
      req.headers["referer"] ||
      req.headers["referrer"] ||
      (req.headers.origin ? `Origin: ${req.headers.origin}` : "Direct Visit");

    // Get IP address
    const ip = req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || req.socket?.remoteAddress || "Unknown";
    const clientIP = Array.isArray(ip) ? ip[0] : ip;

    // Detect if the request is from a bot
    const isBot = /bot|crawl|spider|slurp|facebookexternalhit|WhatsApp|Telegram/i.test(userAgent);

    // Detect device type
    let deviceType = "Unknown";
    if (/Mobile|Android|iPhone|iPad|iPod/i.test(userAgent)) {
      deviceType = "Mobile";
    } else if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
      deviceType = "Tablet";
    } else if (/Windows|Macintosh|Linux/i.test(userAgent)) {
      deviceType = "Desktop";
    }

    if (!isBot) {
      const visitData: VisitData = {
        isBot,
        userAgent,
        deviceType,
        referrer,
        url: req.url,
        ip: clientIP,
        timestamp: new Date().toISOString(),
        trackingCode: new URLSearchParams(req.url.split("?")[1]).get("t"),
      };

      await fetch("https://tuft-core-400170117812.asia-south1.run.app/internal/website_visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visitData),
      });
    }
  } catch (error) {
    console.error("Failed to record visit:", error);
  }
}
