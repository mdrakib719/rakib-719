import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_w1370nb", // Replace this
        "template_wbf8mfb", // Replace this
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "W3Ri3WO6wkzixinZE" // Replace this
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "I'll get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">Contact Me</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question or want to work together? Reach out using the form
          below or through my contact information.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Alternative ways to get in touch with me.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:mdrakibislam719@gmail.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      mdrakibislam719@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      href="tel:+8801786925629"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +8801786925629
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/rakib-the-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                      alt="LinkedIn"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                    />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/mdrakib719"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                    />
                  </a>

                  {/* Twitter */}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                      alt="Twitter"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
