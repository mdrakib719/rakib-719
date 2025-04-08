import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  FileText,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageLayout>
      <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
        <div className="page-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="text-primary">Md Rakib Hossain</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A passionate developer, researcher, and lifelong learner sharing
              my journey and reflections through this portfolio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="page-container">
          <h2 className="section-title text-center text-3xl mb-12">
            Explore My Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/projects" className="group">
              <div className="bg-card hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg p-6 text-center shadow-sm border">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Projects</h3>
                <p className="text-muted-foreground group-hover:text-accent-foreground">
                  Discover the projects I've been working on
                </p>
              </div>
            </Link>

            <Link to="/blog" className="group">
              <div className="bg-card hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg p-6 text-center shadow-sm border">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Blog</h3>
                <p className="text-muted-foreground group-hover:text-accent-foreground">
                  Read my thoughts and reflections on various topics
                </p>
              </div>
            </Link>

            <Link to="/experience" className="group">
              <div className="bg-card hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg p-6 text-center shadow-sm border">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Experience</h3>
                <p className="text-muted-foreground group-hover:text-accent-foreground">
                  Learn about my professional journey and skills
                </p>
              </div>
            </Link>

            <Link to="/academic" className="group">
              <div className="bg-card hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg p-6 text-center shadow-sm border">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Academic</h3>
                <p className="text-muted-foreground group-hover:text-accent-foreground">
                  Explore my educational background and achievements
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="page-container">
          <h2 className="section-title text-center text-3xl mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              I'm a passionate individual dedicated to growth and learning. With
              a background in technology and design, I strive to create
              meaningful experiences and solve complex problems through my work.
            </p>
            <p className="text-lg mb-6">
              This portfolio serves as a reflection of my journey, showcasing
              not just what I've accomplished, but also the lessons I've learned
              along the way.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
