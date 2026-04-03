import { Microscope, Dna, FlaskConical } from "lucide-react";

const stats = [
  { icon: Microscope, value: "20+", label: "Years of Research" },
  { icon: Dna, value: "200+", label: "Publications" },
  { icon: FlaskConical, value: "30+", label: "International Projects" },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Advancing Forensic Science Through Genomics
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In the past 20 years forensic molecular biology has faced substantial
            technological developments. Short Tandem Repeat (STR) loci have become
            the golden standard for human identification in crime case, ID and
            paternity case work.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our research group has contributed to these developments with varying focus —
            from mitochondrial and Y-chromosomal DNA analysis to molecular photofitting,
            predicting the geographical source and physical traits of individuals through
            DNA analysis.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center p-6 rounded-xl bg-card border border-border">
              <Icon className="mx-auto mb-3 text-accent" size={28} />
              <div className="text-2xl font-bold text-foreground">{value}</div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
