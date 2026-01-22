"use client"

import { useState } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "painting", name: "Painting" },
    { id: "flooring", name: "Flooring" },
    { id: "decks", name: "Decks" },
    { id: "exterior", name: "Exterior" },
  ];

  const projects = [
    {
      id: 1,
      category: "painting",
      title: "Interior Living Room Painting",
      description: "Complete interior transformation with modern color palette",
      image: "https://images.unsplash.com/photo-1643804475756-ca849847c78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBhaW50aW5nJTIwd2FsbHN8ZW58MXx8fHwxNzY1NDUyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      category: "flooring",
      title: "Hardwood Floor Refinishing",
      description: "Restored original hardwood floors to beautiful finish",
      image: "https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd29vZCUyMGZsb29yJTIwcmVmaW5pc2hpbmd8ZW58MXx8fHwxNzY1NDUyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      category: "decks",
      title: "Custom Deck Installation",
      description: "Built expansive outdoor entertaining space",
      image: "https://images.unsplash.com/photo-1740579041945-0425f80cf143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY1NDUyNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      category: "exterior",
      title: "Exterior Siding Installation",
      description: "Complete home exterior transformation",
      image: "https://images.unsplash.com/photo-1759073621774-96642ef6bb3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHNpZGluZyUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjU0NTI2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      category: "painting",
      title: "Exterior House Painting",
      description: "Fresh exterior paint with weather protection",
      image: "https://images.unsplash.com/photo-1722876720000-f39b65b7d4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMGNvbnRyYWN0b3J8ZW58MXx8fHwxNzY1MzQ0OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      category: "flooring",
      title: "Modern Floor Installation",
      description: "Contemporary flooring throughout main living areas",
      image: "https://images.unsplash.com/photo-1557308970-df80a9ccee84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NDM0NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 7,
      category: "decks",
      title: "Deck Restoration",
      description: "Complete deck refinishing and repair",
      image: "https://images.unsplash.com/photo-1740579041945-0425f80cf143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkZWNrJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY1NDUyNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 8,
      category: "painting",
      title: "Interior Room Makeover",
      description: "Multi-room painting project with custom colors",
      image: "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW1wcm92ZW1lbnQlMjB0b29sc3xlbnwxfHx8fDE3NjU0MDU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-linear-to-br from-primary-800 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Our Work</h1>
          <p className="text-xl text-white/90">
            See the quality and craftsmanship we bring to every project
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white border-b border-neutral-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category.id
                    ? "bg-accent-600 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition aspect-4/3">
                  {/* <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  /> */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                    <div className="p-6 text-white w-full">
                      <h4 className="text-white mb-1">{project.title}</h4>
                      <p className="text-sm text-neutral-200">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-400 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* <ImageWithFallback
              src={filteredProjects[selectedImage].image}
              alt={filteredProjects[selectedImage].title}
              className="w-full h-auto rounded-lg"
            /> */}
            <div className="text-white text-center mt-6">
              <h3 className="text-white mb-2">{filteredProjects[selectedImage].title}</h3>
              <p className="text-neutral-300">{filteredProjects[selectedImage].description}</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredProjects.length - 1);
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition"
            >
              Previous
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage < filteredProjects.length - 1 ? selectedImage + 1 : 0);
              }}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}