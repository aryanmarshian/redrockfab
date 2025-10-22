import { Shield, Heart, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize the safety of our team and clients in every project, maintaining the highest safety standards in the industry.",
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "RedRock Fabrications is committed to bettering the communities we serve through our processes, practices, and actions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative solutions to deliver superior results on every project.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to excellence drives us to exceed expectations and deliver the highest quality workmanship.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RedRock Fabrications</h1>
            <p className="text-xl text-primary-foreground/90">
              Building the future with precision steel fabrication and unwavering commitment to our values.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              At RedRock Fabrications, our mission is to deliver exceptional steel fabrication services 
              that exceed our clients' expectations. We combine traditional craftsmanship with modern 
              technology to provide innovative solutions for every project, while maintaining our commitment 
              to quality, transparency, and customer satisfaction.
            </p>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Founded in Alameda, New Mexico, RedRock Fabrications has grown from a small local operation 
                into a trusted name in steel fabrication. Our team brings decades of combined experience 
                in structural steel, miscellaneous metals, and custom fabrication.
              </p>
              <p className="text-muted-foreground">
                We've built our reputation on delivering projects on time, on budget, and with the highest 
                level of quality. From complex commercial structures to intricate custom metalwork, we 
                approach every project with the same dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at RedRock Fabrications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <Icon size={24} className="text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Environmental Commitment</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're committed to sustainable practices that minimize our environmental impact. From 
              recycling scrap metal to implementing energy-efficient processes, we continuously work 
              to reduce our carbon footprint while maintaining the highest quality standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Metal Recycling Rate</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Energy Reduction</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Waste Management</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
