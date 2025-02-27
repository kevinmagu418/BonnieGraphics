"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const featuredImages = [
  { id: 1, src: "/project1.jpg", alt: "Project 1" },
  { id: 2, src: "/project2.jpg", alt: "Project 2" },
  { id: 3, src: "/project4.jpg", alt: "Project 4" },
  { id: 4, src: "/project5.jpg", alt: "Project 5" },
  { id: 5, src: "/jubilee.jpg", alt: "Jubilee Project" },
  { id: 6, src: "/man1.jpg", alt: "Man 1" },
  { id: 7, src: "/absa.jpg", alt: "Absa Project" },
  { id: 8, src: "/mugs.jpg", alt: "Mugs Design" },
  { id: 9, src: "/Usaid.jpg", alt: "USAID Project" },
  { id: 10, src: "/plates.jpg", alt: "Plates Project" },
  { id: 11, src: "/water.jpg", alt: "Water Project" },
  { id: 12, src: "/pen.jpg", alt: "Pen Design" },
  {id:13,src:"/new10.jpeg",alt:"image"},
  {id:14,src:"/new1.jpeg",alt:"image"},
  {id:15,src:"/new4.jpeg",alt:"image"},
  {id:16,src:"/new6.jpeg",alt:"image"},
  {id:17,src:"/new3.jpeg",alt:"image"},
  {id:18,src:"/new7.jpeg",alt:"image"},
  {id:19,src:"/new2.jpeg",alt:"image"},
  {id:20,src:"/bottle.jpeg",alt:"image"},
  {id:21,src:"/further.jpeg",alt:"image"},
  {id:22,src:"/further2.jpeg",alt:"image"},
  {id:23,src:"/further3.jpeg",alt:"image"},
  {id:24,src:"/further4.jpeg",alt:"image"},


];

export default function PortfolioGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = useCallback(() => setSelectedImage(null), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-text">Featured Portfolio</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredImages.map((image, index) => (
          <div key={image.id} className="relative cursor-pointer" onClick={() => setSelectedImage(image.src)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              priority={index < 3} // Only prioritize the first 3 images
              loading={index >= 3 ? "lazy" : undefined} // Lazy load the rest
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 bg-accent text-primary p-2 rounded-full hover:opacity-80"
              onClick={closeModal}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged View"
              width={1000}
              height={700}
              sizes="90vw"
              className="w-full h-auto object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
