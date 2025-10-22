import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Briefcase, TrendingUp, Heart } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const Careers = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Competitive Compensation",
      description: "We offer competitive salaries and comprehensive benefits packages.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Advance your career with ongoing training and development programs.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We value your time and support a healthy work-life balance.",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Join a supportive team that values collaboration and excellence.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        eyebrow="Careers"
        title="Join Our Team"
        subtitle="Build your career with RedRock Fabrications. We're always looking for talented individuals who are passionate about quality craftsmanship."
      />

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join RedRock?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in our people and create an environment where you can thrive professionally and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check back soon for available positions. We're always looking for talented professionals 
              to join our growing team.
            </p>
          </div>

          <Card className="border-border max-w-2xl mx-auto">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase size={40} className="text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No Current Openings</h3>
              <p className="text-muted-foreground mb-6">
                We don't have any positions available at the moment, but we're always interested in 
                connecting with talented professionals. Send us your resume and we'll keep you in mind 
                for future opportunities.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link to="/contact">Send Your Resume</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Look For</h2>
          <p className="text-lg text-muted-foreground mb-8">
            At RedRock Fabrications, we value individuals who are:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-lg font-bold mb-2">Skilled</h3>
                <p className="text-sm text-muted-foreground">
                  Bringing expertise and technical knowledge to every project.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-lg font-bold mb-2">Dedicated</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to quality and excellence in everything you do.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-lg font-bold mb-2">Team-Oriented</h3>
                <p className="text-sm text-muted-foreground">
                  Working collaboratively to achieve outstanding results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
