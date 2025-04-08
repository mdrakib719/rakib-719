
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new project with React and TypeScript for type-safe development.",
    date: "April 1, 2025",
    readTime: "5 min read",
    author: "Your Name",
    categories: ["React", "TypeScript"],
    slug: "getting-started-with-react-typescript",
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can speed up your development process and create beautiful UIs.",
    date: "March 25, 2025",
    readTime: "8 min read",
    author: "Your Name",
    categories: ["CSS", "Web Design"],
    slug: "power-of-tailwind-css",
  },
  {
    id: 3,
    title: "Reflections on My Learning Journey",
    excerpt: "Personal reflections on my path as a developer and lessons learned along the way.",
    date: "March 15, 2025",
    readTime: "10 min read",
    author: "Your Name",
    categories: ["Personal", "Career"],
    slug: "reflections-learning-journey",
  },
  {
    id: 4,
    title: "Optimizing React Applications for Performance",
    excerpt: "Tips and tricks to improve the performance of your React applications.",
    date: "March 5, 2025",
    readTime: "7 min read",
    author: "Your Name",
    categories: ["React", "Performance"],
    slug: "optimizing-react-applications",
  },
];

const Blog = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">My Blog</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome to my blog! Here, I share my thoughts, experiences, and
          knowledge on various topics related to web development and more.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="no-underline">
              <Card className="h-full hover:shadow-md transition-shadow border">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.categories.map((category) => (
                        <Badge key={category} variant="outline">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
