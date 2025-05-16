import Link from 'next/link';
import StatsSection from '@/components/StatsSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function Home() {
  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      {/* Hero Section */}
      <section className="bg-[var(--color-primary)] text-white py-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-[var(--font-display)] text-7xl md:text-8xl font-bold mb-10">
                Transform Business with Technology
              </h1>
              <p className="text-3xl mb-12">
                Expert virtual assistance and custom software solutions to help
                your business thrive in the digital age.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact" 
                  className="bg-[var(--color-accent)] text-[var(--color-dark)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-tertiary)] transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-colors"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
            {/* SVG Image */}
            <div className="flex-1 flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-xl aspect-square relative">
                <img
                  src="/dev_productivity.svg"
                  alt="Developer Productivity Illustration"
                  className="w-full h-full object-contain float-animate"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[var(--color-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-[var(--font-display)] text-4xl font-bold mb-4 text-[var(--color-primary)]">
              Our Services
            </h2>
            <p className="text-lg text-[var(--color-dark)] opacity-80">
              Empowering your business with seamless virtual support and
              cutting-edge web solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Virtual Assistance",
                description:
                  "Delegate your admin, customer service, and daily tasks to our expert virtual assistants.",
                icon: "/dev_productivity.svg",
                tech: ["Admin Support", "Customer Service", "Data Entry"],
              },
              {
                title: "Custom Web Development",
                description:
                  "Modern, scalable web apps built with Next.js, React, and more for your unique needs.",
                icon: "/code_thinking.svg",
                tech: ["Next.js", "React", "TypeScript"],
              },
              {
                title: "Ruby on Rails Solutions",
                description:
                  "Robust, scalable backends and APIs with Ruby on Rails and PostgreSQL.",
                icon: "/two_factor_authentication.svg",
                tech: ["Ruby on Rails", "PostgreSQL", "API Development"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-xl border-2 border-transparent hover:border-[var(--color-accent)] hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)]/40 transition-colors">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-12 h-12 object-contain"
                    style={{
                      filter:
                        service.title === "Ruby on Rails Solutions"
                          ? "brightness(0.9)"
                          : "none",
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary)]">
                  {service.title}
                </h3>
                <p className="text-[var(--color-dark)] mb-4 opacity-90">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[var(--font-display)] text-3xl font-bold mb-6 text-[var(--color-primary)]">
              Why Choose MoveToYourGoals?
            </h2>
            <p className="text-[var(--color-dark)] mb-8">
              We combine cutting-edge technology with professional virtual
              assistance to deliver comprehensive solutions for your business.
              Our team of expert developers and virtual assistants work together
              to ensure your success in the digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-[var(--color-light)] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">
                  Expert Development
                </h3>
                <p className="text-[var(--color-dark)]">
                  Modern tech stack with Next.js, React, and Ruby on Rails for
                  scalable solutions
                </p>
              </div>
              <div className="bg-[var(--color-light)] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">
                  Virtual Support
                </h3>
                <p className="text-[var(--color-dark)]">
                  Professional virtual assistance to handle your business
                  operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[var(--color-light)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-dark)]">
            Client Success Stories
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-[var(--font-display)] text-3xl font-bold mb-6 text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-[var(--color-secondary)] mb-8">
              Let&apos;s discuss how we can help you achieve your business goals
              with our technology solutions and virtual assistance services.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-[var(--color-accent)] text-[var(--color-dark)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-tertiary)] transition-colors"
              >
                Schedule a Call
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
