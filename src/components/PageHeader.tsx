import React from "react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, eyebrow, align = "center" }) => {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="absolute inset-0 border-b border-white/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl ${alignClass}`}>
          {eyebrow ? (
            <div className="inline-block mb-4 px-4 py-1.5 bg-accent/20 rounded-full">
              <p className="text-accent font-semibold text-sm">{eyebrow}</p>
            </div>
          ) : null}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
          {subtitle ? (
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
