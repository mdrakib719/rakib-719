import { PageLayout } from "@/components/PageLayout";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample academic data
const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    duration: "February 2021 - Present",
    description: "Specialized in MERN and Blockchain.",
    achievements: [
      "Completed multiple projects in Web Software, Blockchain, Ai technologies, Robotics.",
      "Participated in various hackathons and coding competitions.",
      "Member of the university's robotics club and participated in various events.",
    ],
  },
  {
    id: 2,
    degree: "HSC in Science",
    institution: "Afaz Uddin School and College",
    location: "Dhaka, Bangladesh",
    duration: "2018 - 2020",
    achievements: ["Graduated"],
  },
  {
    id: 3,
    degree: "SSC in Science",
    institution: "Kushura Abbas Ali High School",
    location: "Dhaka, Bangladesh",
    duration: "2013 - 2018",
    achievements: ["Graduated", "Science Olympiad Participant"],
  },
];

const certifications = [
  {
    id: 1,
    name: "Web Development",
    issuer: "Coursera",
    date: "April 2, 2025",
    Certificate:
      "https://www.coursera.org/account/accomplishments/verify/38J2CJWV78BS",
    skills: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Python Certificate",
    issuer: "HACKERRANK",
    date: "27 JULY, 2024",
    Certificate: "https://www.hackerrank.com/certificates/84193ee97be8",
    skills: ["Python", "Data Structures", "Algorithms"],
  },
  {
    id: 3,
    name: "Office Application",
    issuer: "NEXT IT & COMPUTER TRAINING CENTER",
    date: "JUNE 2018",
    Certificate:
      "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//computer%20_2.jpg",
    skills: ["MS Word", "MS Excel", "MS PowerPoint"],
  },
  {
    //GitHub Copilot
    // GitHub Copilot
    // SimplilearnSimplilearn
    // Issued Apr 2025Issued Apr 2025
    // Credential ID 8191167Credential ID 8191167
    id: 4,
    name: "GitHub Copilot",
    issuer: "Simplilearn",
    date: "April 2025",
    Certificate:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODc2IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODE5MTE2N184NTUyOTYyMTc0NDY2NDU5OTM0OC5wbmciLCJ1c2VybmFtZSI6Ik1kIFJha2liIEhvc3NhaW4ifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7867%2FGitHub-Copilot-Fundamentals%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1388493965809893243&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz%2FdxyU9ODs%2BtCk6yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAIB5BaxBAAAA",
    skills: ["GitHub", "GitHub Copilot", "AI Tools"],
  },
  //   MERN Stack
  // MERN Stack
  // SimplilearnSimplilearn
  // Issued Apr 2025Issued Apr 2025
  // Credential ID 8191074Credential ID 8191074MERN Stack
  {
    id: 4,
    name: "MERN Stack",
    issuer: "Simplilearn",
    date: "April 2025",
    Certificate:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODE5MTA3NF84NTUyOTYyMTc0NDY2MTgyNzM5OS5wbmciLCJ1c2VybmFtZSI6Ik1kIFJha2liIEhvc3NhaW4ifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6129%2FIntroduction-to-MERN-Stack%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1388493965809893243&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVtwzKy3LNN8ipCk6yrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAOUhJS1BAAAA",
    skills: ["MERN", "MongoDB", "Express", "React", "Node.js"],
  },
];
const Awards = [
  {
    id: 1,
    name: " The Duke of Edinburgh's Award",
    issuer: "Duke of Edinburgh",
    date: "January 2023",
    Certificate:
      "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//1745071454686.jpg",
    skills: ["Leadership", "Teamwork", "Community Service"],
  },
  {
    id: 2,
    name: "IGNITION",
    issuer: "Khulna University of Engineering & Technology",
    date: "October 2023",
    Certificate:
      "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Ignation.png",
    skills: ["Robotics", "project showcase"],
  },
  {
    id: 3,
    name: "TECH SPECTRA 2.O",
    issuer: "BRAC University Robotics Club",
    date: "February 2024 ",
    Certificate:
      "https://www.facebook.com/MONON.BRACU/posts/techspectra-20-ignite-the-campus-cosmos-organized-by-the-robotics-club-of-brac-u/800169132149121/",
    skills: ["Robotics", "Soccerbot"],
  },
];
const publications = [];

const Academic = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">Academic Background</h1>
        <p className="text-lg text-muted-foreground mb-8">
          My educational journey, certifications, and research publications that
          have shaped my knowledge and expertise.
        </p>
        {/* Education Section */}
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
                      <CardDescription>
                        {edu.institution} - {edu.location}
                      </CardDescription>
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
        {/* Certifications Section */}
        <section className="mb-12">
          <h2 className="section-title flex items-center">
            <Award className="mr-2" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{cert.name}</CardTitle>
                      <CardDescription>
                        {cert.issuer} - {cert.date}
                      </CardDescription>
                    </div>
                    {cert.Certificate && (
                      <a
                        href={cert.Certificate}
                        className="text-sm text-primary hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate{" "}
                        <ArrowUpRight className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
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

        <section className="mb-12">
          <h2 className="section-title flex items-center">
            <Award className="mr-2" />
            Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Awards.map((award) => (
              <Card key={award.id} className="border">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{award.name}</CardTitle>
                      <CardDescription>
                        {award.issuer} - {award.date}
                      </CardDescription>
                    </div>
                    {award.Certificate && (
                      <a
                        href={award.Certificate}
                        className="text-sm text-primary hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate{" "}
                        <ArrowUpRight className="h-3 w-3 ml-1" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {award.skills.map((skill) => (
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
        {/* Publications Section */}
        <section>
          <h2 className="section-title flex items-center">
            <BookOpen className="mr-2" />
            Publications
          </h2>
          <div className="space-y-6">
            {publications.length === 0 ? (
              <p className="text-muted-foreground">No publications yet.</p>
            ) : (
              publications.map((pub) => (
                <Card key={pub.id} className="border">
                  <CardHeader>
                    <CardTitle>{pub.title}</CardTitle>
                    <CardDescription>
                      {pub.journal} - {pub.date}
                    </CardDescription>
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
              ))
            )}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Academic;
