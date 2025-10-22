import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import projectImage from "@/assets/project-example.jpg";

const Projects = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-primary-foreground/90">
              Showcasing our commitment to quality and precision in every steel fabrication project.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Project */}
            <Card className="border-border hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={projectImage}
                  alt="Modern Commercial Building"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-bold mb-2">Modern Commercial Building</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A 50,000 sq ft commercial facility featuring complex structural steel framework 
                  and custom architectural metalwork. Completed on schedule with precision fabrication.
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">Albuquerque, NM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Completed:</span>
                    <span className="font-medium">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tonnage:</span>
                    <span className="font-medium">500 tons</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Placeholder Cards */}
            {[1, 2].map((index) => (
              <Card key={index} className="border-border border-dashed">
                <CardContent className="pt-20 pb-20 text-center">
                  <div className="text-muted-foreground mb-4">
                    <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">📋</span>
                    </div>
                    <p className="font-medium">More projects coming soon</p>
                    <p className="text-sm mt-2">
                      We're currently working on several exciting projects across New Mexico.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Project Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how RedRock Fabrications can bring your vision to life with our 
            expertise in steel fabrication.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
