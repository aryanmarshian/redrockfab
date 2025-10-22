import { Wrench, PenTool, ClipboardCheck, Layers, Users, Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Fabrication",
      description: "Our state-of-the-art fabrication facilities are equipped with the latest technology to handle projects of any size and complexity. From structural steel to custom metalwork, we deliver precision-crafted components that meet the most demanding specifications.",
      features: [
        "Structural steel fabrication",
        "Custom metal fabrication",
        "Welding and assembly",
        "Quality control and testing",
      ],
    },
    {
      icon: PenTool,
      title: "Engineering & Detailing",
      description: "Our experienced engineering team works closely with architects and contractors to develop detailed fabrication drawings and comprehensive shop drawings that ensure seamless project execution.",
      features: [
        "3D modeling and BIM integration",
        "Structural engineering support",
        "Shop drawing creation",
        "Connection design",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Pre-Construction",
      description: "We provide comprehensive pre-construction services to help you plan effectively and avoid costly surprises. Our team reviews designs, estimates costs, and develops fabrication strategies early in the project lifecycle.",
      features: [
        "Constructability reviews",
        "Budget estimation",
        "Value engineering",
        "Schedule development",
      ],
    },
    {
      icon: Layers,
      title: "Miscellaneous Metals",
      description: "Beyond structural steel, we specialize in fabricating miscellaneous metals including stairs, railings, canopies, and architectural metalwork that add both function and aesthetic appeal to your project.",
      features: [
        "Stairs and railings",
        "Canopies and awnings",
        "Architectural metalwork",
        "Custom metal features",
      ],
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Our dedicated project management team ensures your project runs smoothly from start to finish. We coordinate all aspects of fabrication and delivery to keep your project on schedule and within budget.",
      features: [
        "Dedicated project coordinators",
        "Schedule management",
        "Quality assurance",
        "On-time delivery",
      ],
    },
    {
      icon: Calculator,
      title: "Estimation",
      description: "Accurate and transparent estimates that help you plan with confidence. We break down materials, labor, and logistics to provide reliable cost projections and value options.",
      features: [
        "Detailed quantity takeoffs",
        "Material and labor breakdowns",
        "Alternates and value options",
        "Schedule and lead-time considerations",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        eyebrow="Services"
        title="Our Services"
        subtitle="Comprehensive steel fabrication solutions tailored to your project's unique requirements."
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-accent" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure every project is delivered with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We meet with you to understand your project requirements and goals." },
              { step: "02", title: "Design & Planning", description: "Our team develops detailed plans and engineering drawings." },
              { step: "03", title: "Fabrication", description: "We fabricate your components with precision and quality control." },
              { step: "04", title: "Delivery & Support", description: "We deliver on time and provide ongoing project support." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-lg text-muted-foreground">
            Contact us to learn how our comprehensive fabrication services can bring your project to life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
