import { NextResponse } from "next/server";
import { sendIntakeEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      profession,
      germanLevel,
      goal,
      name,
      email,
      phone = "",
      notes = "",
      hp_field = "",
    } = body;

    // Honeypot spam protection
    if (hp_field) {
      // Silently discard bot submission
      return NextResponse.json({ success: true, message: "Anfrage erfolgreich verarbeitet." });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Bitte geben Sie einen gültigen Namen an." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
        { status: 400 }
      );
    }

    if (!profession || typeof profession !== "string") {
      return NextResponse.json(
        { success: false, error: "Bitte wählen Sie einen Fachbereich aus." },
        { status: 400 }
      );
    }

    if (!germanLevel || typeof germanLevel !== "string") {
      return NextResponse.json(
        { success: false, error: "Bitte wählen Sie Ihr Deutschniveau aus." },
        { status: 400 }
      );
    }

    if (!goal || typeof goal !== "string") {
      return NextResponse.json(
        { success: false, error: "Bitte wählen Sie Ihr Ziel der Kontaktaufnahme aus." },
        { status: 400 }
      );
    }

    // Call mailer
    await sendIntakeEmail({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      profession: profession.trim(),
      germanLevel: germanLevel.trim(),
      goal: goal.trim(),
      phone: typeof phone === "string" ? phone.trim() : "",
      notes: typeof notes === "string" ? notes.trim() : "",
    });

    return NextResponse.json({
      success: true,
      message: "Ihre Anfrage wurde erfolgreich übermittelt.",
    });
  } catch (error) {
    console.error("[API /api/contact] Error processing inquiry:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Beim Versenden der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.",
      },
      { status: 500 }
    );
  }
}
