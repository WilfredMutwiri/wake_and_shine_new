import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Heart, Leaf, BookOpen } from "lucide-react"; 

// images
import meeting3n from "@/assets/meeting3.jpeg";
import meeting1 from "@/assets/meeting1.jpeg";
import meeting2 from "@/assets/meeting2.webp";
import meeting3 from "@/assets/meeting3.webp";
import meeting2n from "@/assets/meeting2.jpeg";
import kids from "@/assets/Kids.jpeg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HeroSection = () => {
  const images = [meeting1,meeting3n,kids,meeting3,meeting2n,meeting2];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle mt-10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full text-primary font-mono text-sm border border-primary/20">
              <Users className="w-4 h-4 mr-2" />
              Empowering Communities Since 2013
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground leading-tight font-playfair">
              Join Our Journey in
              <span className="text-orange-500"> Community Empowerment</span> and
              <span className="text-cyan-700"> Youth Advancement!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-poppins">
              Wake and Shine Self Help Group empowers communities in Tharaka
              Nithi County through education, environmental conservation,
              financial literacy, and sustainable development initiatives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-poppins">
              <Button className="bg-orange-500 hover:bg-cyan-700" size="xl" asChild>
                <a href="https://docs.google.com/forms/d/1fAmz1eIBawS00AfDHjd7FSJWPNFbkqGMULiYeJHLPcM/viewform?edit_requested=true">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button className="bg-cyan-700" size="xl" asChild>
                <a href="#about">Learn More About Us</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50 font-poppins">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary font-playfair">11+</div>
                <div className="text-sm text-muted-foreground">Years of Impact</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-secondary font-playfair">500+</div>
                <div className="text-sm text-muted-foreground">Lives Touched</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-tertiary font-playfair">20+</div>
                <div className="text-sm text-muted-foreground">Programs Run</div>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-custom-lg">
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
              {images.map((image, index) => (
                <div key={index} className="h-[400px] object-cover">
                  <img
                    className="h-[400px] object-cover"
                    src={image}
                    alt={`Banner ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
            </div>

            {/* Floating Elements Updated to Match Theme */}
            <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-xl shadow-custom-md animate-bounce delay-300">
              <Users className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-6 -left-10 bg-cyan-700 text-white p-4 rounded-xl shadow-custom-md animate-bounce delay-500">
              <Leaf className="w-8 h-8" /> {/* Nature / Conservation */}
            </div>
            <div className="absolute -bottom-10 -right-6 bg-emerald-600 text-white p-4 rounded-xl shadow-custom-md animate-bounce delay-700">
              <BookOpen className="w-8 h-8" /> {/* Education */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
