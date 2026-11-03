export const siteUrl = "https://mohammedtawheed.dev";

export const profile = {
  name: "Mohammed Tawheed",
  title: "Red Team Analyst | Penetration Tester | CEH",
  tagline:
    "Penetration Testing • Red Team Assessments • Vulnerability Validation • Nessus • Wireshark • Python",
  location: "Bangalore, India",
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
    "Junior Red Team Analyst and Penetration Tester with 2+ years of cybersecurity experience, including 1 year of hands-on penetration testing across web applications, networks, and infrastructure environments.",
    "I conduct authorized penetration tests and red team assessments, performing reconnaissance, attack-surface mapping, vulnerability validation, and exploit testing. Skilled in identifying security weaknesses, mapping findings to MITRE ATT&CK, and preparing clear remediation reports.",
    "My previous SOC experience with Splunk, QRadar, log analysis, and network monitoring provides a strong understanding of both attacker and defender perspectives, enabling effective red team operations.",
    "Certified EC-Council CEH (Certified Ethical Hacker), CSA (Certified SOC Analyst), CCSE (Certified Cloud Security Engineer), and CTIA (Certified Threat Intelligence Analyst).",
  ],
};

export const achievements = [
  "Executed 20+ penetration testing assessments across web, network, and infrastructure targets.",
  "Discovered and validated 50+ security findings, including multiple High and Critical vulnerabilities.",
  "Reduced false positives through effective vulnerability validation and exploit testing.",
  "Supported investigation of 30+ security incidents and alerts using enterprise SIEM platforms.",
];

export const experience = [
  {
    company: "HashSlash",
    role: "Red Team Analyst",
    period: "February 2024 — August 2026",
    highlights: [
      "Conducted authorised penetration tests and red team assessments across network, infrastructure and web application targets within agreed scope and rules of engagement.",
      "Performed reconnaissance, asset discovery, service enumeration and attack-surface mapping to identify exposed services and likely entry points.",
      "Validated exploitable weaknesses and separated actionable issues from false positives to demonstrate real security impact.",
      "Built and analyzed attack paths from initial access toward target objectives and mapped adversary behaviour to MITRE ATT&CK.",
      "Used Nessus for supporting vulnerability scanning and Wireshark for traffic analysis; reviewed service configurations and controls for misconfigurations.",
      "Produced evidence-backed reports covering scope, methodology, proof of concept, severity, business impact and prioritised remediation.",
      "Briefed technical stakeholders, supported remediation prioritisation and retested fixes to confirm closure.",
    ],
    tech: ["Penetration Testing", "Nessus", "Wireshark", "MITRE ATT&CK", "Red Team"],
  },
  {
    company: "AndyInfosec",
    role: "Cybersecurity Intern",
    period: "January 2023 — January 2024",
    highlights: [
      "Monitored and validated SIEM alerts using Splunk, IBM QRadar and Security Onion, following standard SOC procedures.",
      "Investigated phishing emails and malicious URLs; supported incident response and vulnerability assessment activities.",
      "Analyzed authentication logs, firewall events and packet captures to detect suspicious activity and support threat investigations.",
      "Prepared investigation notes and security reports with senior analysts.",
    ],
    tech: ["Splunk", "QRadar", "Security Onion", "Incident Response"],
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
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    id: "ECC0562384197",
  },
  {
    name: "Certified SOC Analyst (CSA)",
    issuer: "EC-Council",
    id: "ECC8120457369",
  },
  {
    name: "Certified Cloud Security Engineer (CCSE)",
    issuer: "EC-Council",
    id: "ECC1275908436",
  },
  {
    name: "Certified Threat Intelligence Analyst (CTIA)",
    issuer: "EC-Council",
    id: "ECC3476985012",
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
    category: "Red Team & Penetration Testing",
    items: [
      "Penetration Testing",
      "Red Team Assessments",
      "Vulnerability Validation",
      "Exploit Testing",
      "Attack-Surface Mapping",
      "Reconnaissance",
      "Service Enumeration",
      "Proof of Concept Development",
      "Remediation Verification",
    ],
  },
  {
    category: "Security Tools & Scanning",
    items: [
      "Nessus",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "Network Reconnaissance",
      "Port Scanning",
      "Web Application Testing",
      "Infrastructure Assessment",
    ],
  },
  {
    category: "Blue Team & SIEM",
    items: [
      "Splunk",
      "QRadar",
      "Security Onion",
      "SOC Operations",
      "SIEM Monitoring",
      "Alert Triage",
      "Incident Response",
      "Log Analysis",
    ],
  },
  {
    category: "Detection & Analysis",
    items: [
      "Windows Event Logs",
      "Firewall Logs",
      "EDR Alerts",
      "IDS/IPS Alerts",
      "Packet Analysis",
      "IOC Analysis",
      "Threat Detection",
      "MITRE ATT&CK Mapping",
    ],
  },
  {
    category: "Scripting & Frameworks",
    items: ["Python", "Bash", "PowerShell", "MITRE ATT&CK"],
  },
] as const;

export const githubUsername = "Tawheed30";
