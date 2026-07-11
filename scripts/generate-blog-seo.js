#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const https = require('https');

const apiKey = process.env.ANTHROPIC_API_KEY;
const topic = process.env.TOPIC;
const keywords = process.env.KEYWORDS;

if (!apiKey) {
  console.error('Error: ANTHROPIC_API_KEY environment variable not set');
  process.exit(1);
}

// High-traffic SOC/cybersecurity keywords that drive organic traffic
const autoTopics = [
  {
    topic: "How to reduce false positives in Splunk",
    keywords: "Splunk false positives, alert tuning, reduce noise, Splunk optimization",
    description: "Practical techniques for tuning Splunk rules to cut false positives by 40%"
  },
  {
    topic: "Python automation for SOC analysts: quick wins",
    keywords: "Python SOC automation, security automation scripts, Python cybersecurity",
    description: "Real Python scripts that save 2+ hours/week on manual SOC tasks"
  },
  {
    topic: "Phishing investigation workflow: step-by-step",
    keywords: "phishing investigation, email security, phishing detection, incident response",
    description: "The exact process I use to investigate 10+ phishing cases per month"
  },
  {
    topic: "MITRE ATT&CK mapping for detection engineers",
    keywords: "MITRE ATT&CK detection, threat detection, detection engineering techniques",
    description: "How to use ATT&CK to build detection rules that actually catch attacks"
  },
  {
    topic: "QRadar offense tuning: reducing alert fatigue",
    keywords: "QRadar tuning, QRadar offense correlation, alert fatigue reduction",
    description: "Advanced QRadar rules that reduced noise by 50% in production"
  },
  {
    topic: "EDR vs network detection: which to invest in first",
    keywords: "EDR vs network detection, endpoint detection, network security monitoring",
    description: "A SOC analyst's guide to picking the right detection layer"
  },
  {
    topic: "Building a home SOC lab on $500 budget",
    keywords: "home SOC lab, security lab setup, budget security training, hands-on learning",
    description: "Free and cheap tools to build a realistic SOC training environment"
  },
  {
    topic: "L1 to L2 SOC analyst skills: what actually matters",
    keywords: "SOC analyst career, L2 skills, threat hunting, incident response skills",
    description: "The 5 skills that actually matter for SOC analyst career progression"
  },
  {
    topic: "Incident response: first 30 minutes checklist",
    keywords: "incident response, incident management, cybersecurity incident checklist",
    description: "The checklist I use to contain incidents in the critical first 30 minutes"
  },
  {
    topic: "Threat intelligence for SOC analysts: free sources",
    keywords: "threat intelligence feeds, free threat intel, OSINT for SOC",
    description: "Actionable free threat intelligence sources that actually help catch attacks"
  }
];

const systemPrompt = `You are an expert SOC analyst and security writer. Generate blog posts for Mohammed's portfolio that:

1. **DRIVE TRAFFIC**: Use high-intent keywords naturally throughout
2. **SEO OPTIMIZED**: Title includes main keyword, first 100 words mention it 2-3x
3. **PRACTICAL**: Real techniques with concrete metrics and tool names
4. **OPINIONATED**: First-person voice, specific to Mohammed's experience
5. **STRUCTURED**: 4-7 sections with short action-oriented headings

Content Requirements:
- 500-700 words (optimal for SEO and readability)
- Open with hook that targets the keyword
- Use specific numbers: "reduce by 40%", "save 2+ hours/week", "process 10+ cases/month"
- Include real tool names: Splunk, QRadar, Python, MITRE ATT&CK, specific libraries
- End with actionable takeaway
- NO fluff, marketing speak, or AI-generated filler

Return ONLY valid JSON (no markdown, no extra text):
{
  "slug": "kebab-case-slug",
  "title": "Title With Main Keyword (40-60 chars)",
  "excerpt": "One compelling sentence that includes the main keyword",
  "readingTime": "5 min read",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"],
  "content": [
    { "body": "Hook paragraph with main keyword 2-3x..." },
    { "heading": "Action-Oriented Heading", "body": "..." },
    ...
  ]
}`;

const selectedTopic = topic || autoTopics[Math.floor(Math.random() * autoTopics.length)];
const finalTopic = typeof selectedTopic === 'string' ? selectedTopic : selectedTopic.topic;
const finalKeywords = keywords || (typeof selectedTopic !== 'string' ? selectedTopic.keywords : '');

const userPrompt = `Write an SEO-optimized blog post about: ${finalTopic}

Target keywords: ${finalKeywords}

Remember:
- Use keywords naturally (2-3x in first 100 words)
- Start with a compelling hook
- Include specific metrics and tool names
- First-person voice, practical advice
- Make it rank well on Google for these keywords
- Drive traffic to the portfolio site`;

async function callClaude() {
  return new Promise((resolve, reject) => {
    const requestBody = JSON.stringify({
      model: 'claude-opus-4-8',
      max_tokens: 2500,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt
        }
      ]
    });

    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.error) {
            reject(new Error(`API Error: ${response.error.message}`));
          } else {
            const content = response.content[0].text;
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
              reject(new Error('No JSON found in response'));
            }
            resolve(JSON.parse(jsonMatch[0]));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

async function main() {
  try {
    console.log(`🤖 Generating SEO-optimized blog post...`);
    console.log(`📝 Topic: "${finalTopic}"`);
    console.log(`🔑 Keywords: ${finalKeywords}`);
    console.log(`⏳ Calling Claude API...\n`);

    const blogPost = await callClaude();

    const blogDataPath = path.join(__dirname, '../src/data/blog.ts');
    let blogContent = fs.readFileSync(blogDataPath, 'utf8');

    // Convert post to proper format
    const postObject = `  {
    slug: "${blogPost.slug}",
    title: "${blogPost.title.replace(/"/g, '\\"')}",
    date: "${new Date().toISOString().split('T')[0]}",
    excerpt: "${blogPost.excerpt.replace(/"/g, '\\"')}",
    readingTime: "${blogPost.readingTime}",
    tags: ${JSON.stringify(blogPost.tags)},
    keywords: ${JSON.stringify(blogPost.keywords)},
    content: ${JSON.stringify(blogPost.content, null, 6).replace(/^/gm, '  ')}
  }`;

    // Add to posts array - replace the last closing bracket
    blogContent = blogContent.replace(
      /(\],\n)\];$/m,
      `$1  ${postObject}\n];`
    );

    fs.writeFileSync(blogDataPath, blogContent);

    console.log(`✅ Blog post generated successfully!\n`);
    console.log(`📰 Title: ${blogPost.title}`);
    console.log(`📊 Reading time: ${blogPost.readingTime}`);
    console.log(`🔗 Slug: ${blogPost.slug}`);
    console.log(`🏷️  Tags: ${blogPost.tags.join(", ")}`);
    console.log(`🔑 Keywords: ${blogPost.keywords.join(", ")}\n`);
    console.log(`📍 Posted to: src/data/blog.ts`);
    console.log(`🌐 Will appear at: /blog/${blogPost.slug}`);

  } catch (error) {
    console.error('❌ Error generating blog post:', error.message);
    process.exit(1);
  }
}

main();
