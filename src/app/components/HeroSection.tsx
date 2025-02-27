"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-primary text-text min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      {/* Hero Content */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-accent">
          Crafting Stunning Visuals with Precision & Passion
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Elevating brands through exceptional graphic design. With years of experience in Kenya’s creative industry, I bring ideas to life through Logo design, branding, and digital graphics.
        </p>

        {/* Call to Action */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/portfolio">
            <button className="bg-accent text-primary px-6 py-3 rounded-md font-semibold text-lg hover:opacity-80 transition w-full sm:w-auto">
              View My Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="border border-accent text-accent px-6 py-3 rounded-md font-semibold text-lg hover:bg-accent hover:text-primary transition w-full sm:w-auto">
              Let’s Collaborate
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
