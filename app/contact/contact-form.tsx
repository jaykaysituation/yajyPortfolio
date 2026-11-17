"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:julianekm02@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Name</label>
      <input id="contact-name" name="name" autoComplete="name" required />

      <label htmlFor="contact-email">Email</label>
      <input id="contact-email" name="email" type="email" autoComplete="email" required />

      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows={5} required />

      <button type="submit">OPEN EMAIL APP <span aria-hidden="true">↗</span></button>
      <p className="contact-form-note">This opens your email app with a prefilled draft.</p>
    </form>
  );
}
