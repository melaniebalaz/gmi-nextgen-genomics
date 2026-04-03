import { BookOpen, ArrowRight } from "lucide-react";

const highlights = [
  "EMPOP — the EANFSI mitochondrial DNA population database",
  "Massively parallel sequencing in forensic genetics",
  "Quality control standards for forensic DNA typing laboratories",
  "DNA-based prediction of externally visible characteristics",
];

const PublicationsSection = () => (
  <section id="publications" className="py-24 px-4 section-alt">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
          Publications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Key Research Contributions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {highlights.map((title) => (
          <div
            key={title}
            className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors group"
          >
            <BookOpen className="text-accent mt-0.5 shrink-0" size={20} />
            <span className="text-foreground text-sm font-medium leading-relaxed flex-1">
              {title}
            </span>
            <ArrowRight
              className="text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-0.5"
              size={16}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
