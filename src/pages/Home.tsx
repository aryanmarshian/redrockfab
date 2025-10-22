import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Wrench, Users, Target, TrendingUp, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-steel.jpg";

const Home = () => {
  const commitments = [
    {
      icon: CheckCircle,
      title: "Quality",
      description: "We understand the level of precision required to seamlessly carry out fabrication projects, so our processes are designed to guarantee the highest level of quality on every job.",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "From initial budget estimates to the end of construction, our team is dedicated to transparency throughout the entire process, so you always know where your project stands.",
    },
    {
      icon: Users,
      title: "Support",
      description: "A dedicated project team will guide you through your project. When you have questions or concerns, we're right by your side.",
    },
  ];

  const services = [
    {
      title: "Fabrication",
      description: "Custom steel fabrication with precision and expertise",
    },
    {
      title: "Engineering & Detailing",
      description: "Professional design and technical documentation",
    },
    {
      title: "Pre-Construction",
      description: "Planning and preparation for seamless execution",
    },
    {
      title: "Miscellaneous Metals",
      description: "Specialized metalwork for unique project needs",
    },
    {
      title: "Project Management",
      description: "End-to-end oversight ensuring on-time delivery",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience", icon: TrendingUp },
    { value: "500+", label: "Projects Completed", icon: Award },
    { value: "100%", label: "Client Satisfaction", icon: CheckCircle },
  ];

  const process = [
    { number: "01", title: "Consultation & Planning", description: "Understanding your requirements and project scope" },
    { number: "02", title: "Design & Engineering", description: "Detailed technical drawings and specifications" },
    { number: "03", title: "Fabrication", description: "Precision manufacturing with quality control" },
    { number: "04", title: "Delivery & Installation", description: "On-time completion with professional support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Steel fabrication facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full">
                <p className="text-accent-foreground font-semibold text-sm">Since 2009</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                Focused on delivering{" "}
                <span className="text-accent">thoughtful design</span> and flawless execution.
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
                RedRock Fabrications delivers precision steel fabrication with quality craftsmanship and dedicated support for every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 h-14 rounded-xl">
                  <Link to="/contact">
                    Request a Quote <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 rounded-xl backdrop-blur-sm">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-accent/10 rounded-full">
                <p className="text-accent font-semibold text-sm">About Us</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built on Experience. Driven by Quality.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Based in Alameda, New Mexico, RedRock Fabrications brings years of experience in steel fabrication 
                to every project. Our team prides itself on outstanding customer service and on-time delivery of 
                superior products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We take pride in transforming ideas into reality through a meticulous approach to design, fabrication, 
                skilled project execution, and trust to deliver excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="border-2 border-border hover:border-accent/50 transition-all hover:shadow-xl group">
                    <CardContent className="p-8 flex items-center gap-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon size={32} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-muted-foreground font-medium">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitments to You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With every job we take on, RedRock Fabrications promises to deliver:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon size={32} className="text-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">{commitment.title}</h3>
                    <p className="text-muted-foreground text-center">{commitment.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-accent/10 rounded-full">
              <p className="text-accent font-semibold text-sm">Our Services</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              End-to-End Steel Fabrication Services You Can Rely On.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The work we do at RedRock Fabrications is cutting edge, but every project comes down to how 
              our team handles your needs. Our turnkey steel fabrication services range from the design phase 
              through to the very end of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-border hover:border-accent/50 transition-all hover:shadow-xl group cursor-pointer overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Wrench size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="ml-1 group-hover:ml-2 transition-all" size={18} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 rounded-xl">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-accent/10 rounded-full">
              <p className="text-accent font-semibold text-sm">Our Process</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our 4-Step Process to a Successful Build.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At RedRock, we don't just build — we craft. Every space we deliver is a reflection of thoughtful design, 
              expert planning, and precise execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-8xl font-bold text-slate-light mb-6 leading-none group-hover:text-accent/20 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Let us put our experience to use helping you execute your next fabrication project with 
            a level of skill and support you won't find anywhere else.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 h-14 rounded-xl">
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
