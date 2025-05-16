export default function About() {
  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      {/* Our Story Section */}
      <section className="py-20 bg-[var(--color-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[var(--font-display)] text-3xl font-bold mb-8 text-[var(--color-primary)] text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-[var(--color-dark)]">
              <p className="mb-6">
                MoveToYourGoals was founded with a simple yet powerful vision: to help businesses achieve their goals through a perfect blend of technology and human expertise. We understand that in today&apos;s fast-paced digital world, businesses need both cutting-edge technology solutions and reliable support to thrive.
              </p>
              <p className="mb-6">
                Our journey began when we recognized a gap in the market for comprehensive business solutions that combine professional virtual assistance with modern web development. We saw that many businesses were struggling to find a single partner who could handle both their technical and operational needs.
              </p>
              <p>
                Today, we&apos;re proud to be that partner for businesses worldwide, offering seamless integration of virtual assistance services and custom software development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-[var(--color-accent)]">
        <div className="container mx-auto px-4">
          <h2 className="font-[var(--font-display)] text-3xl font-bold mb-4 text-[var(--color-primary)] text-center">
            Our Values
          </h2>
          <p className="text-lg text-center text-[var(--color-dark)] mb-12 max-w-2xl mx-auto opacity-80">
            Our values guide every partnership, project, and interaction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Innovation",
                description: (
                  <>
                    We constantly explore <span className="text-[var(--color-primary)] font-semibold">new technologies</span> and methodologies to deliver the best solutions for our clients.
                  </>
                ),
                icon: (
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[var(--color-primary)]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m8-8h2M2 12H4m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l1.41 1.41M6.34 6.34L4.93 4.93M12 6a6 6 0 100 12 6 6 0 000-12z" /></svg>
                )
              },
              {
                title: "Excellence",
                description: (
                  <>
                    We maintain the <span className="text-[var(--color-primary)] font-semibold">highest standards</span> in everything we do, from code quality to customer service.
                  </>
                ),
                icon: (
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[var(--color-primary)]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.75l-6.16 3.24 1.18-6.88-5-4.87 6.91-1L12 2l3.07 6.24 6.91 1-5 4.87 1.18 6.88z" /></svg>
                )
              },
              {
                title: "Partnership",
                description: (
                  <>
                    We believe in building <span className="text-[var(--color-primary)] font-semibold">long-term relationships</span> with our clients, working together to achieve their goals.
                  </>
                ),
                icon: (
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[var(--color-primary)]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm-16 0a2 2 0 114 0 2 2 0 01-4 0z" /></svg>
                )
              },
              {
                title: "Integrity",
                description: (
                  <>
                    We act with <span className="text-[var(--color-primary)] font-semibold">honesty</span> and transparency, always putting our clients&apos; interests first.
                  </>
                ),
                icon: (
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[var(--color-primary)]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm0 0V7m0 4v4m0 0c-4.418 0-8-1.79-8-4V7a2 2 0 012-2h12a2 2 0 012 2v4c0 2.21-3.582 4-8 4z" /></svg>
                )
              },
              {
                title: "Empathy",
                description: (
                  <>
                    We listen and respond with <span className="text-[var(--color-primary)] font-semibold">care</span>, understanding the unique needs of every client and team member.
                  </>
                ),
                icon: (
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[var(--color-primary)]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                )
              },
              {
                title: "Growth",
                description: (
                  <>
                    We are committed to <span className="text-[var(--color-primary)] font-semibold">continuous learning</span> and improvement, for ourselves and our clients.
                  </>
                ),
                icon: (
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[var(--color-primary)]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5v14m-7 7h18" /></svg>
                )
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[var(--color-primary)] flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl animate-fadeInUp"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)]/10">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary)] text-center">{value.title}</h3>
                <p className="text-[var(--color-dark)] text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[var(--color-light)]">
        <div className="container mx-auto px-4">
          <h2 className="font-[var(--font-display)] text-3xl font-bold mb-12 text-[var(--color-primary)] text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Taiba Malik",
                role: "Founder",
                bio: "I'm Taiba Malik, founder of Move to YourGoals (MTY), where we help businesses grow with ease. After completing 120+ projects for 25+ clients, I'm now building a team to provide even more reliable support. With MTY, you'll always have a helping hand to move toward your goals!",
                image: "/team/taiba-malik.jpg"
              },
              {
                name: "Yousaf Khan",
                role: "Co-Founder, Ruby on Rails Developer",
                bio: "I'm Yousaf Khan, Co-Founder of Move to YourGoals (MTY). With over 4+ years of experience as a Ruby on Rails developer, I specialize in building scalable, secure, and high-performance applications. My focus is on delivering seamless user experiences that help businesses thrive and move toward their goals with confidence.",
                image: "/team/yousaf.jpg"
              },
              {
                name: "Haider",
                role: "Social Media Manager",
                bio: "I'm Haider, a Social Media Manager with 2+ years of experience. I craft strategies that engage audiences and drive results, helping businesses grow their online presence and achieve their goals.",
                image: "/team/haider.jpg"
              },
              {
                name: "Ashar",
                role: "Software Engineer",
                bio: "I'm Ashar, a Software Engineer with a solid foundation in website backends. I enjoy taking on challenges and solving them by delivering high-quality, scalable, and clean code that drives user engagement and supports business growth. My goal is to provide innovative and reliable solutions that help businesses achieve success.",
                image: "/team/ashar.jpg"
              },
              {
                name: "Somana",
                role: "Social Media Manager",
                bio: "I'm Somana, a Social Media Manager with a knack for creating engaging and impactful content. I help businesses build their online presence, connect with their audience, and drive growth through strategic social media management. My goal is to make your brand shine and reach its full potential in the digital world.",
                image: "/team/somana.jpg"
              },
              {
                name: "Taiba Ali",
                role: "Virtual Assistant",
                bio: "I'm Taiba Ali, a dedicated Virtual Assistant with a passion for helping businesses streamline their operations. With a keen eye for detail and strong organizational skills, I provide reliable support that allows entrepreneurs to focus on what truly matters—growing their business and achieving their goals.",
                image: "/team/taiba-ali.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="flip-card h-80">
                <div className="flip-card-inner w-full h-full">
                  {/* Front Side */}
                  <div className="flip-card-front bg-[var(--color-secondary)]/10 p-6 rounded-lg flex flex-col items-center justify-center h-full">
                    <div className="aspect-square bg-[var(--color-primary)]/10 rounded-lg mb-4 w-24 h-24 flex items-center justify-center overflow-hidden">
                      {/* Optionally use <img src={member.image} ... /> here */}
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-[var(--color-primary)]">{member.name}</h3>
                    <p className="text-[var(--color-accent)] mb-3">{member.role}</p>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-[var(--color-accent)] p-6 rounded-lg flex flex-col items-center justify-center h-full">
                    <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">{member.name}</h3>
                    <p className="text-[var(--color-dark)] text-center">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-[var(--font-display)] text-3xl font-bold mb-6 text-white">
              Join Our Journey
            </h2>
            <p className="text-[var(--color-secondary)] mb-8">
              Let&apos;s work together to achieve your business goals with our comprehensive solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[var(--color-accent)] text-[var(--color-dark)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-tertiary)] transition-colors">
                Get in Touch
              </button>
              <button className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-dark)] transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
