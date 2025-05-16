export default function Services() {
  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      {/* Virtual Assistance Section */}
      <section className="py-20 bg-[var(--color-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-[var(--font-display)] text-3xl font-bold mb-6 text-[var(--color-primary)]">
                  Virtual Assistance
                </h2>
                <p className="text-[var(--color-dark)] mb-6">
                  Our professional virtual assistants are here to handle your business operations, allowing you to focus on growth and innovation.
                </p>
                <ul className="space-y-4">
                  {[
                    "Administrative Support",
                    "Customer Service Management",
                    "Data Entry & Processing",
                    "Email Management",
                    "Calendar Management",
                    "Travel Arrangements"
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-[var(--color-accent)]">✓</span>
                      <span className="text-[var(--color-dark)]">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FFF7E6] p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">Why Choose Our Virtual Assistance?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-dark)]">24/7 availability for global business support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-dark)]">Highly trained professionals with industry expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    <span className="text-[var(--color-dark)]">Scalable solutions to match your business needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* SVG Image */}
            <div className="flex-1 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <img
                src="/code_thinking.svg"
                alt="Code Thinking Illustration"
                className="w-full max-w-md h-auto"
                draggable="false"
              />
            </div>
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="font-[var(--font-display)] text-3xl font-bold mb-6 text-[var(--color-primary)]">
                Custom Web Development
              </h2>
              <p className="text-[var(--color-dark)] mb-6">
                We build modern, scalable web applications using the latest technologies to help your business thrive in the digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { tech: "Next.js", desc: "Modern React Framework" },
                  { tech: "React", desc: "UI Development" },
                  { tech: "TypeScript", desc: "Type Safety" },
                  { tech: "Ruby on Rails", desc: "Backend Solutions" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-[var(--color-primary)]">{item.tech}</h4>
                    <p className="text-sm text-[var(--color-dark)]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-light)] p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">Development Process</h3>
                <ol className="space-y-4">
                  {[
                    "Initial Consultation & Planning",
                    "Design & Prototyping",
                    "Development & Testing",
                    "Deployment & Maintenance"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-[var(--color-accent)] text-[var(--color-dark)] w-6 h-6 rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-[var(--color-dark)]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-[var(--font-display)] text-3xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-[var(--color-secondary)] mb-8">
              Let&apos;s discuss how we can help you achieve your business goals with our comprehensive solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[var(--color-accent)] text-[var(--color-dark)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-tertiary)] transition-colors">
                Schedule a Call
              </button>
              <button className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
