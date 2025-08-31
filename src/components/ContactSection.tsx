import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Heart } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch Today!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to join our journey in community empowerment? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                What are you waiting for? "Wake and Shine" is not just a group; it's a supportive 
                community where individuals come together to inspire, uplift, and empower each other.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="shadow-custom-sm hover:shadow-custom-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary-light">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        Nkuthe Village, Kamarandi Location<br />
                        Tharaka Nithi County, Kenya<br />
                        20KM East of County Headquarters
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-custom-sm hover:shadow-custom-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-secondary-light">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">
                        Chairman: +254 713 077 228<br />
                        Secretary: +254 706 367677<br />
                        Treasurer: +254 714 938 280
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-custom-sm hover:shadow-custom-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-tertiary-light">
                      <Clock className="w-6 h-6 text-tertiary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Registration</h4>
                      <p className="text-muted-foreground">
                        Reg. No: THA/DSS/SH/4163<br />
                        Ministry of Social Services<br />
                        Established: 2013
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" className="flex-1" asChild>
                  <a href="https://docs.google.com/forms/d/1fAmz1eIBawS00AfDHjd7FSJWPNFbkqGMULiYeJHLPcM/viewform?edit_requested=true">
                    Join Us Today
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <a href="https://forms.gle/JGpk1hRiXTvv5YGj6">
                    Become a Member
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground flex items-center">
                  <Heart className="w-6 h-6 text-primary mr-2" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      placeholder="Your full name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      placeholder="+254 700 000 000"
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your interest in Wake and Shine..."
                    className="w-full min-h-[120px] resize-none"
                    required
                  />
                </div>
                
                <Button variant="cta" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};