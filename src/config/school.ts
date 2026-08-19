/**
 * Central place for all school-specific demo data.
 * Replace these placeholder values with the real school details later.
 */
export const school = {
  name: "School Name",
  tagline: "Your School Tagline",
  email: "school@example.com",
  phone: "+91 XXXXX XXXXX",
  address: "School Address, Mumbai, Maharashtra",
  workingHours: "Monday – Saturday, 8:00 AM – 4:00 PM",
  instagramUrl: "https://www.instagram.com/",
  /** Demo WhatsApp number with country code (91 = India). Replace later. */
  whatsappNumber: "917738735890",
} as const;

/** Builds a wa.me link with a pre-filled (not auto-sent) message. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${school.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildEnquiryMessage(values: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  return [
    "Hello, I am interested in contacting the school.",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    "",
    "Message:",
    values.message,
    "",
    "Sent from the school website.",
  ].join("\n");
}
