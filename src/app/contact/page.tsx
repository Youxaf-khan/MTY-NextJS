'use client';

import { SocialIcon } from 'react-social-icons';

export default function Contact() {
  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-[var(--font-display)] text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 text-[var(--color-secondary)]">
              Let&apos;s connect! Reach out for a free consultation or any questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-[var(--color-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
              <div>
                <label className="block text-[var(--color-primary)] font-semibold mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-[var(--color-secondary)] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-dark)]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-[var(--color-primary)] font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-[var(--color-secondary)] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-dark)]"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-[var(--color-primary)] font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-[var(--color-secondary)] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-[var(--color-dark)]"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] text-[var(--color-dark)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-tertiary)] transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-[var(--color-secondary)]/10 p-6 rounded-lg">
                <h2 className="font-[var(--font-display)] text-2xl font-bold mb-4 text-[var(--color-primary)]">Contact Details</h2>
                <ul className="space-y-2 text-[var(--color-dark)]">
                  <li><span className="font-semibold">Email:</span> info@movetoyourgoals.com</li>
                  <li><span className="font-semibold">Phone:</span> (555) 123-4567</li>
                  <li><span className="font-semibold">Address:</span> 123 Main St, City, Country</li>
                </ul>
              </div>
              <div className="bg-[var(--color-secondary)]/10 p-6 rounded-lg">
                <h2 className="font-[var(--font-display)] text-2xl font-bold mb-4 text-[var(--color-primary)]">Follow Us</h2>
                <div className="flex gap-6">
                  <SocialIcon
                    url="https://www.instagram.com/movetoyourgoals"
                    bgColor="#E1306C"
                    fgColor="white"
                    style={{ height: 48, width: 48 }}
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/company/movetoyourgoals"
                    bgColor="#0077B5"
                    fgColor="white"
                    style={{ height: 48, width: 48 }}
                  />
                  <SocialIcon
                    url="https://github.com/Youxaf-Khan"
                    bgColor="#333"
                    fgColor="white"
                    style={{ height: 48, width: 48 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
