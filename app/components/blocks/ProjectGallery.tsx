import { ReactNode } from "react";
import Card from "../ui/Card";
import Section, { SectionHeader } from "../ui/Section";
import { classNames } from "../../lib/utils";
import fs from "fs";
import path from "path";
import ProjectCarousel from "./ProjectCarousel";

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  centered?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
  layout?: "grid" | "carousel";
  slidesToShow?: 3 | 4;
}

interface Project {
  id: string;
  title: string;
  image: string;
}

// Function to format the filename into a readable title
function formatTitle(filename: string): string {
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  
  // Replace underscores with spaces
  const nameWithSpaces = nameWithoutExt.replace(/_/g, " ");
  
  // Capitalize each word
  return nameWithSpaces
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// This function runs at build time to get the project images
export async function getProjectImages(): Promise<Project[]> {
  try {
    const projectsDir = path.join(process.cwd(), "public/images/Completed Projects");
    const files = fs.readdirSync(projectsDir);
    
    // Filter for image files
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    
    // Create project objects
    return imageFiles.map(file => ({
      id: file.replace(/\.[^/.]+$/, "").toLowerCase().replace(/ /g, "-"),
      title: formatTitle(file),
      image: `/images/Completed Projects/${file}`
    }));
  } catch (error) {
    console.error("Error reading project images:", error);
    return [];
  }
}

export default async function ProjectGallery({
  title = "Our Work",
  subtitle = "Gallery of our completed plumbing projects",
  background = "white",
  centered = true,
  columns = 3,
  className,
  layout = "grid",
  slidesToShow = 3,
}: ProjectGalleryProps) {
  // Get project images
  const projects = await getProjectImages();
  
  // Determine grid columns class
  const gridColumnsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];
  
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={centered}
      />
      
      {layout === "grid" ? (
        <div className={`grid grid-cols-1 ${gridColumnsClass} gap-6 md:gap-8`}>
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              image={project.image}
              imageAlt={`${project.title} - Plex Plumbing Melbourne`}
            />
          ))}
        </div>
      ) : (
        <ProjectCarousel projects={projects} slidesToShow={slidesToShow} />
      )}
    </Section>
  );
}
