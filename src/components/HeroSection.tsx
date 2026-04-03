import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="DNA double helix visualization"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 hero-overlay" />

    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <p className="animate-fade-up text-sm md:text-base uppercase tracking-[0.25em] text-accent mb-6 font-medium">
        Institute of Legal Medicine · Medical University of Innsbruck
      </p>
      <h1 className="animate-fade-up-delay text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
        Forensic
        <br />
        <span className="text-gradient">Genomics</span>
      </h1>
      <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10">
        Pioneering research in forensic molecular biology — from STR analysis
        and mitochondrial DNA to molecular photofitting and next-generation sequencing.
      </p>
      <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#research"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Explore Research
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
