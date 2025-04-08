import { PageLayout } from "@/components/PageLayout";
import { Briefcase, Calendar, Star, ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Sample experience data
const workExperience = [
  {
    id: 1,
    title: "Intern Full Stack Developer",
    company: "CodeAlpha",
    location: "India",
    duration: "Mar 2025 - Apr 2025",
    oferletter:
      "https://drive.google.com/file/d/14B0OodeUm1uiyZpJ0Tm26Ed6roJist45/view?usp=sharing",
    description:
      "Worked as a full stack developer intern, focusing on MERN stack development.",
    responsibilities: [
      "Developed and maintained web applications using React, Node.js, and MongoDB",
      "Collaborated with the design team to implement user-friendly interfaces",
      "Participated in code reviews and contributed to team discussions",
      "Learned about Agile methodologies and version control using Git",
      "Worked on a project that involved building a RESTful API and integrating it with a frontend application",
    ],
  },
  {
    id: 2,
    title: "PCB Designer And Electronics",
    company: "BRACU Mongol-Tori",
    location: "Dhaka, Bangladesh",
    duration: "Feb 2024 - Present",
    description:
      "Internship focused on PCB design and electronics prototyping.",
    responsibilities: [
      "Designed and developed PCB layouts for various electronic projects",
      "Worked with a team to create prototypes and test electronic circuits",
      "Assisted in troubleshooting and debugging hardware issues",
      "Collaborated with engineers to ensure designs met specifications",
      "Gained hands-on experience with soldering and assembly of electronic components",
    ],
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "Startup Name",
    location: "City, Country",
    duration: "2020 - 2021",
    description:
      "Assisted in the development and maintenance of company websites and applications.",
    responsibilities: [
      "Developed interactive UI components using HTML, CSS, and JavaScript",
      "Fixed bugs and improved existing features",
      "Created technical documentation for internal use",
      "Collaborated with the design team to implement new website features",
    ],
  },
];

const skills = [
  { name: "React", level: 95 },
  { name: "Express", level: 90 },
  { name: "Node.js", level: 90 },
  { name: "MongoDB", level: 90 },
  { name: "Python", level: 90 },
  { name: "HTML/CSS", level: 99 },
  { name: "JavaScript", level: 85 },
  { name: "PHP", level: 90 },
  { name: "MySQL", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Git", level: 99 },
];

const Experience = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">Professional Experience</h1>
        <p className="text-lg text-muted-foreground mb-8">
          My professional journey, skills, and expertise gained through various
          roles and projects over the years.
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
                    <div className="flex items-center flex-wrap gap-3">
                      <Badge variant="outline" className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {job.duration}
                      </Badge>
                      {job.oferletter && (
                        <a
                          href={job.oferletter}
                          className="text-sm text-primary hover:underline flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Offer Letter <ArrowUpRight className="h-3 w-3 ml-1" />
                        </a>
                      )}
                    </div>
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
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://drive.google.com/file/d/1U-EEcmc1OSPSN-QGV0DMCqQwUdYSqdHl/view?usp=sharing"
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
