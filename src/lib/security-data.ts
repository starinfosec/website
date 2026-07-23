
export interface SecurityTrack {
  id: string;
  name: string;
  subName: string;
  description: string;
  themeColor: string;
  gradient: string;
  features: string[];
  stats: { label: string; val: string }[];
  sections: {
    title: string;
    subtitle: string;
    details: string;
  }[];
}

export const securityTracks: SecurityTrack[] = [
  {
    id: "consultation",
    name: "Strategic Consultation",
    subName: "Your Security Roadmap.",
    description: "Expert guidance to navigate the complex digital landscape.",
    themeColor: "#3b82f6",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    features: ["Risk Assessment", "Compliance Audit", "Strategic Planning"],
    stats: [{ label: "Accuracy", val: "100%" }, { label: "Response", val: "24/7" }, { label: "Success", val: "500+" }],
    sections: [
      {
        title: "Expert Guidance.",
        subtitle: "A roadmap for resilience.",
        details: "We don't just find holes; we build fortresses. Our consultation service is designed to align your security posture with your long-term business goals."
      },
      {
        title: "Threat Identification.",
        subtitle: "Seeing the invisible.",
        details: "Our experts use advanced diagnostics to identify hidden vulnerabilities before they can be exploited by malicious actors."
      }
    ]
  },
  {
    id: "hardening",
    name: "System Hardening",
    subName: "Unbreakable Defense.",
    description: "Reinforcing your infrastructure against evolving threats.",
    themeColor: "#8b5cf6",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)",
    features: ["WAF Deployment", "Endpoint Protection", "Zero-Trust Architecture"],
    stats: [{ label: "Uptime", val: "99.9%" }, { label: "Defense", val: "Elite" }, { label: "Layers", val: "Multi" }],
    sections: [
      {
        title: "Bulletproof Tech.",
        subtitle: "Hardened by design.",
        details: "We implement multi-layered security protocols that ensure your systems remain operational even under sustained attack."
      }
    ]
  },
  {
    id: "internship",
    name: "Future Talent",
    subName: "The Next Generation.",
    description: "Empowering students with real-world security skills.",
    themeColor: "#10b981",
    gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
    features: ["Ethical Hacking", "Cloud Security", "Full-Stack Dev"],
    stats: [{ label: "Hired", val: "92%" }, { label: "Hands-on", val: "100%" }, { label: "Domains", val: "10+" }],
    sections: [
      {
        title: "Elite Internship.",
        subtitle: "Join the front lines.",
        details: "Work on real projects, gain mentorship from industry veterans, and start your career at the cutting edge of InfoSec."
      }
    ]
  }
];
