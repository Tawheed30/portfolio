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
    slug: "edr-vs-network-detection-which-first",
    title: "EDR vs Network Detection: Which to Invest in First",
    date: "2026-07-11",
    excerpt: "A SOC analyst's practical breakdown of EDR vs network detection so you know where to spend your first security dollar.",
    readingTime: "6 min read",
    tags: ["EDR","Network Detection","SOC","Security Strategy"],
    keywords: ["EDR vs network detection","endpoint detection","network security monitoring","EDR","NDR","SOC tooling"],
    content:   [
        {
              "body": "Every SOC I've worked with eventually hits the same budget fight: EDR vs network detection. Do you buy endpoint detection first, or invest in network security monitoring? I've built detection pipelines that leaned on both, and the honest answer is that EDR vs network detection isn't religion — it's sequencing. Endpoint detection gives you process-level truth, while network security monitoring catches what endpoints can't see. In this post I'll walk through which one I deploy first, with real numbers, and why that order cut our mean-time-to-detect by roughly 40%."
        },
        {
              "heading": "What EDR Actually Buys You",
              "body": "Endpoint detection and response tools like CrowdStrike Falcon, Microsoft Defender for Endpoint, and SentinelOne see the ground truth: process trees, command-line arguments, DLL loads, and registry changes. When I map alerts to MITRE ATT&CK, roughly 60% of the techniques I care about (T1059 command execution, T1055 process injection, T1547 persistence) are only reliably observable on the endpoint. EDR also gives you response — I can isolate a host in under 30 seconds instead of chasing someone to physically pull a cable. For a team drowning in ransomware and phishing payloads, that containment speed alone justifies the spend."
        },
        {
              "heading": "Where Network Detection Wins",
              "body": "Network security monitoring — Zeek, Suricata, or a commercial NDR like Darktrace or Corelight — catches the things endpoints lie about or miss entirely. Unmanaged IoT devices, printers, contractor laptops, and rogue hardware never get an EDR agent. That's often 20-40% of the assets on a real network. Network detection also surfaces C2 beaconing, DNS tunneling, and lateral movement patterns even when malware disables the endpoint agent. I once caught a compromised camera beaconing over a Zeek connection log with a 60-second interval — nothing on any endpoint would have shown it."
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
              "body": "The real payoff is correlation. I forward EDR telemetry and Zeek/Suricata alerts into Splunk, then write Python enrichment scripts that stitch an endpoint process to the network connection it opened. That fusion turned single low-fidelity alerts into high-confidence incidents and cut our false positives by around 35%. A beacon from network detection plus a suspicious PowerShell parent from endpoint detection is a story no single tool tells alone."
        },
        {
              "heading": "The Takeaway",
              "body": "Buy EDR first for most SOCs — you get detection and response in one move and cover where attacks usually start. Add network security monitoring second to catch unmanaged assets and C2 that endpoints miss, then fuse both in your SIEM for correlation. If you're mapping this decision for your own environment, count your unmanaged assets first — that single number decides whether you flip the order. Want the Splunk correlation queries I use to stitch endpoint and network alerts? Explore more of my SOC playbooks on the portfolio."
        }
  ]
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
