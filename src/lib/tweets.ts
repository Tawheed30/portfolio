export type Tweet = { text: string; date: string };

const TWEETS_URL =
  "https://raw.githubusercontent.com/Tawheed30/twitter-bot/main/generated_tweets.txt";

export async function getRecentTweets(limit = 3): Promise<Tweet[]> {
  try {
    const res = await fetch(TWEETS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const raw = await res.text();

    const tweets: Tweet[] = [];
    for (const line of raw.split("\n")) {
      const match = line.trim().match(/^\[([^\]]+)\]\s*(.*)$/);
      if (!match) continue;
      const [, timestamp, rest] = match;
      const text = rest.replace(/^"|"$/g, "").trim();
      if (!text) continue;
      tweets.push({ text, date: timestamp.slice(0, 19).replace(" ", "T") });
    }

    return tweets.slice(-limit).reverse();
  } catch {
    return [];
  }
}
