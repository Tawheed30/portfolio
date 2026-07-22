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
    slug: "building-home-soc-lab-on-a-budget",
    title: "Building a Home SOC Lab on a Budget in 2025",
    date: "2026-07-11",
    excerpt: "A practical guide to building a home SOC lab on a budget so you can practice real detection and triage skills without spending a fortune.",
    readingTime: "6 min read",
    tags: ["Home Lab","SOC Analyst","Blue Team","SIEM"],
    keywords: ["home SOC lab","security lab setup","budget security training","SIEM home lab","Splunk lab","blue team lab"],
    content:   [
        {
              "body": "If you want to break into blue team work, nothing beats hands-on practice — and a home SOC lab is the cheapest way to get it. As a SOC analyst, I can tell you that a budget security lab setup will teach you more about alert triage than any certification slide deck. The good news is that budget security training doesn't require expensive hardware. With a mid-range laptop, some free tools, and a weekend, you can build a home SOC lab that mirrors what analysts actually do: ingesting logs, tuning detections, and mapping activity to MITRE ATT&CK."
        },
        {
              "heading": "Start With the Right Hardware Baseline",
              "body": "You don't need a server rack. A machine with 16GB of RAM and an SSD is enough to run two or three virtual machines at once, which is plenty for a first lab. If you only have 8GB, you can still run a single SIEM VM and a victim host — just expect it to be slow. VirtualBox and VMware Workstation Player are both free for personal use and handle nested VMs well. Allocate resources conservatively: give your SIEM the most RAM, since log ingestion and search are the heaviest workloads in the whole lab."
        },
        {
              "heading": "Choose a Free SIEM to Anchor the Lab",
              "body": "The SIEM is the heart of any home SOC lab. Splunk Free lets you ingest up to 500MB per day, which is more than enough for lab traffic and mirrors the search syntax used in many real SOCs. If you'd rather practice on something fully open source, Elastic (ELK) or Wazuh both give you searchable indexes and dashboards at no cost. Wazuh is particularly good on a budget because it bundles agent-based endpoint monitoring, file integrity checks, and pre-built detection rules. Whichever you pick, the goal is the same: get logs flowing in and learn to write queries you'd actually run on shift."
        },
        {
              "heading": "Generate Realistic Attack Telemetry",
              "body": "A SIEM with no interesting events is boring. Bring in a Windows 10 VM and a Kali Linux VM so you can attack one from the other. Install Sysmon on the Windows host with a solid config like the SwiftOnSecurity template — this dramatically enriches your process, network, and registry logs. Then use Atomic Red Team to run individual MITRE ATT&CK techniques safely, or Caldera to chain them into full adversary emulations. Watching a T1059 PowerShell execution or a credential-dumping attempt light up your dashboards is where the learning clicks."
        },
        {
              "heading": "Practice the Full Triage Workflow",
              "body": "The tools matter less than the muscle memory. For every technique you run, walk the same loop you'd follow in a production SOC: spot the alert, pivot on the host and user, pull supporting logs, map the behavior to a MITRE ATT&CK tactic, and write a short investigation note documenting what you found and why it's benign or malicious. This is exactly the discipline that separates analysts who just close tickets from ones who understand what they're closing. A little Python goes a long way here too — you can script log parsing or enrich indicators against free threat-intel feeds."
        },
        {
              "heading": "Grow the Lab Only When You Outgrow It",
              "body": "Resist the urge to build everything at once. Start with one SIEM, one victim, and one attacker box. Once triage feels comfortable, add a pfSense firewall VM for network logs, or Security Onion for packet capture and IDS alerts with Suricata and Zeek. Each addition should answer a question your current lab can't. That keeps costs and complexity down while your skills scale up."
        },
        {
              "heading": "Takeaway",
              "body": "A home SOC lab is the highest-return investment in budget security training you can make. Pick a free SIEM, add Sysmon and Atomic Red Team, and practice the same triage loop real analysts run every day. Build it small, document your investigations, and grow it deliberately. For more hands-on SOC and detection guides, keep an eye on the rest of my portfolio."
        }
  ]
  },
  {
    slug: "threat-intelligence-feeds-free-sources-soc-analysts",
    title: "Free Threat Intelligence Feeds for SOC Analysts",
    date: "2026-07-11",
    excerpt: "The free threat intelligence feeds and OSINT for SOC workflows I use daily to enrich alerts and catch threats faster.",
    readingTime: "6 min read",
    tags: ["Threat Intelligence","OSINT","SOC","Blue Team"],
    keywords: ["threat intelligence feeds","free threat intel","OSINT for SOC","SOC analyst tools","IOC enrichment","MITRE ATT&CK"],
    content:   [
        {
              "body": "When I started in the SOC, I assumed useful threat intelligence feeds cost five figures a year. I was wrong. Free threat intel and OSINT for SOC workflows handle most of the enrichment work before you ever need to touch a paid platform. Good threat intelligence feeds turn a raw IP or hash into context in seconds, and knowing where to find quality free threat intel is one of the highest-ROI skills a junior analyst can build. Here are the exact free sources I use to enrich alerts and hunt threats faster."
        },
        {
              "heading": "Start With IOC Enrichment Feeds",
              "body": "For quick indicator lookups, three free sources cover most cases. AbuseIPDB scores IP reputation and shows recent abuse reports; VirusTotal (free tier) checks hashes, URLs, and domains against 70+ engines; and URLhaus from abuse.ch tracks live malware distribution URLs. Wiring these into a simple Python script using the `requests` library lets you bulk-check a whole batch of IOCs from a Splunk export at once instead of pasting them one by one into a browser."
        },
        {
              "heading": "Pull Structured Feeds With MISP",
              "body": "MISP is a free, open-source backbone for a threat intel stack. It ingests community feeds, deduplicates IOCs, and exports them in formats Splunk and QRadar can consume directly. The CIRCL OSINT feed and the Feodo Tracker (abuse.ch) botnet C2 list are two free feeds worth syncing into MISP on a schedule. Once they're in, push blocklists into your SIEM correlation searches so known C2 IPs trigger alerts automatically — a low-effort way to catch commodity threats that would otherwise slip past."
        },
        {
              "heading": "Map Everything to MITRE ATT&CK",
              "body": "Raw IOCs go stale fast, so anchor intel to behavior using MITRE ATT&CK. When a report describes a technique like T1566 (Phishing) or T1059 (Command and Scripting Interpreter), tag your detections to that technique ID. This lets you measure coverage — which ATT&CK techniques relevant to your environment you actually detect, and exactly which gaps to prioritize next. The free ATT&CK Navigator makes this visual and takes about 30 minutes to set up."
        },
        {
              "heading": "Add OSINT for Actor Context",
              "body": "For the 'who and why' behind an alert, free OSINT for SOC research fills the gap. I follow the CISA advisories and Automated Indicator Sharing (AIS) feed for U.S. government intel, plus vendor blogs from Mandiant, Cisco Talos, and The DFIR Report for detailed attack walkthroughs. Twitter/X and Mastodon infosec communities surface fresh IOCs hours before they hit formal feeds. I save these in a Notion database tagged by threat actor so I can pattern-match new activity against past campaigns in seconds."
        },
        {
              "heading": "Automate the Boring Parts",
              "body": "The value of free threat intel collapses if enrichment is manual. A lightweight Python playbook that takes an alert's indicators, queries AbuseIPDB, VirusTotal, and URLhaus, and posts a summary comment back into the ticket turns hours of manual lookups into a background task, and means every alert arrives pre-enriched. If you have a SOAR platform, wire these free APIs into your enrichment flows first before paying for premium intel connectors."
        },
        {
              "heading": "Your Next Step",
              "body": "Pick three sources this week: AbuseIPDB for IP reputation, MISP for structured feeds, and MITRE ATT&CK for behavioral mapping. Spend an afternoon connecting them to your SIEM, and you'll have a working free threat intelligence pipeline that rivals paid tiers for daily triage. Start small, automate one lookup, and expand from there. For more SOC automation scripts and detection walkthroughs, explore the rest of my portfolio."
        }
  ]
  },
  {
    slug: "edr-vs-network-detection-which-first",
    title: "EDR vs Network Detection: Which to Invest in First",
    date: "2026-07-11",
    excerpt: "A SOC analyst's practical breakdown of EDR vs network detection so you know where to spend your first security dollar.",
    readingTime: "6 min read",
    tags: ["EDR","Network Detection","SOC","Security Strategy"],
    keywords: ["EDR vs network detection","endpoint detection","network security monitoring","EDR","NDR","SOC tooling"],
    content:   [
        {
              "body": "Every SOC eventually hits the same budget fight: EDR vs network detection. Do you buy endpoint detection first, or invest in network security monitoring? I've worked with detection pipelines that lean on both, and the honest answer is that EDR vs network detection isn't religion — it's sequencing. Endpoint detection gives you process-level truth, while network security monitoring catches what endpoints can't see. In this post I'll walk through which one to deploy first and why the order matters for mean-time-to-detect."
        },
        {
              "heading": "What EDR Actually Buys You",
              "body": "Endpoint detection and response tools like CrowdStrike Falcon, Microsoft Defender for Endpoint, and SentinelOne see the ground truth: process trees, command-line arguments, DLL loads, and registry changes. When mapping alerts to MITRE ATT&CK, techniques like T1059 (command execution), T1055 (process injection), and T1547 (persistence) are often only reliably observable on the endpoint. EDR also gives you response — the ability to isolate a host in seconds instead of chasing someone to physically pull a cable. For a team dealing with ransomware and phishing payloads, that containment speed alone justifies the spend."
        },
        {
              "heading": "Where Network Detection Wins",
              "body": "Network security monitoring — Zeek, Suricata, or a commercial NDR like Darktrace or Corelight — catches the things endpoints lie about or miss entirely. Unmanaged IoT devices, printers, contractor laptops, and rogue hardware never get an EDR agent, and that's often a meaningful chunk of the assets on a real network. Network detection also surfaces C2 beaconing, DNS tunneling, and lateral movement patterns even when malware disables the endpoint agent — a compromised device with no EDR footprint will still show up in a Zeek connection log if it's beaconing out."
        },
        {
              "heading": "My Deploy-First Recommendation: EDR",
              "body": "If I have one budget cycle, I deploy EDR first. Here's the reasoning: the majority of incidents I triage start on an endpoint — a user opened a malicious document or ran a script. EDR gives me both detection and response in one tool, and modern platforms ship with decent out-of-the-box detections so a small team gets value in week one. Standing up network security monitoring properly takes longer — you need taps, span ports, and Zeek/Suricata tuning that can eat 2+ weeks before signal beats noise."
        },
        {
              "heading": "When to Flip the Order",
              "body": "There are exceptions where I put network detection first. If your environment is dominated by unmanaged devices — OT, healthcare medical devices, or heavy BYOD — you literally cannot install agents on most assets, so EDR coverage stalls at 50-60%. In those cases network security monitoring is your only visibility. I also lean network-first when compliance requires east-west traffic inspection or when you already have Splunk or QRadar ingesting logs and just need a network feed to close the gap."
        },
        {
              "heading": "How I Fuse Both in the SOC",
              "body": "The real payoff is correlation. Forwarding EDR telemetry and Zeek/Suricata alerts into a shared SIEM like Splunk, then writing enrichment logic that stitches an endpoint process to the network connection it opened, turns single low-fidelity alerts into high-confidence incidents. A beacon from network detection plus a suspicious PowerShell parent from endpoint detection is a story no single tool tells alone."
        },
        {
              "heading": "The Takeaway",
              "body": "Buy EDR first for most SOCs — you get detection and response in one move and cover where attacks usually start. Add network security monitoring second to catch unmanaged assets and C2 that endpoints miss, then fuse both in your SIEM for correlation. If you're mapping this decision for your own environment, count your unmanaged assets first — that single number decides whether you flip the order."
        }
  ]
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
              "body": "Maintaining separate detection logic for Splunk SPL and QRadar AQL means every new rule means duplicating work and introducing drift between platforms. Sigma fixes that. A single YAML file feeds sigma-cli, which compiles to 20+ backends. Migrating legacy vendor-specific saved searches into Sigma cuts maintenance overhead and makes rule reviews reproducible, since reviewers are looking at the same portable YAML instead of platform-specific syntax. It also maps cleanly to MITRE ATT&CK, so every detection ties back to a technique ID for coverage tracking."
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
              "body": "Now convert it. Install the tooling with pip install sigma-cli and the Splunk plugin via sigma plugin install splunk. Then run:\n\nsigma convert -t splunk suspicious_powershell.yml\n\nYou'll get valid SPL like: Image=\"*\\\\powershell.exe\" (CommandLine=\"*-enc*\" OR CommandLine=\"*-EncodedCommand*\"). Drop it into a Splunk saved search, add your index and sourcetype, and schedule it. The same file converts to QRadar AQL or Elastic Query DSL with a flag change. This Sigma to SPL conversion workflow is what turns one-off detections into a version-controlled, Git-managed rule library."
        },
        {
              "heading": "Test Before You Deploy",
              "body": "Never ship an untested rule. Validate every Sigma rule three ways: run sigma check to catch schema errors, generate the SPL and test it against historical data to measure false-positive volume, and use Atomic Red Team to fire the actual technique and confirm the alert triggers. That kind of testing catches noisy rules before they ever reach production. A rule that pages analysts on legitimate admin activity is worse than no rule at all."
        },
        {
              "heading": "Your Next Step",
              "body": "Fork the SigmaHQ repository, pick one ATT&CK technique relevant to your environment, and write a single rule end-to-end today, from YAML to a tested Sigma to SPL conversion in your SIEM. Commit it to Git, tag the ATT&CK ID, and you've started a real detection-engineering pipeline. Build ten of these and you'll have a portable, auditable detection library that outlives any SIEM vendor. That's the foundation everything else in detection engineering is built on."
        }
  ]
  },
  {
    slug: "python-soc-automation-quick-wins",
    title: "Python SOC Automation: Quick Wins for Analysts",
    date: "2026-07-22",
    excerpt: "Practical Python SOC automation scripts that cut repetitive triage work and let analysts focus on real investigations.",
    readingTime: "5 min read",
    tags: ["Python","SOC","Automation","Blue Team"],
    keywords: ["Python SOC automation","security automation scripts","Python cybersecurity","SOC analyst tools","phishing analysis","threat intelligence enrichment"],
    content:   [
        {
              "body": "If you work an L1 queue, you already know the pain: the same lookups, the same copy-paste, the same tab-switching a hundred times a shift. Python SOC automation is the fastest way out of that loop. As a SOC analyst, I've found that a handful of small security automation scripts remove more friction than any expensive tool upgrade. This post is about practical Python cybersecurity wins you can build in an afternoon — not a grand SOAR rollout. The goal is simple: automate the boring, repeatable parts of triage so your brain is free for the alerts that actually matter."
        },
        {
              "heading": "Start With IOC Enrichment",
              "body": "The single highest-value Python SOC automation task is enrichment. Instead of manually pasting IPs, domains, and hashes into VirusTotal, AbuseIPDB, and URLhaus one by one, write a script using the `requests` library that hits their APIs and returns a consolidated verdict. Feed it a list of indicators and let it print reputation scores, categories, and last-seen dates. Most of these services offer free API tiers that are plenty for L1 volume. This single script typically saves several minutes per alert, and those minutes add up fast across a shift."
        },
        {
              "heading": "Automate Phishing Header Parsing",
              "body": "Phishing triage eats a lot of L1 time. Python's built-in `email` module parses raw `.eml` or `.msg` files and extracts sender, Reply-To, Received chains, SPF/DKIM/DMARC results, and embedded URLs. Combine it with `re` to pull out links and `urllib.parse` to defang and normalize them, then pipe those URLs straight into your enrichment script. You end up with a clean summary of who sent it, whether authentication passed, and which URLs to detonate — instead of squinting at raw headers in Notepad."
        },
        {
              "heading": "Query Splunk and QRadar From a Script",
              "body": "Both platforms expose APIs. Splunk has a REST API (and the `splunk-sdk` Python library), and QRadar has the Ariel and REST APIs. You can script recurring searches — say, all activity from a suspicious IP across the last 24 hours — and dump results to CSV for your case notes. This is great for the same repetitive pivots you run during every investigation. Keep credentials in environment variables or a secrets manager, never hardcoded, and start read-only so you're only pulling data, not changing configs."
        },
        {
              "heading": "Map Alerts to MITRE ATT&CK Automatically",
              "body": "Documenting technique mappings by hand is tedious. The MITRE ATT&CK data is available as STIX, and the `mitreattack-python` library lets you look up techniques, tactics, and descriptions programmatically. A small helper script can take a technique ID like T1566 and return the name, tactic, and mitigation notes to drop into your ticket. It won't do the analysis for you, but it standardizes your documentation and speeds up the write-up every analyst has to produce."
        },
        {
              "heading": "Keep Scripts Safe and Maintainable",
              "body": "A few rules I stick to with any security automation scripts: use virtual environments (`venv`), pin dependencies in `requirements.txt`, log actions to a file, and add error handling so a failed API call doesn't crash the whole run. Store secrets outside the code. Keep everything read-only until a senior analyst reviews it. Automation should never replace your judgment — it should hand you cleaner inputs to judge faster."
        },
        {
              "heading": "Your First Weekend Project",
              "body": "Pick one workflow you repeat daily and script only that. Enrichment is the classic first project because the payoff is immediate and the risk is low. Once it works, chain it to your phishing parser, then your SIEM queries. That's how Python cybersecurity skills compound — small, tested wins that stack. If you want to see more hands-on SOC tooling breakdowns, check out the rest of my portfolio for walkthroughs and code."
        }
  ]
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
