import { useState } from "react";
import { buildEnquiryMessage, buildWhatsAppUrl, school } from "../config/school";

type Fields = "name" | "email" | "phone" | "message";
type FormValues = Record<Fields, string>;
type FormErrors = Partial<Record<Fields, string>>;

const initialValues: FormValues = { name: "", email: "", phone: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Please enter your full name.";
  else if (name.length > 100) errors.name = "Name must be under 100 characters.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 255)
    errors.email = "Please enter a valid email address.";

  const digits = phone.replace(/\D/g, "");
  if (!phone) errors.phone = "Please enter your phone number.";
  else if (digits.length < 8 || digits.length > 15)
    errors.phone = "Please enter a valid phone number (8–15 digits).";

  if (!message) errors.message = "Please enter a message.";
  else if (message.length > 1000) errors.message = "Message must be under 1000 characters.";

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (submitted) setErrors(validate(next));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(Object.keys(found)[0] as string);
      first?.focus();
      return;
    }
    const url = buildWhatsAppUrl(
      buildEnquiryMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
      }),
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fieldClasses = (invalid: boolean) =>
    `mt-1 block w-full rounded-md border bg-white px-3 py-3 text-base text-slate-900 transition-colors placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
      invalid ? "border-red-600" : "border-slate-300"
    }`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 2xl:max-w-[88rem]">
        <div className="max-w-3xl">
          <h2
            id="contact-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Contact Us
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Have a question about admissions or campus life? Send us a message and our team will get
            back to you.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">School Information</h3>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Address
                </dt>
                <dd className="mt-1 text-base text-slate-800">{school.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </dt>
                <dd className="mt-1 text-base text-slate-800">
                  <a
                    href={`tel:${school.phone.replace(/\s|X/g, "")}`}
                    className="rounded text-blue-900 underline-offset-4 transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                  >
                    {school.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </dt>
                <dd className="mt-1 text-base text-slate-800">
                  <a
                    href={`mailto:${school.email}`}
                    className="rounded break-all text-blue-900 underline-offset-4 transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                  >
                    {school.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Working Hours
                </dt>
                <dd className="mt-1 text-base text-slate-800">{school.workingHours}</dd>
              </div>
            </dl>

            <a
              href={buildWhatsAppUrl("Hello, I would like to know more about the school.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-green-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
            >
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Send an Enquiry</h3>
            <p className="mt-2 text-sm text-slate-600">
              Submitting opens WhatsApp with your message pre-filled — you press send.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-800">
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  maxLength={100}
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClasses(Boolean(errors.name))}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1 text-sm text-red-700">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800">
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  maxLength={255}
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClasses(Boolean(errors.email))}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1 text-sm text-red-700">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-800">
                  Phone Number <span aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  maxLength={20}
                  value={values.phone}
                  onChange={update("phone")}
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={fieldClasses(Boolean(errors.phone))}
                />
                {errors.phone && (
                  <p id="phone-error" role="alert" className="mt-1 text-sm text-red-700">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-800">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  value={values.message}
                  onChange={update("message")}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={fieldClasses(Boolean(errors.message))}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-1 text-sm text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 sm:w-auto"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
