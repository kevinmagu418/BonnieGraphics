"use client";
import { useState } from "react";
import Image from "next/image";
const featuredImages=[

    { id: 1, src: "/project1.jpg", alt: "Project 1" },
    { id: 2, src: "/project2.jpg", alt: "Project 2" },
    { id: 3, src: "/project4.jpg", alt: "Project 4" },
    { id: 4, src: "/project5.jpg", alt: "Project 5" },
    { id: 5, src: "/jubilee.jpg", alt: "Jubilee Project" },
    { id: 6, src: "/man1.jpg", alt: "Man 1" },
    { id: 7, src: "/absa.jpg", alt: "Absa Project" },
    { id: 8, src: "/mugs.jpg", alt: "Mugs Design" },
    { id: 9, src: "/Usaid.jpg", alt: "USAID Project" },
    {id:10,src:"/plates.jpg",alt:"plates project"},
    {id:11,src:"/water.jpg",alt:"water"},
    {id:12,src:"/pen.jpg",alt:"pens"}
  ];


 export default function PortfolioGrid() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
    return (
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-text">Featured Portfolio</h2>
  
        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredImages.map((image) => (
            <div key={image.id} className="relative cursor-pointer" onClick={() => setSelectedImage(image.src)}>
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform"
                priority={image.id <= 3} // Prioritize loading first 3 images
              />
            </div>
          ))}
        </div>
  
        {/* Modal for Enlarged Image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
            <div className="relative max-w-3xl w-full">
              <button
                className="absolute top-2 right-2 bg-accent text-primary p-2 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Enlarged View"
                width={800}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
    );
  }



