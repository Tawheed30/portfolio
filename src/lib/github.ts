import { githubUsername } from "@/data/portfolio";

export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
};

export async function getGithubRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=100`,
      { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) return [];
    const repos = (await res.json()) as Repo[];
    return repos
      .filter((r) => !r.fork && r.name.toLowerCase() !== githubUsername.toLowerCase())
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
  } catch {
    return [];
  }
}
