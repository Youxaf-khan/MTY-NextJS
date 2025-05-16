'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-[var(--color-primary)] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-[var(--color-accent)]">
              {inView && <CountUp end={17} duration={2.5} />}
            </div>
            <p className="text-lg">Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-[var(--color-accent)]">
              {inView && <CountUp end={22} duration={2.5} />}
            </div>
            <p className="text-lg">Projects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-[var(--color-accent)]">
              {inView && <CountUp end={646} duration={2.5} />}
            </div>
            <p className="text-lg">Hours Of Support</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-[var(--color-accent)]">
              {inView && <CountUp end={6} duration={2.5} />}
            </div>
            <p className="text-lg">Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
} 
