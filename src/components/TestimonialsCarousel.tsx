'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    quote: "MoveToYourGoals transformed our business with their custom web application. Their virtual assistance team is incredibly efficient and professional.",
    author: "Sarah Johnson",
    role: "Tech Startup Founder"
  },
  {
    quote: "The combination of technical expertise and virtual support has been invaluable. They're not just developers – they're true partners in our growth.",
    author: "Michael Chen",
    role: "E-commerce Entrepreneur"
  },
  {
    quote: "Working with MoveToYourGoals has been a game-changer for our business. Their virtual assistants handle our operations seamlessly.",
    author: "Emily Rodriguez",
    role: "Business Owner"
  },
  {
    quote: "The team's expertise in both development and virtual assistance has helped us scale our operations efficiently.",
    author: "David Kim",
    role: "Startup CEO"
  }
];

export default function TestimonialsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="testimonials-carousel">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-[var(--color-secondary)]/10 p-6 rounded-lg shadow-md border border-[var(--color-secondary)]/20 h-full">
              <p className="text-[var(--color-dark)] mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="font-semibold text-[var(--color-primary)]">
                {testimonial.author}
              </div>
              <div className="text-[var(--color-tertiary)] text-sm">
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
} 
