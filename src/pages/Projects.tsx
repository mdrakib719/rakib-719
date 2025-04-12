import { PageLayout } from "@/components/PageLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS", "supabase"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github:
      "https://github.com/mdrakib719/shining-self-portfolio-showcase/tree/main",
    demo: "#",
  },
  {
    id: 2,
    title: "Secondary Car Marketplace and Service Platform",
    description:
      "A full-stack MERN application This project offers a unified platform to buy, sell, rent, and maintain used cars. The primary objective is to create a transparent, efficient, and user-friendly service ecosystem that caters to all car-related needs.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    image:
      "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-12%20at%2012.10.40%20PM.png",
    github: "https://github.com/ovijitM/cse470_SCM",
    demo: "https://car719.netlify.app/",
  },
  {
    id: 3,
    title: "Echo Bank Database Management System",
    description:
      "A comprehensive database management system for Echo Bank, managing customer accounts, transactions, loans, donations, and complaints",

    tags: ["macOS", "XAMPP", "PHP", "MySQL"],
    image:
      "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-12%20at%2012.33.30%20PM.png",
    github: "https://github.com/ovijitM/Banking-system-with_php_sql",
    demo: "#",
  },
  {
    id: 4,
    title: "ML-Based Heart Disease Classifier",
    description:
      "This project aims to detect heart disease using machine learning techniques. It involves data preprocessing, exploratory analysis, model training, and evaluation to predict the presence of heart disease based on patient health metrics.",
    tags: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "seaborn",
      "logistic regression",
      "decision tree",
      "random forest",
      "KNN",
      "SVM",
      "Supervised Learning",
    ],
    image:
      "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-12%20at%2012.31.53%20PM.png",
    github: "https://github.com/mdrakib719/Heart-Disease-Detection-",
    demo: "https://colab.research.google.com/drive/1F0OTYeaS9VhOhJxq8R60H-wTKd_zkERT?usp=sharing",
  },
  {
    id: 5,
    title: "Desings",
    description: "Image Gallery",
    tags: ["HTML", "CSS", "JavaScript"],
    image:
      "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//img_7.jpg",
    github: "https://github.com/mdrakib719/project_for_fun/",
    demo: "https://rakibfun.netlify.app/",
  },
];

const Projects = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">My Projects</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Here are some of the projects I've worked on. Each project reflects my
          skills, interests, and the problems I enjoy solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
            >
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
