import nodemailer from "nodemailer";

export interface IntakeSubmissionData {
  profession: string;
  germanLevel: string;
  goal: string;
  name: string;
  email: string;
  phone?: string;
  notes?: string;
}

export interface NewsletterSubmissionData {
  email: string;
}

/**
 * Creates and returns a configured nodemailer transporter.
 */
export function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn(
      "[Mailer] SMTP credentials are not fully configured. Emails will be logged to console."
    );
    return null;
  }

  const isSecure = port === 465 || process.env.SMTP_SECURE === "true";

  return nodemailer.createTransport({
    host,
    port,
    secure: isSecure,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends notification email for a new intake/assessment inquiry.
 */
export async function sendIntakeEmail(data: IntakeSubmissionData) {
  const recipientEmail = process.env.CONTACT_EMAIL || "Info@abi-ug.de";
  const fromEmail = process.env.SMTP_USER || "Info@abi-ug.de";
  const transporter = getMailTransporter();

  const timestamp = new Date().toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    dateStyle: "full",
    timeStyle: "short",
  });

  const htmlContent = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #0f766e 0%, #0369a1 100%); color: #ffffff; padding: 32px 24px; text-align: center; }
    .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
    .header p { margin: 0; font-size: 14px; opacity: 0.9; }
    .content { padding: 32px 24px; }
    .badge { display: inline-block; padding: 4px 12px; background-color: #f0fdfa; color: #0f766e; border: 1px solid #ccfbf1; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 20px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table th, .info-table td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    .info-table th { width: 38%; color: #64748b; font-weight: 600; background-color: #f8fafc; }
    .info-table td { color: #0f172a; font-weight: 500; }
    .notes-box { background-color: #f8fafc; border-left: 4px solid #0f766e; padding: 16px; border-radius: 4px; font-size: 14px; color: #334155; line-height: 1.6; margin-top: 8px; white-space: pre-wrap; }
    .footer { padding: 20px 24px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ABI – Neue Beratungsanfrage</h1>
      <p>Kostenlose Erstberatung & Eignungsprüfung</p>
    </div>
    <div class="content">
      <div class="badge">Eingegangen am: ${timestamp}</div>
      <table class="info-table">
        <tr>
          <th>Vollständiger Name:</th>
          <td><strong>${escapeHtml(data.name)}</strong></td>
        </tr>
        <tr>
          <th>E-Mail-Adresse:</th>
          <td><a href="mailto:${escapeHtml(data.email)}" style="color: #0f766e; text-decoration: none;">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <th>Telefon / WhatsApp:</th>
          <td>${data.phone ? `<a href="tel:${escapeHtml(data.phone)}" style="color: #0f766e; text-decoration: none;">${escapeHtml(data.phone)}</a>` : '<span style="color: #94a3b8;">Nicht angegeben</span>'}</td>
        </tr>
        <tr>
          <th>Fachbereich / Berufszweig:</th>
          <td><strong>${escapeHtml(data.profession)}</strong></td>
        </tr>
        <tr>
          <th>Ziel der Kontaktaufnahme:</th>
          <td><strong>${escapeHtml(data.goal)}</strong></td>
        </tr>
        <tr>
          <th>Aktuelles Deutschniveau:</th>
          <td>${escapeHtml(data.germanLevel)}</td>
        </tr>
      </table>

      <h3 style="font-size: 15px; color: #0f172a; margin: 24px 0 8px 0; font-weight: 700;">Situation / Zusätzliche Angaben:</h3>
      <div class="notes-box">
        ${data.notes ? escapeHtml(data.notes) : '<em style="color: #94a3b8;">Keine zusätzlichen Angaben gemacht.</em>'}
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0 0 4px 0;">ABI – Arbeit.Bildung.International</p>
      <p style="margin: 0;">Diese E-Mail wurde automatisch über das Anfrageformular auf <a href="https://abi-karriere.de" style="color: #0f766e;">abi-karriere.de</a> generiert.</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  const textContent = `
Neue Beratungsanfrage - ABI (Arbeit.Bildung.International)
------------------------------------------------------------
Eingangsdatum: ${timestamp}

Name: ${data.name}
E-Mail: ${data.email}
Telefon/WhatsApp: ${data.phone || "Nicht angegeben"}
Fachbereich: ${data.profession}
Ziel: ${data.goal}
Deutschniveau: ${data.germanLevel}

Situation / Nachricht:
${data.notes || "Keine zusätzlichen Angaben."}

------------------------------------------------------------
Generiert über abi-karriere.de
  `.trim();

  if (!transporter) {
    console.log("[Mailer MOCK] Intake email payload:", {
      to: recipientEmail,
      subject: `Neue Beratungsanfrage: ${data.name} (${data.profession})`,
      data,
    });
    return { success: true, simulated: true };
  }

  // 1. Send notification to ABI Admin
  const adminMailPromise = transporter.sendMail({
    from: `"ABI Kontaktformular" <${fromEmail}>`,
    to: recipientEmail,
    replyTo: data.email,
    subject: `Neue Beratungsanfrage: ${data.name} – ${data.profession}`,
    text: textContent,
    html: htmlContent,
  });

  // 2. Send confirmation to the applicant
  const applicantConfirmationHtml = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0f766e 0%, #0369a1 100%); color: #ffffff; padding: 28px 24px; text-align: center; }
    .content { padding: 32px 24px; font-size: 15px; line-height: 1.6; }
    .footer { padding: 20px 24px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 20px;">ABI – Arbeit.Bildung.International</h1>
    </div>
    <div class="content">
      <p>Sehr geehrte(r) <strong>${escapeHtml(data.name)}</strong>,</p>
      <p>vielen Dank für Ihr Interesse und Ihre Anfrage zur kostenlosen Eignungsprüfung und Erstberatung.</p>
      <p>Wir haben Ihre Daten erfolgreich erhalten. Unser spezialisiertes Beratungsteam prüft Ihre Ausgangslage und wird sich innerhalb von <strong>24 bis 48 Stunden</strong> mit konkreten Schritten bei Ihnen melden.</p>
      <p style="margin-top: 24px;">Mit freundlichen Grüßen,<br><strong>Ihr ABI-Team</strong><br>Arbeit.Bildung.International</p>
    </div>
    <div class="footer">
      <p style="margin: 0;">ABI – Schlossstraße 5, 19288 Ludwigslust | <a href="mailto:Info@abi-ug.de" style="color: #0f766e;">Info@abi-ug.de</a></p>
    </div>
  </div>
</body>
</html>
  `.trim();

  const applicantMailPromise = transporter.sendMail({
    from: `"ABI - Arbeit.Bildung.International" <${fromEmail}>`,
    to: data.email,
    subject: "Bestätigung: Ihre Anfrage bei ABI (Arbeit.Bildung.International)",
    text: `Sehr geehrte(r) ${data.name},\n\nvielen Dank für Ihre Anfrage bei ABI – Arbeit.Bildung.International.\nWir prüfen Ihre Angaben und melden uns innerhalb von 24-48 Stunden bei Ihnen.\n\nMit freundlichen Grüßen,\nIhr ABI-Team\nInfo@abi-ug.de`,
    html: applicantConfirmationHtml,
  }).catch((err) => {
    console.error("[Mailer] Warning: Could not send confirmation to applicant:", err);
  });

  await Promise.all([adminMailPromise, applicantMailPromise]);

  return { success: true };
}

/**
 * Sends notification email for newsletter registration.
 */
export async function sendNewsletterEmail(data: NewsletterSubmissionData) {
  const recipientEmail = process.env.CONTACT_EMAIL || "Info@abi-ug.de";
  const fromEmail = process.env.SMTP_USER || "Info@abi-ug.de";
  const transporter = getMailTransporter();

  const timestamp = new Date().toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
  });

  if (!transporter) {
    console.log("[Mailer MOCK] Newsletter signup:", data.email);
    return { success: true, simulated: true };
  }

  await transporter.sendMail({
    from: `"ABI Newsletter" <${fromEmail}>`,
    to: recipientEmail,
    subject: `Neue Newsletter-Anmeldung: ${data.email}`,
    text: `Eine neue E-Mail-Adresse hat sich für Fachinformationen angemeldet:\n\nE-Mail: ${data.email}\nDatum: ${timestamp}`,
    html: `<p>Eine neue E-Mail-Adresse hat sich für die Fachinformationen angemeldet:</p><p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p><p><strong>Datum:</strong> ${timestamp}</p>`,
  });

  return { success: true };
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
