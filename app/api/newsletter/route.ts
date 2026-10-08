import { NextResponse } from "next/server";
import { sendNewsletterEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, hp_field = "" } = body;

    // Honeypot spam protection
    if (hp_field) {
      return NextResponse.json({ success: true, message: "Erfolgreich angemeldet." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    await sendNewsletterEmail({
      email: email.trim().toLowerCase(),
    });

    return NextResponse.json({
      success: true,
      message: "Vielen Dank für Ihre Anmeldung zu unseren Fachinformationen.",
    });
  } catch (error) {
    console.error("[API /api/newsletter] Error processing newsletter signup:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Fehler bei der Anmeldung. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}
