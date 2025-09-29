import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Trophy, Shield, Calendar, CheckCircle } from "lucide-react";
import certificate from "@/assets/certificates.webp";
import meeting1 from "@/assets/meeting1.webp";
import games from "@/assets/games.webp";
import meeting2 from "@/assets/meeting2.webp";
import games2 from "@/assets/games2.webp";
import meeting3 from "@/assets/meeting3.jpeg";


export const AchievementsSection = () => {
  const achievements = [
    {
      icon: Users,
      title: "Leadership Development",
      image: certificate,
      description: "We came together to guide the youth on leadership skills and their progression to leadership. Through our program, many youths were empowered and guided by experienced mentors into leadership. We believe that leaders are not only born, but also made. We also trust our leadership on fellow youths by electing them to different positions to steer the group forward through democratic elections. Through this, our members are also able to develop their leadership skills.",
      category: "Leadership",
      status: "Ongoing"
    },
    {
      icon: GraduationCap,
      title: "Youth Empowerment Seminar",
      image: meeting1,
      description: "Youth come together to learn from each other and other invited guests in different perspectives of life. Majorly career guidance and sensitization on good moral behaviours.",
      category: "Education",
      status: "Annual"
    },
    {
      icon: Trophy,
      title: "Annual Volleyball Tournament",
      image:games,
      description: "We have managed to organise 4 of them with partnership with different partners. It happens every year. The aim is to bring youth together to nurture their talents, increase community integration as well as create awareness on different cross cutting issues.",
      category: "Sports",
      status: "4 Events Completed"
    },
    {
      icon: Shield,
      title: "Child Protection",
      image: meeting2,
      description: "In partnership with Plan International, in the Break Free project in Tharaka North sub-county, we work to sensitise the youth on SRHR education, making them aware of the dangers of FGM, early marriages and teenage pregnancies. We let them know the existing policies and laws prohibiting the same both national and county level, while advocating for them to take action in prevention of these vices.",
      category: "Advocacy",
      status: "Partnership Program"
    }
  ];

  const events = [
    {
      title: "Confederations Cup at Uturini",
      date: "27th December 2026",
      status: "upcoming",
      image:games2
    },
    {
      title: "The Break Free Project",
      date: "11/11/2023 - 23/11/2025",
      status: "current",
      image: meeting3
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Leadership":
        return "bg-primary text-primary-foreground";
      case "Education":
        return "bg-secondary text-secondary-foreground";
      case "Sports":
        return "bg-tertiary text-tertiary-foreground";
      case "Advocacy":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-playfair">
            ~ Our Achievements ~
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
            Celebrating the impact we've made in our community through various programs and initiatives.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 font-poppins">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group shadow-custom-md hover:shadow-custom-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={`${achievement.title} - Wake and Shine achievement`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(achievement.category)}>
                    {achievement.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <achievement.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-foreground border-white/50">
                    {achievement.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors font-poppins">
                  ~ {achievement.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current/Upcoming Events */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-playfair">
              ~ Current & Upcoming Events
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto font-poppins">
              Stay updated with our latest initiatives and upcoming community events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 font-poppins">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden shadow-custom-md hover:shadow-custom-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={`${event.title} event`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={event.status === 'upcoming' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-tertiary text-tertiary-foreground'
                      }
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.status === 'upcoming' ? 'Upcoming' : 'Current'}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2 font-poppins">
                    {event.title}
                  </h4>
                  <div className="flex items-center text-muted-foreground font-poppins">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto shadow-custom-lg bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-8 font-playfair">Our Impact by the Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Volleyball Tournaments</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-sm text-muted-foreground">Youth Trained</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-tertiary">50+</div>
                  <div className="text-sm text-muted-foreground">Leaders Developed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Active Partnerships</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};