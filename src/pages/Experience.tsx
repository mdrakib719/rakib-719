
import { PageLayout } from "@/components/PageLayout";
import { Briefcase, Calendar, Star, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Sample experience data
const workExperience = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Company Name",
    location: "City, Country",
    duration: "2023 - Present",
    description: "Leading a team of developers in building scalable web applications using modern technologies.",
    responsibilities: [
      "Architected and implemented new features for the company's flagship product",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with UX/UI designers to implement responsive designs",
      "Optimized application performance and improved load times by 40%"
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Previous Company",
    location: "City, Country",
    duration: "2021 - 2023",
    description: "Developed and maintained web applications for clients in various industries.",
    responsibilities: [
      "Built responsive user interfaces using React and Tailwind CSS",
      "Implemented state management solutions using Redux and Context API",
      "Wrote unit and integration tests using Jest and React Testing Library",
      "Participated in agile development processes and sprint planning"
    ],
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "Startup Name",
    location: "City, Country",
    duration: "2020 - 2021",
    description: "Assisted in the development and maintenance of company websites and applications.",
    responsibilities: [
      "Developed interactive UI components using HTML, CSS, and JavaScript",
      "Fixed bugs and improved existing features",
      "Created technical documentation for internal use",
      "Collaborated with the design team to implement new website features"
    ],
  },
];

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "HTML/CSS", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "GraphQL", level: 70 },
  { name: "UI/UX Design", level: 85 },
  { name: "Git", level: 90 },
];

const Experience = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">Professional Experience</h1>
        <p className="text-lg text-muted-foreground mb-8">
          My professional journey, skills, and expertise gained through various roles
          and projects over the years.
        </p>
        
        <section className="mb-12">
          <h2 className="section-title flex items-center">
            <Briefcase className="mr-2" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((job) => (
              <Card key={job.id} className="border">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>
                        {job.company} - {job.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {job.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="section-title flex items-center">
            <Star className="mr-2" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Resume <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Experience;
