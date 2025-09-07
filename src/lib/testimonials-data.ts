// testimonials-data.ts
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "This software is an absolute game-changer. It has revolutionized our team's workflow, leading to a 40% increase in efficiency. I can't imagine running our operations without it now.",
    name: "Sarah Jenkins",
    title: "CEO, Stratos Solutions",
  },
  {
    quote: "As a product manager, I'm always looking for tools that offer deep insights and a seamless user experience. This platform exceeds all expectations. The analytics dashboard is incredibly powerful and easy to use.",
    name: "Michael Lee",
    title: "Product Manager, Innovate Inc.",
  },
  {
    quote: "The security and scalability are top-notch. Our engineering team was able to integrate this with our existing infrastructure in a matter of hours, and we've been impressed by its reliability and performance.",
    name: "Alex Chen",
    title: "CTO, Quantum Technologies",
  },
  {
    quote: "Probox's cloud services streamlined our entire operation. The migration was seamless, and the ongoing support has been exceptional. Our uptime has never been better.",
    name: "Johnathan Doe",
    title: "CEO, Startup Hub",
  },
  {
    quote: "The cybersecurity solutions from Probox are second to none. They identified vulnerabilities we didn't even know we had and provided robust protection. We feel much safer now.",
    name: "Jane Smith",
    title: "IT Director, Global Corp",
  },
];
