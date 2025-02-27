"use client";

import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlaceIcon from "@mui/icons-material/Place"; // Location icon

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
      {/* Profile Image */}
      <div className="text-center mb-8">
        <div className="flex justify-center">
          <Image
            src="/bonnie.jpeg" // Change to actual image path
            alt="Bonnie Graphic Designer"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mt-4 text-accent">Meet the Designer</h1>
        <p className="text-lg text-gray-400">
          Nairobi-based graphic designer with a passion for creativity and branding.
        </p>

        {/* Location Section */}
        <div className="mt-2 flex justify-center items-center text-gray-400">
          <PlaceIcon fontSize="small" className="text-accent" />
          <span className="ml-1">Nairobi, Kenya</span>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-accent">About Bonnie</h2>
        <p className="text-gray-400">
          Bonnie is a professional graphic designer based in Nairobi, Kenya, specializing in branding, digital illustration, and print design. With years of experience, Bonnie crafts visually compelling designs that bring ideas to life.
        </p>
      </section>

      {/* Expertise Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-accent">Expertise & Services</h2>
        <ul className="list-disc pl-6 text-gray-400">
          <li>Branding & Logo Design</li>
          <li>Digital & Print Media</li>
          <li>Illustrations & Artworks</li>
          <li>Social Media Graphics</li>
          <li>Website & UI Design</li>
        </ul>
      </section>

      {/* WhatsApp Contact */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-2 text-accent">Let’s Work Together</h2>
        <p className="text-gray-400 mb-4">
          Ready to bring your vision to life? Let’s collaborate on your next project.
        </p>
        <a 
          href="https://wa.me/254758834321" // Replace with actual WhatsApp number
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
        >
          <WhatsAppIcon fontSize="medium" />
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
