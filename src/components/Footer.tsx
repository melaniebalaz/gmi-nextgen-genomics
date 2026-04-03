const Footer = () => (
  <footer className="bg-primary text-primary-foreground/70 py-12 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <span>
        © {new Date().getFullYear()} Forensic Genomics — Institute of Legal Medicine, Medical University of Innsbruck
      </span>
      <div className="flex gap-6">
        <a href="https://www.i-med.ac.at/gerichtsmedizin/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
          Institute Website
        </a>
        <a href="https://www.i-med.ac.at" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
          MUI
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
