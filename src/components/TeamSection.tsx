import { Mail, ExternalLink } from "lucide-react";

const TeamSection = () => (
  <section id="team" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Led by Expertise
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="p-8 rounded-xl bg-card border border-border text-center">
          <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-accent">WP</span>
          </div>
          <h3 className="text-xl font-bold text-foreground">Prof. Walther Parson, PhD</h3>
          <p className="text-accent font-medium text-sm mt-1 mb-4">Group Leader</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            Professor at the Institute of Legal Medicine, Medical University of Innsbruck.
            Leading international research in forensic molecular biology, with expertise
            spanning STR analysis, mitochondrial DNA, and molecular photofitting.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:walther.parson@i-med.ac.at"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              <Mail size={16} /> walther.parson@i-med.ac.at
            </a>
            <a
              href="https://www.i-med.ac.at/gerichtsmedizin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <ExternalLink size={14} /> Institute
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
