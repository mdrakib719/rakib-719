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
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
        <div className="page-container">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Text */}
            <div className="max-w-2xl text-center md:text-left">
              <h1 className="text-8xl md:text-5xl font-bold mb-9 tracking-tight leading-tight">
                <span className="text-primary">
                  <span className="typing-text text-blue-500">
                    {" "}
                    Hi, I'm MD RAKIB HOSSAIN
                  </span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                MERN Stack Developer | Passionate about building web
                applications
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button asChild size="lg">
                  <Link to="/projects" aria-label="View My Work">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact" aria-label="Get in Touch">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <img
              src="src/pages/img/rakib.png"
              alt="Md Rakib Hossain"
              className="w-60 h-80 md:w-80 md:h-60 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="section-title text-center text-3xl mb-12">
            Explore My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Projects */}
            <Link to="/projects" className="group" aria-label="Projects">
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

            {/* Blog */}
            <Link to="/blog" className="group" aria-label="Blog">
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

            {/* Experience */}
            <Link to="/experience" className="group" aria-label="Experience">
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

            {/* Academic */}
            <Link to="/academic" className="group" aria-label="Academic">
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

      {/* About Section */}
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
              <Link to="/contact" aria-label="Contact Me">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
