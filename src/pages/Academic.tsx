
import { PageLayout } from "@/components/PageLayout";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample academic data
const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    duration: "2022 - 2024",
    description: "Specialized in Artificial Intelligence and Machine Learning with a GPA of 3.9/4.0.",
    achievements: ["Dean's List", "Graduate Research Assistant"],
  },
  {
    id: 2,
    degree: "Bachelor of Science in Software Engineering",
    institution: "University Name",
    location: "City, Country",
    duration: "2018 - 2022",
    description: "Graduated with honors. Focused on software development and data structures.",
    achievements: ["Honor Roll", "Outstanding Student Award"],
  },
];

const certifications = [
  {
    id: 1,
    name: "Frontend Web Development",
    issuer: "Certificate Provider",
    date: "2023",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    name: "Data Science and Machine Learning",
    issuer: "Certificate Provider",
    date: "2022",
    skills: ["Python", "TensorFlow", "Data Analysis"],
  },
  {
    id: 3,
    name: "UI/UX Design Fundamentals",
    issuer: "Certificate Provider",
    date: "2021",
    skills: ["Figma", "User Research", "Design Systems"],
  },
];

const publications = [
  {
    id: 1,
    title: "Title of Research Paper",
    journal: "Journal Name",
    date: "2023",
    description: "This paper explores the implications of machine learning algorithms in healthcare.",
    link: "#",
  },
  {
    id: 2,
    title: "Another Research Publication",
    journal: "Conference Proceedings",
    date: "2022",
    description: "A study on optimizing neural networks for edge computing applications.",
    link: "#",
  },
];

const Academic = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">Academic Background</h1>
        <p className="text-lg text-muted-foreground mb-8">
          My educational journey, certifications, and research publications that
          have shaped my knowledge and expertise.
        </p>
        
        <section className="mb-12">
          <h2 className="section-title flex items-center">
            <GraduationCap className="mr-2" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution} - {edu.location}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {edu.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{edu.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="section-title flex items-center">
            <Award className="mr-2" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="border">
                <CardHeader>
                  <CardTitle>{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer} - {cert.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="section-title flex items-center">
            <BookOpen className="mr-2" />
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub) => (
              <Card key={pub.id} className="border">
                <CardHeader>
                  <CardTitle>{pub.title}</CardTitle>
                  <CardDescription>{pub.journal} - {pub.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{pub.description}</p>
                  <a 
                    href={pub.link} 
                    className="text-primary hover:underline mt-4 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Publication
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Academic;
