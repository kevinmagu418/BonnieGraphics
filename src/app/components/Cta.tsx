"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[#0D3B1F] text-[#F5F5F5] py-16 text-center">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let&apos;s Create Something Amazing
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-6">
          Whether you need a logo, branding, or digital designs, I&apos;m here to bring your vision to life.  
          Let&apos;s collaborate and craft stunning visuals that make an impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-lg font-medium rounded-md transition duration-300 whitespace-nowrap"
            style={{ backgroundColor: "#FFD700", color: "#0D3B1F" }} // Gold button
          >
            Get in Touch
          </Link>
          <Link
            href="/portfolio"
            className="inline-block px-6 py-3 text-lg font-medium border border-[#B8C4A7] rounded-md transition duration-300 whitespace-nowrap hover:bg-[#08130a] hover:text-[#0D3B1F]"
            style={{ color: "#B8C4A7" }} // Muted Sage
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
