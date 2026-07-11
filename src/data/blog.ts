export type BlogBlock = { heading?: string; body: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  keywords: string[];
  content: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "soc-alert-triage-checklist",
    title: "A Practical Alert Triage Checklist for SOC Analysts",
    date: "2026-05-12",
    excerpt:
      "The mental checklist I run through on every Splunk/QRadar alert before deciding to escalate, close, or dig deeper.",
    readingTime: "5 min read",
    tags: ["SOC", "Splunk", "QRadar", "Triage"],
    keywords: [
      "SOC analyst alert triage",
      "how to triage SIEM alerts",
      "Splunk QRadar alert triage checklist",
      "SOC analyst blog",
      "alert fatigue SOC",
      "MITRE ATT&CK triage",
    ],
    content: [
      {
        body: "Alert fatigue is the biggest silent killer of SOC effectiveness. When you're staring at a queue of a few hundred alerts, having a consistent, repeatable triage checklist is what separates a fast, accurate analyst from one who burns out chasing false positives.",
      },
      {
        heading: "1. Confirm the source before you trust the signal",
        body: "Before doing anything else, I check where the alert originated — firewall, EDR, IDS/IPS, or authentication logs — and whether that source has a history of noisy false positives for this rule. A rule that's 90% false positive on a specific host group changes how much weight I give the alert.",
      },
      {
        heading: "2. Establish a timeline",
        body: "I pull the raw event and look five minutes before and after it in the same log source. Isolated one-off events are usually less urgent than a cluster of related events building toward a pattern — like repeated auth failures followed by a success.",
      },
      {
        heading: "3. Map it to MITRE ATT&CK immediately",
        body: "Even a rough tactic/technique mapping (e.g., T1110 for brute force) gives the alert context that a raw description doesn't. It also makes escalation notes far more useful to whoever picks up the case next.",
      },
      {
        heading: "4. Check for lateral movement indicators",
        body: "If the source host has touched anything unusual — new outbound connections, unexpected admin tool usage, or logons to hosts it's never talked to — that changes severity fast, regardless of what the original alert said.",
      },
      {
        heading: "5. Document as you go, not after",
        body: "I write my evidence and reasoning into the case notes while I'm investigating, not after I've made a decision. It keeps me honest about what actually drove the verdict, and it means a senior analyst reviewing the escalation isn't reverse-engineering my thought process.",
      },
      {
        body: "None of this is groundbreaking — but consistency is what makes triage fast under pressure. The checklist doesn't slow me down; it's what lets me move quickly without second-guessing every close.",
      },
    ],
  },
  {
    slug: "splunk-vs-qradar-notes",
    title: "Splunk vs QRadar: Notes From Running Both in Production",
    date: "2026-04-03",
    excerpt:
      "Neither tool is strictly better — they optimize for different things. Here's what actually matters day-to-day as an L1/L2 analyst.",
    readingTime: "6 min read",
    tags: ["Splunk", "QRadar", "SIEM"],
    keywords: [
      "Splunk vs QRadar",
      "QRadar vs Splunk comparison",
      "best SIEM tool for SOC analyst",
      "Splunk SPL vs QRadar AQL",
      "SIEM tools for cybersecurity analyst",
    ],
    content: [
      {
        body: "I monitor alerts across both Splunk and QRadar in my current role, and analysts new to SOC work often ask which one is 'better.' The honest answer: it depends what you're optimizing for, and most SOCs end up running more than one tool anyway.",
      },
      {
        heading: "Search flexibility",
        body: "Splunk's SPL is, in my experience, more flexible for ad-hoc investigation — chaining searches, building quick lookups, and pivoting across indexes feels natural once you're fluent in it. QRadar's AQL is capable but the query experience is more rigid, and I lean on saved searches and existing rules more than free-form querying.",
      },
      {
        heading: "Out-of-the-box correlation",
        body: "QRadar's built-in offense correlation and asset model save a lot of setup time — offenses arrive already grouped by asset, which cuts down on manually stitching related events together. Splunk gives you more control, but that control means someone has to build and tune the correlation searches first.",
      },
      {
        heading: "Alert volume and tuning",
        body: "Both tools are only as good as their tuning. I've seen a poorly tuned QRadar instance generate just as much noise as a poorly tuned Splunk deployment. The tool doesn't fix alert fatigue — the ruleset and the whitelisting discipline do.",
      },
      {
        heading: "What I'd tell a new SOC analyst",
        body: "Don't try to learn 'SIEM' in the abstract — learn to ask good questions of whichever tool is in front of you: what happened, when, on what asset, and what happened right before and after. The query language is a means to that end, not the skill itself.",
      },
    ],
  },
  {
    slug: "mitre-attack-without-slowing-down",
    title: "Mapping Alerts to MITRE ATT&CK Without Slowing Down Your SOC",
    date: "2026-02-20",
    excerpt:
      "MITRE ATT&CK mapping adds real value to incident reporting — but only if it doesn't turn into a 20-minute tagging exercise per alert.",
    readingTime: "4 min read",
    tags: ["MITRE ATT&CK", "Incident Response", "Process"],
    keywords: [
      "MITRE ATT&CK mapping",
      "MITRE ATT&CK for SOC analysts",
      "incident response framework",
      "MITRE ATT&CK techniques",
      "SOC incident reporting",
    ],
    content: [
      {
        body: "MITRE ATT&CK mapping gets a mixed reputation in SOC teams — done well, it adds real context to an incident; done badly, it becomes a compliance checkbox that eats analyst time without improving anyone's understanding of the threat.",
      },
      {
        heading: "Map the tactic first, the technique second",
        body: "Under time pressure, I map the tactic (Initial Access, Persistence, Lateral Movement, etc.) first — it's almost always obvious from the alert type. The specific technique or sub-technique can be refined later or by whoever picks up the escalation, without blocking the initial triage.",
      },
      {
        heading: "Keep a personal cheat sheet",
        body: "I keep a short reference of the technique IDs that show up repeatedly in our environment — T1110 (brute force), T1566 (phishing), T1078 (valid accounts) — so I'm not searching the ATT&CK site mid-investigation. It's a five-minute setup that pays for itself in the first week.",
      },
      {
        heading: "Use it to spot patterns across alerts, not just label one",
        body: "The real value shows up when you look across a week of tagged alerts and notice the same technique recurring against the same asset group. That's usually a stronger signal than any single alert — and it's the kind of insight that's hard to see without consistent tagging.",
      },
      {
        body: "Treat ATT&CK mapping as a lightweight lens for triage and reporting, not a taxonomy exercise. If it's taking longer than the investigation itself, it's being done wrong.",
      },
    ],
  },
  {
    slug: "phishing-email-header-analysis",
    title: "Phishing Email Header Analysis: What SOC Analysts Actually Need to Know",
    date: "2026-07-11",
    excerpt:
      "Email headers feel intimidating at first, but they're your fastest way to confirm or dismiss a phishing alert. Here's what to look for without getting lost in the noise.",
    readingTime: "5 min read",
    tags: ["Phishing", "Email Security", "Investigation"],
    keywords: [
      "phishing email header analysis",
      "email header investigation SOC",
      "how to analyze phishing emails",
      "email authentication SPF DKIM DMARC",
      "phishing detection techniques",
      "SOC phishing investigation",
    ],
    content: [
      {
        body: "Most of the phishing emails I investigate start with analysts asking me to 'just check if it's real' — and the fastest answer usually lives in the email headers, not the body or the links. Headers are messy and overwhelming at first, but they contain the proof you need to make a confident triage decision.",
      },
      {
        heading: "Start with authentication headers",
        body: "SPF, DKIM, and DMARC results tell you immediately if the sender's domain authenticated the email. A message claiming to be from your CEO but with 'SPF: fail' or 'DMARC: fail' is usually spoofed — full stop. I check the Authentication-Results header first; if it shows failures, the email is almost certainly phishing and I close the ticket. If it passes, I dig deeper, because a legitimate domain authenticating a phishing email means someone compromised an account or the domain itself.",
      },
      {
        heading: "Trace the actual path, not the display name",
        body: "The 'From:' header is trivial to forge in email clients. The 'Received:' headers show the actual path the email took — start at the bottom and read up to see every MTA (mail transfer agent) that touched it. If the last Received header came from your company's mail server, that's one thing. If it bounced around several external servers first, that's a red flag even if SPF/DKIM passed.",
      },
      {
        heading: "Check Return-Path and Reply-To separately",
        body: "A common phishing trick: legitimate domain in the From field, but Return-Path or Reply-To pointing to attacker infrastructure. Users reply 'yes' thinking they're responding to their boss, but the response goes to phishing.attacker.com. I verify all three addresses point to the expected domain before I trust the sender.",
      },
      {
        heading: "Decode and read the URL in the email headers",
        body: "HTML phishing emails often hide the real URL in the message body encoding. Before I click anything, I check the X-Originating-IP header for the user's source IP — if it's a VPN IP from the office, the user probably didn't send malicious email themselves. Then I extract the link destinations from the email source and check them against VirusTotal or your URL sandbox before any user interactions.",
      },
      {
        heading: "Document once, escalate faster",
        body: "I copy the Authentication-Results header, Return-Path, and Received chain into my case notes, along with a one-line verdict: 'Spoofed — SPF/DKIM/DMARC all fail' or 'Legitimate domain, suspicious URL — escalated to analyst' or 'User account compromised — T1566/T1598 phishing'. Whoever picks up the escalation has proof in 30 seconds, not an open question.",
      },
      {
        body: "Email headers are intimidating the first dozen times you read them, but they're the fastest way to separate real phishing from false positives. Spend 10 minutes learning the core headers — Received, From, Return-Path, Reply-To, and Authentication-Results — and you'll cut your phishing triage time by half.",
      },
    ],
  },
  {
    slug: "writing-your-first-sigma-rule-detection-engineering",
    title: "Sigma Rule Tutorial: Your First Detection Engineering Win",
    date: "2026-07-11",
    excerpt: "A practical Sigma rule tutorial for detection engineering, covering YAML structure, testing, and Sigma to SPL conversion for Splunk.",
    readingTime: "6 min read",
    tags: ["Sigma","Detection Engineering","SIEM","Threat Detection"],
    keywords: ["Sigma rule tutorial","detection engineering","Sigma to SPL conversion","Sigma rules","Splunk detection","SIEM detection rules"],
    content:   [
        {
              "body": "When I started detection engineering, I wasted hours copy-pasting vendor-specific queries that broke every time we switched SIEMs. Then I found Sigma. This Sigma rule tutorial is the guide I wish I had on day one: it walks through writing your first detection-engineering rule in YAML and doing a clean Sigma to SPL conversion for Splunk. Sigma is the generic, portable signature format for SIEMs, the same way Snort is for IDS. Write one rule once, convert it to Splunk, QRadar, or Elastic, and stop re-authoring the same logic five times."
        },
        {
              "heading": "Why Sigma Beats Vendor Lock-In",
              "body": "Before adopting Sigma, my team maintained separate detection logic for Splunk SPL and QRadar AQL. Every new rule meant duplicating work and introducing drift between platforms. Sigma fixed that. A single YAML file feeds sigma-cli, which compiles to 20+ backends. In my last project, migrating 40 legacy Splunk saved searches into Sigma cut our maintenance overhead by roughly 50% and made rule reviews reproducible. It also maps cleanly to MITRE ATT&CK, so every detection ties back to a technique ID for coverage tracking."
        },
        {
              "heading": "Anatomy of a Sigma Rule",
              "body": "A Sigma rule is just structured YAML with a handful of required fields: title, logsource, detection, and condition. The logsource tells the converter which data you're targeting (e.g., product: windows, service: security). The detection block holds one or more search identifiers, and the condition combines them with boolean logic. Add level (informational to critical), tags for ATT&CK mapping like attack.t1059.001, and a falsepositives list so analysts triaging the alert know what to expect. Keep titles short and descriptive; they become the alert name your SOC sees at 3 AM."
        },
        {
              "heading": "Writing Your First Rule",
              "body": "Let's detect suspicious PowerShell encoded commands (ATT&CK T1059.001). Create suspicious_powershell.yml:\n\ntitle: Suspicious PowerShell Encoded Command\nlogsource:\n  product: windows\n  category: process_creation\ndetection:\n  selection:\n    Image|endswith: '\\powershell.exe'\n    CommandLine|contains:\n      - '-enc'\n      - '-EncodedCommand'\n  condition: selection\nlevel: high\ntags:\n  - attack.execution\n  - attack.t1059.001\nfalsepositives:\n  - Legitimate admin scripts using encoded blocks\n\nThe |endswith and |contains modifiers handle path and substring matching so you don't hardcode brittle full strings. Start narrow, then widen as you validate against real telemetry."
        },
        {
              "heading": "Sigma to SPL Conversion",
              "body": "Now convert it. Install the tooling with pip install sigma-cli and the Splunk plugin via sigma plugin install splunk. Then run:\n\nsigma convert -t splunk suspicious_powershell.yml\n\nYou'll get valid SPL like: Image=\"*\\\\powershell.exe\" (CommandLine=\"*-enc*\" OR CommandLine=\"*-EncodedCommand*\"). Drop it into a Splunk saved search, add your index and sourcetype, and schedule it. The same file converts to QRadar AQL or Elastic Query DSL with a flag change. This Sigma to SPL conversion workflow is what turned my one-off detections into a version-controlled, Git-managed rule library."
        },
        {
              "heading": "Test Before You Deploy",
              "body": "Never ship an untested rule. I validate every Sigma rule three ways: run sigma check to catch schema errors, generate the SPL and test it against 30 days of historical data to measure false-positive volume, and use Atomic Red Team to fire the actual technique and confirm the alert triggers. On my last batch, this cut noisy alerts by 40% before they ever reached production. A rule that pages analysts on legitimate admin activity is worse than no rule at all."
        },
        {
              "heading": "Your Next Step",
              "body": "Fork the SigmaHQ repository, pick one ATT&CK technique relevant to your environment, and write a single rule end-to-end today, from YAML to a tested Sigma to SPL conversion in your SIEM. Commit it to Git, tag the ATT&CK ID, and you've started a real detection-engineering pipeline. Build ten of these and you'll have a portable, auditable detection library that outlives any SIEM vendor. That's the foundation everything else in detection engineering is built on."
        }
  ]
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
