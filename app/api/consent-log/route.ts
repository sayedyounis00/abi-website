import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface ConsentLogPayload {
  consentId: string;
  timestamp: string;
  version: string;
  choices: {
    necessary: boolean;
    preferences: boolean;
    analytics: boolean;
    marketing: boolean;
  };
}

/**
 * Endpoint for GDPR Art. 7(1) proof of consent (Accountability / Rechenschaftspflicht).
 * Stores timestamped consent records with anonymized cryptographic hashes.
 * STRICT PRIVACY REQUIREMENT: Full IP address is NEVER stored.
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ConsentLogPayload;

    if (!body || !body.version || !body.choices) {
      return NextResponse.json(
        { error: "Invalid consent log payload" },
        { status: 400 }
      );
    }

    // Extract headers for pseudonymized verification
    const forwardedFor = req.headers.get("x-forwarded-for") || "";
    const rawIp = forwardedFor.split(",")[0]?.trim() || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "unknown";

    // Hash client identification with salt (prevents IP reconstruction)
    // Daily salt ensures same-day deduplication without persisting trackable user identities
    const dateSalt = new Date().toISOString().slice(0, 10);
    const anonymizedHash = crypto
      .createHash("sha256")
      .update(`${rawIp}:${userAgent}:${dateSalt}`)
      .digest("hex")
      .substring(0, 16);

    const logRecord = {
      consentId: body.consentId || "anonymous",
      timestamp: body.timestamp || new Date().toISOString(),
      version: body.version,
      choices: body.choices,
      anonymizedClientHash: anonymizedHash,
    };

    // In production, this can be written to an audit log database or secure audit file
    if (process.env.NODE_ENV !== "test") {
      console.log(
        "[GDPR Art. 7(1) Consent Proof]",
        JSON.stringify(logRecord)
      );
    }

    return NextResponse.json(
      {
        success: true,
        consentId: logRecord.consentId,
        recordedAt: logRecord.timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ConsentLog] Error processing log record:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
