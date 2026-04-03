import { Fingerprint, Dna, ScanEye, Database } from "lucide-react";

const areas = [
  {
    icon: Fingerprint,
    title: "STR Analysis",
    description:
      "Short Tandem Repeat profiling as the gold standard for human identification in forensic, paternity and disaster victim identification cases.",
  },
  {
    icon: Dna,
    title: "Mitochondrial & Y-chromosomal DNA",
    description:
      "Research on uniparentally inherited genomes — mitochondrial DNA and Y-chromosomal markers for lineage-based forensic analysis.",
  },
  {
    icon: ScanEye,
    title: "Molecular Photofitting",
    description:
      "Predicting the geographical origin and physical traits of an individual through analysis of their DNA — a key future research focus.",
  },
  {
    icon: Database,
    title: "Next-Generation Sequencing",
    description:
      "Massively parallel sequencing technologies applied to forensic genetics, enabling deeper and more comprehensive genomic analyses.",
  },
];

const ResearchSection = () => (
  <section id="research" className="py-24 px-4 section-alt">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
          Research Areas
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Our Fields of Expertise
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group p-6 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Icon className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
