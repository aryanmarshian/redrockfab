import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import projectImage from "@/assets/project-example.jpg";

const Projects = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        eyebrow="Projects"
        title="Our Projects"
        subtitle="Showcasing our commitment to quality and precision in every steel fabrication project."
      />

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

            {/* Placeholder Projects */}
            {[{title: "Commercial Complex", location: "Rio Rancho, NM", year: "2024"}, {title: "Industrial Facility", location: "Santa Fe, NM", year: "2025"}].map((item, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-secondary">
                  <img
                    src="/placeholder.svg"
                    alt={`${item.title} placeholder`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Placeholder project showcasing our capabilities. Detailed case study coming soon.
                  </p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{item.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Completed:</span>
                      <span className="font-medium">{item.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tonnage:</span>
                      <span className="font-medium">—</span>
                    </div>
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
