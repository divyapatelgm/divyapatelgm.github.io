import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { toast, Toaster } from "sonner";
import { MagneticButton } from "../ui/magnetic-button";

const EMAIL = "divyapatelgm220604@gmail.com";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

    // Fallback: no key configured yet - hand off to the visitor's mail client so
    // the message is never silently lost, and nudge the owner to set the key.
    if (!accessKey) {
      console.warn(
        "VITE_WEB3FORMS_ACCESS_KEY is not set. Get a free key at https://web3forms.com and add it to your .env file. Falling back to a mailto link."
      );
      const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${encodeURIComponent(
        form.message
      )}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        form.subject || "Portfolio enquiry"
      )}&body=${body}`;
      toast("Opening your email app…", {
        description: "Set a Web3Forms key to send without leaving the page.",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || `New portfolio message from ${form.name}`,
          message: form.message,
          from_name: "Portfolio Contact Form",
        }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Message sent! I'll get back to you shortly.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      toast.error("Couldn't send that. Please email me directly at " + EMAIL + ".");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center py-24 px-6 md:px-10 overflow-hidden noise-overlay bg-background"
    >
      <Toaster position="bottom-right" theme="dark" richColors />
      {/* Ambient background lights */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none animate-gradient"
        style={{
          background:
            "radial-gradient(ellipse at 25% 30%, oklch(0.72 0.22 45 / 0.16), transparent 45%), radial-gradient(ellipse at 78% 78%, oklch(0.55 0.18 280 / 0.14), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl w-full z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5">
            <span className="h-px w-8 bg-primary" />
            Contact
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2
            className="font-display font-bold leading-[0.95] tracking-tight text-foreground"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
          >
            Let's build <span className="text-gradient italic">something amazing.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          {/* Side Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              I'm open to full-time roles, software internships, and freelance collaborations -
              and always happy to talk tech stacks, AI and thoughtful UX. Let's connect.
            </p>

            <div className="space-y-3">
              <ContactLink icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactLink
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/divyapatelgm"
                href="https://linkedin.com/in/divyapatelgm"
              />
              <ContactLink
                icon={Github}
                label="GitHub"
                value="github.com/divyapatelgm"
                href="https://github.com/divyapatelgm"
              />
            </div>

            <div className="pt-2">
              <MagneticButton
                as="a"
                href="/RESUME.pdf"
                download
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Download Resume
              </MagneticButton>
            </div>
          </div>

          {/* Form Column */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 glass-strong rounded-3xl p-6 md:p-8 border border-border"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                placeholder="Your name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label="Email"
                type="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
            </div>
            <div className="mt-5">
              <Field
                label="Subject"
                placeholder="What are we talking about?"
                value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })}
              />
            </div>
            <div className="mt-5">
              <Field
                label="Message"
                textarea
                placeholder="Hello Divya, I'd love to discuss…"
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
              <div className="text-xs text-muted-foreground font-semibold">
                {loading ? "Sending…" : ""}
              </div>
              <MagneticButton type="submit" disabled={loading}>
                {loading ? "Sending…" : "Send Message →"}
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-2xl glass px-5 py-3.5 hover:border-primary/45 transition-colors duration-300 border border-border"
    >
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[9px] uppercase font-bold tracking-[0.25em] text-muted-foreground">
            {label}
          </div>
          <div className="font-semibold text-sm text-foreground">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-transform duration-300" />
    </a>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block text-left">
      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          required
          className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2.5 text-foreground placeholder:text-muted-foreground/60 transition-colors resize-none text-sm"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required
          className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2.5 text-foreground placeholder:text-muted-foreground/60 transition-colors text-sm"
        />
      )}
    </label>
  );
}
