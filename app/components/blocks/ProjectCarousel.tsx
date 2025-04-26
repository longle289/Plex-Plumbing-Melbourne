"use client";

import { useRef, useState, useEffect } from "react";
import Card from "../ui/Card";

interface Project {
  id: string;
  title: string;
  image: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  slidesToShow?: 3 | 4;
}

export default function ProjectCarousel({
  projects,
  slidesToShow = 3,
}: ProjectCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // Calculate the maximum index based on the number of projects and slides to show
  useEffect(() => {
    setMaxIndex(Math.max(0, projects.length - slidesToShow));
  }, [projects.length, slidesToShow]);

  // Function to scroll to a specific index
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
    
    const slideWidth = carouselRef.current.offsetWidth / slidesToShow;
    const scrollPosition = newIndex * slideWidth;
    
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  // Navigation functions
  const goToPrevious = () => scrollToIndex(currentIndex - 1);
  const goToNext = () => scrollToIndex(currentIndex + 1);

  // Determine slide width class based on slidesToShow
  const slideWidthClass = slidesToShow === 3 
    ? "w-full md:w-1/2 lg:w-1/3" 
    : "w-full md:w-1/2 lg:w-1/4";

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="flex flex-nowrap overflow-x-auto scrollbar-hide pb-6 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex-none ${slideWidthClass} px-4`}
          >
            <Card
              title={project.title}
              image={project.image}
              imageAlt={`${project.title} - Plex Plumbing Melbourne`}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md z-10 -ml-2"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}
      
      {currentIndex < maxIndex && (
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md z-10 -mr-2"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}
