import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, FileText, Globe } from "lucide-react";

export const BlogSection = () => {
  const blogs = [
    {
      title: "Support The Youth For Better",
      type: "Website",
      image: "https://wakeandshineshg.netlify.app/public/images/d91d694d52c96ee98c6134f861a1ac51.webp",
      excerpt: "Young people can bring a unique perspective, energy, and enthusiasm to partnerships for the Sustainable Development Goals. Our ability to think creatively and outside the box, as well as our proficiency in using technology and social media, can contribute to new and innovative solutions to achieve the SDGs.",
      category: "Youth Empowerment",
      readTime: "5 min read"
    },
    {
      title: "Believing in the Future",
      type: "Publication",
      image: "https://wakeandshineshg.netlify.app/public/images/250b784ee16f16282222886f9e389845.webp",
      excerpt: "There's ALWAYS something you can do to improve your situation, and it doesn't matter what tactics you take. What's crucial to your achieving your results is what you do TODAY. It's that simple to understand, though it's much harder to implement and maintain. Worries preoccupy the minds of most modern people. They feel they have to go in a thousand directions at once with lots of demands on their time and money.",
      category: "Personal Development",
      readTime: "7 min read"
    },
    {
      title: "Let's Grow Together",
      type: "Website",
      image: "https://wakeandshineshg.netlify.app/public/images/ecf33604b1b6c98e80af67fc7c1d38be.webp",
      excerpt: "You feel good when you can help others. As social creatures, humans are meant to work together. But what happens when all that helping and serving becomes too much and you start resenting the people you're serving or the act of serving?",
      category: "Community Building",
      readTime: "4 min read"
    }
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Blogs & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, stories, and knowledge sharing from our community development work and youth empowerment initiatives.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Card key={index} className="group shadow-custom-md hover:shadow-custom-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={`${blog.title} - Wake and Shine blog post`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(blog.category)}>
                    {blog.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    {getTypeIcon(blog.type)}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-white/90 text-foreground border-white/50">
                    {blog.type}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                  {blog.excerpt}
                </p>
                
                <Button variant="outline" size="sm" className="group/btn w-full">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
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
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Stay Updated with Our Stories
                </h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter to receive the latest updates on our community development work, 
                  success stories, and upcoming events.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <Button variant="cta" size="lg">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};