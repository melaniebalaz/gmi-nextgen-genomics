import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Get in Touch
        </h2>
      </div>

      <div className="max-w-xl mx-auto space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="text-accent shrink-0 mt-1" size={20} />
          <div>
            <p className="font-medium text-foreground">Institute of Legal Medicine</p>
            <p className="text-sm text-muted-foreground">
              Medical University of Innsbruck
              <br />
              Müllerstraße 44, 6020 Innsbruck, Austria
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-accent shrink-0" size={20} />
          <a
            href="mailto:walther.parson@i-med.ac.at"
            className="text-sm text-foreground hover:text-accent transition-colors"
          >
            walther.parson@i-med.ac.at
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="text-accent shrink-0" size={20} />
          <span className="text-sm text-foreground">+43 512 9003 70600</span>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
