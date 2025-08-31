import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, FileText, Globe } from "lucide-react";

export const BlogSection = () => {
  const blogs = [
    {
      title: "Support The Youth For Better",
      type: "Website",
      image:
        "https://wakeandshineshg.netlify.app/public/images/d91d694d52c96ee98c6134f861a1ac51.webp",
      excerpt:
        "The young generation carries the invaluable potential for building a brighter future for our society through innovative ideas and boundless energy waiting to be channelled positively...",
      category: "Youth Empowerment",
      readTime: "5 min read",
      link: "https://medium.com/@todd.karamian/5-ways-you-can-support-and-empower-youth-in-your-community-45dd4b59e623",
    },
    {
      title: "Believing in the Future",
      type: "Publication",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*-9lg3zfN69W8DUL9",
      excerpt:
        "The sun hadn’t quite broken over the horizon when nineteen year old Amara stepped out barefoot into the dew soaked field behind her home. The chill kissed her skin, but inside, something warmer stirred a question she couldn’t shake. Is there more to me than they see? In that fragile, electric moment, the answer wasn’t clear, but her curiosity was loud",
      category: "Personal Development",
      readTime: "7 min read",
      link: "https://medium.com/@youthempowerinitiatives/how-to-strengthen-the-10-pillars-of-youth-empowerment-with-a-growth-mindset-15d42ba7fa97",
    },
    {
      title: "Let's Grow Together",
      type: "Website",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*d4dqlgjkkirWsg23aEHhKA.jpeg",
      excerpt:
        "One of the pivotal moments in a small rural town’s history comes when it experiences significant growth. Towns like Tullahoma stand on the brink of exciting opportunities as they navigate this journey...",
      category: "Community Building",
      readTime: "4 min read",
      link: "https://medium.com/@danielberrytn/community-at-the-core-badd6ecdfc3c",
    },
  ];

  const getTypeIcon = (type: string) => {
    const IconComponent = type === "Website" ? Globe : FileText;
    return <IconComponent className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Youth Empowerment":
        return "bg-primary text-primary-foreground";
      case "Personal Development":
        return "bg-secondary text-secondary-foreground";
      case "Community Building":
        return "bg-tertiary text-tertiary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-playfair">
            ~ Blogs ~
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            Insights, stories, and knowledge sharing from our community
            development work and youth empowerment initiatives.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="group shadow-custom-md hover:shadow-custom-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={`${blog.title} - Wake and Shine blog post`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute top-4 left-4 font-poppins">
                  <Badge className={getCategoryColor(blog.category)}>
                    {blog.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-full font-poppins bg-white/20 backdrop-blur-sm text-white">
                    {getTypeIcon(blog.type)}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge
                    variant="outline"
                    className="bg-white/90 text-foreground font-poppins border-white/50"
                  >
                    {blog.type}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4 font-poppins">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-poppins font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  ~ {blog.title} ~
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground font-merriweather leading-relaxed mb-6 line-clamp-4">
                  {blog.excerpt}
                </p>
                <a href={blog.link} target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn w-full"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto shadow-custom-lg bg-gradient-card">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-playfair">
                  Stay Updated with Our Stories
                </h3>
                <p className="text-muted-foreground mb-6 font-poppins">
                  Subscribe to our newsletter to receive the latest updates on
                  our community development work, success stories, and upcoming
                  events.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <Button variant="cta" className="font-poppins" size="lg">
                  Subscribe
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-4 font-merriweather">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
