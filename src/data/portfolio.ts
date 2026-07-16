export const siteUrl = "https://mohammedtawheed.dev";

export const profile = {
  name: "Mohammed Tawheed",
  title: "SOC Analyst",
  tagline:
    "SIEM Monitoring • Alert Triage • Incident Response • Splunk • QRadar • Python • MITRE ATT&CK",
  location: "Dubai, UAE",
  phone: "+91-9980412233",
  email: "mohammedtawheed9317@outlook.com",
  resumeUrl: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Tawheed30", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammedtawheed/", icon: "linkedin" },
  { label: "Twitter", href: "https://x.com/_notmohammed_", icon: "twitter" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
] as const;

export const twitterHandle = "_notmohammed_";

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm a SOC Analyst with 2+ years of hands on experience in SOC operations, SIEM monitoring, alert triage, threat detection, and incident response.",
    "I analyze events across Splunk, QRadar, firewalls, EDR, IDS/IPS, Windows Event Logs, and network traffic — skilled in IOC analysis, MITRE ATT&CK mapping, threat intelligence checks, and evidence documentation.",
    "I also build Python-based detection automation for Blue Team workflows, including SOAR and detection projects that speed up IOC lookups and evidence documentation.",
    "Certified EC-Council CSA (Certified SOC Analyst), CEH (Certified Ethical Hacker), and Splunk Core Certified User.",
  ],
};

export const achievements = [
  "Reduced false-positive escalations by 20% through improved alert triage and validation across Splunk and QRadar, while consistently handling 20-30 alerts/day.",
  "Maintained SLA adherence above 95% across P1-P3 incidents, ensuring timely escalation and response in a live SOC environment.",
  "Cut average phishing investigation time by ~20% by applying Python-based automation to accelerate IOC lookups and evidence documentation.",
];

export const experience = [
  {
    company: "HashSlash",
    role: "SOC Analyst L1",
    period: "February 2024 — Present",
    highlights: [
      "Triaged 10-20 SIEM alerts/day across Splunk and QRadar, validating events and escalating confirmed incidents per SOC workflows while reducing false positives by 20%.",
      "Maintained SLA adherence above 95% across P1-P3 incidents by monitoring firewall, EDR, IDS/IPS, endpoint, server, authentication, and network traffic logs for suspicious activity and IOCs.",
      "Investigated 5-10 phishing and malicious URL cases/month plus brute-force and suspicious login alerts, documenting evidence, severity, impact, and recommended response actions.",
      "Mapped 10+ MITRE ATT&CK techniques across investigations and built Python-based automation for Blue Team workflows, cutting average phishing investigation time by ~30%.",
    ],
    tech: ["Splunk", "QRadar", "MITRE ATT&CK", "Incident Response"],
  },
  {
    company: "AndyInfosec",
    role: "Cybersecurity Intern",
    period: "January 2023 — January 2024",
    highlights: [
      "Supported SIEM monitoring, alert validation, incident response, phishing analysis, and vulnerability assessment using standard security tools.",
      "Performed threat analysis on 10+ cases/month using authentication logs, firewall events, and packet captures; prepared incident notes and security reports with senior analysts.",
    ],
    tech: ["Splunk", "QRadar", "Vulnerability Assessment"],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Engineering, Computer Science Engineering",
    institution: "BMS Institute of Technology & Management",
    location: "Bengaluru, India",
  },
] as const;

export const certifications = [
  {
    name: "Certified SOC Analyst (CSA)",
    issuer: "EC-Council",
    id: "ECC8120457369",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    id: "ECC0562384197",
  },
  {
    name: "Splunk Core Certified User",
    issuer: "Splunk",
    id: undefined,
  },
] as const;

export const projects = [
  {
    title: "SOC Log-Based Threat Detection System",
    description:
      "Python automation to detect brute-force login patterns and generate analyst-ready alerts mapped to MITRE ATT&CK.",
    tech: ["Python", "MITRE ATT&CK", "Log Analysis"],
    status: "GitHub",
    href: "https://github.com/Tawheed30/soc-log-threat-detection",
  },
  {
    title: "Automated SOAR Incident Response System",
    description:
      "Automated incident response workflow for IP blocking, host isolation simulation, MITRE context, and structured reporting.",
    tech: ["Python", "SOAR", "MITRE ATT&CK"],
    status: "GitHub",
    href: "https://github.com/Tawheed30/soar-incident-response",
  },
  {
    title: "SIEM AI Agent",
    description:
      "Dashboard workflow to ingest security events, generate alerts, score risk, enrich alerts with MITRE ATT&CK context, and support SOC triage.",
    tech: ["Python", "Security Dashboard", "Risk Scoring"],
    status: "Security Dashboard",
  },
  {
    title: "Phishing Email Analyzer",
    description:
      "AI-powered phishing email analyzer for SOC analysts, using Claude AI for MITRE ATT&CK mapping and IOC extraction.",
    tech: ["Python", "Claude AI", "MITRE ATT&CK", "IOC Extraction"],
    status: "GitHub",
    href: "https://github.com/Tawheed30/phishing-email-analyzer",
  },
  {
    title: "Network Intrusion Detection System",
    description:
      "Scapy-based IDS for live packet inspection, suspicious port detection, and DoS-like traffic alerting.",
    tech: ["Python", "Scapy", "Network Security"],
    status: "GitHub",
    href: "https://github.com/Tawheed30/network-ids",
  },
  {
    title: "SOC Twitter Bot",
    description:
      "Automated bot with a cron scheduler that posts SOC and threat-intel updates on a schedule.",
    tech: ["Python", "Automation", "Cron"],
    status: "GitHub",
    href: "https://github.com/Tawheed30/twitter-bot",
  },
  {
    title: "Detection Engineering Pack",
    description:
      "Pre-built detection rules, correlation searches, and playbooks with Sigma-to-SPL/AQL conversion.",
    tech: ["Sigma", "SPL", "AQL", "MITRE ATT&CK"],
    status: "GitHub",
    href: "https://github.com/Tawheed30/detection-engineering-pack",
  },
  {
    title: "Phishing URL Detector",
    description:
      "Python tool that analyzes URLs for phishing indicators and flags malicious links for SOC review.",
    tech: ["Python", "Threat Detection"],
    status: "GitHub",
    href: "https://github.com/Tawheed30/phishing-url-detector",
  },
  {
    title: "MITRE SOC Simulator",
    description:
      "Simulated SOC environment for practicing alert triage and MITRE ATT&CK-mapped incident investigation.",
    tech: ["Python", "MITRE ATT&CK", "SOC Training"],
    status: "GitHub",
    href: "https://github.com/Tawheed30/mitre-soc-simulator",
  },
  {
    title: "iOS Security Reference",
    description:
      "iOS security reference and hardening checklist covering common mobile attack surfaces.",
    tech: ["Swift", "iOS Security"],
    status: "GitHub",
    href: "https://github.com/Tawheed30/SecureIOSReference",
  },
] as const;

export const skills = [
  {
    category: "SOC & SIEM",
    items: [
      "Splunk",
      "QRadar",
      "Security Onion",
      "SOC Operations",
      "Cyber Defense Center Support",
      "SIEM Monitoring",
      "Alert Triage",
      "Incident Response",
      "Security Monitoring",
      "Security Reporting",
    ],
  },
  {
    category: "Detection & Log Analysis",
    items: [
      "Windows Event Logs",
      "Firewall Logs",
      "EDR Alerts",
      "IDS/IPS Alerts",
      "Authentication Logs",
      "Packet Analysis",
      "IOC Analysis",
      "Threat Detection",
      "Basic Threat Hunting",
    ],
  },
  {
    category: "Security Investigations",
    items: [
      "Phishing Investigation",
      "Malicious URL Analysis",
      "Incident Handling",
      "Severity Classification",
      "Evidence Documentation",
      "Escalation",
      "Basic Digital Forensics",
    ],
  },
  {
    category: "Network & Vulnerability Security",
    items: [
      "Wireshark",
      "Nessus",
      "TCP/IP",
      "DNS",
      "VPN",
      "Firewalls",
      "IDS/IPS",
      "Vulnerability Assessment",
      "Risk Assessment",
    ],
  },
  {
    category: "Scripting & Frameworks",
    items: ["Python", "Bash", "PowerShell", "MITRE ATT&CK"],
  },
] as const;

export const githubUsername = "Tawheed30";
