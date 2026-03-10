import type { FormSubmission } from "./types";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function buildQuoteEmailHtml(data: FormSubmission): string {
  const isWizard = data.formType === "quote-wizard";
  const formLabel = isWizard ? "Quote Wizard (Home Page)" : "Contact Form";
  const now = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Brisbane",
  });

  const propertyInfo = isWizard
    ? `
      <tr>
        <td style="padding:12px 16px;font-weight:600;color:#111FA2;width:160px;border-bottom:1px solid #eef1ff;">Bedrooms</td>
        <td style="padding:12px 16px;color:#333;border-bottom:1px solid #eef1ff;">${escapeHtml(data.bedrooms)}</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;color:#111FA2;width:160px;border-bottom:1px solid #eef1ff;">Furnishing Level</td>
        <td style="padding:12px 16px;color:#333;border-bottom:1px solid #eef1ff;">${escapeHtml(data.furnishing)}</td>
      </tr>
    `
    : `
      <tr>
        <td style="padding:12px 16px;font-weight:600;color:#111FA2;width:160px;border-bottom:1px solid #eef1ff;">Property Size</td>
        <td style="padding:12px 16px;color:#333;border-bottom:1px solid #eef1ff;">${escapeHtml(data.size)}</td>
      </tr>
    `;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f5f8ff;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
    <div style="background:linear-gradient(135deg,#070e4a,#111FA2);border-radius:16px 16px 0 0;padding:32px 24px;text-align:center;">
      <h1 style="color:#FFDE42;font-size:22px;margin:0 0 4px 0;">New Quote Request</h1>
      <p style="color:rgba(255,255,255,0.7);font-size:14px;margin:0;">via ${formLabel}</p>
    </div>

    <div style="background:white;border-radius:0 0 16px 16px;padding:24px;box-shadow:0 4px 20px rgba(17,31,162,0.08);">
      <h2 style="font-size:16px;color:#111FA2;margin:0 0 16px 0;padding-bottom:8px;border-bottom:2px solid #FFDE42;">Customer Details</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#111FA2;width:160px;border-bottom:1px solid #eef1ff;">Name</td>
          <td style="padding:12px 16px;color:#333;border-bottom:1px solid #eef1ff;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#111FA2;width:160px;border-bottom:1px solid #eef1ff;">Email</td>
          <td style="padding:12px 16px;color:#333;border-bottom:1px solid #eef1ff;">
            <a href="mailto:${escapeHtml(data.email)}" style="color:#5478FF;">${escapeHtml(data.email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#111FA2;width:160px;border-bottom:1px solid #eef1ff;">Phone</td>
          <td style="padding:12px 16px;color:#333;border-bottom:1px solid #eef1ff;">
            <a href="tel:${escapeHtml(data.phone)}" style="color:#5478FF;">${escapeHtml(data.phone)}</a>
          </td>
        </tr>
      </table>

      <h2 style="font-size:16px;color:#111FA2;margin:0 0 16px 0;padding-bottom:8px;border-bottom:2px solid #53CBF3;">Move Details</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#111FA2;width:160px;border-bottom:1px solid #eef1ff;">Moving From</td>
          <td style="padding:12px 16px;color:#333;border-bottom:1px solid #eef1ff;">${escapeHtml(data.from)}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#111FA2;width:160px;border-bottom:1px solid #eef1ff;">Moving To</td>
          <td style="padding:12px 16px;color:#333;border-bottom:1px solid #eef1ff;">${escapeHtml(data.to)}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;font-weight:600;color:#111FA2;width:160px;border-bottom:1px solid #eef1ff;">Moving Date</td>
          <td style="padding:12px 16px;color:#333;border-bottom:1px solid #eef1ff;">${escapeHtml(data.date)}</td>
        </tr>
        ${propertyInfo}
      </table>

      ${
        data.details
          ? `
        <h2 style="font-size:16px;color:#111FA2;margin:0 0 16px 0;padding-bottom:8px;border-bottom:2px solid #FFDE42;">Additional Details</h2>
        <div style="background:#f5f8ff;border-radius:12px;padding:16px;color:#333;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.details)}</div>
      `
          : ""
      }

      <div style="margin-top:32px;padding-top:16px;border-top:1px solid #eef1ff;text-align:center;">
        <p style="color:#999;font-size:12px;margin:0;">Received ${now} AEST &bull; Paradise Removals</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}
