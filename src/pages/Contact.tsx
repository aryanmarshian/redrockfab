import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your steel fabrication needs."
      />

      {/* Contact Info & Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin
                      className="text-accent mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Alameda North Valley
                        <br />
                        NM 87114
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone
                      className="text-accent mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        (505) 555-0100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail
                      className="text-accent mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@redrockfab.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock
                      className="text-accent mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 7:00 AM - 5:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-accent/5">
                <CardContent className="pt-6 pb-6">
                  <h3 className="font-semibold mb-2">Request a Quote</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form and we'll provide a detailed quote for
                    your project within 24-48 hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-2">
              <Card className="border-border overflow-hidden">
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-[500px]">
                    <iframe
                      title="RedRock Fabrications - Alameda North Valley, NM 87114"
                      src="https://www.google.com/maps?q=Alameda%20North%20Valley%2C%20NM%2087114&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
