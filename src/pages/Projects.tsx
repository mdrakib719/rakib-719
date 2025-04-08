
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-stack application for managing tasks and projects.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A weather forecast application using a third-party API.",
    tags: ["JavaScript", "API Integration", "CSS"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "An online shopping platform with product listings and cart functionality.",
    tags: ["React", "Redux", "Firebase"],
    image: "https://images.unsplash.com/photo-1556742208-999815fca738",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">My Projects</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Here are some of the projects I've worked on. Each project reflects my skills,
          interests, and the problems I enjoy solving.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link 
                  to={project.github} 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </Link>
                <Link 
                  to={project.demo} 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
