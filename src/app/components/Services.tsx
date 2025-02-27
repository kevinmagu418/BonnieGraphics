"use client";

import { Brush, BrandingWatermark, Devices, DesignServices, Print, Storefront, ColorLens, ContactMail } from "@mui/icons-material";

const services = [
  {
    title: "Logo Design",
    description: "Unique, memorable, and professional logos that define your brand identity.",
    icon: <Brush fontSize="large" />,
  },
  {
    title: "Branding & Identity",
    description: "Complete branding solutions including colors, typography, and brand guidelines.",
    icon: <BrandingWatermark fontSize="large" />,
  },
  {
    title: "UI/UX Design",
    description: "User-friendly website and mobile app interfaces for an enhanced experience.",
    icon: <Devices fontSize="large" />,
  },
  {
    title: "Social Media Graphics",
    description: "Custom-designed posts, covers, and templates to boost your online presence.",
    icon: <DesignServices fontSize="large" />,
  },
  {
    title: "Print Design",
    description: "High-quality business cards, flyers, brochures, banners, and magazine layouts.",
    icon: <Print fontSize="large" />,
  },
  {
    title: "Merchandise & Packaging",
    description: "Custom T-shirts, mugs, product packaging, and promotional merchandise.",
    icon: <Storefront fontSize="large" />,
  },
  {
    title: "Illustration & Artwork",
    description: "Hand-drawn and digital illustrations for books, marketing, and editorial use.",
    icon: <ColorLens fontSize="large" />,
  },
  {
    title: "Custom Requests",
    description: "Need something unique? Get in touch for custom design solutions.",
    icon: <ContactMail fontSize="large" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-primary text-text">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-accent mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 bg-background p-6 rounded-lg shadow-md">
              <div className="text-accent">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
