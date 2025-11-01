import { useState, useEffect } from "react";

export interface PinnedRepository {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  homepageUrl: string | null;
}

interface UseGitHubPinnedReposReturn {
  repos: PinnedRepository[];
  loading: boolean;
  error: Error | null;
}

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

const PINNED_REPOS_QUERY = `
  query {
    user(login: "James-Bovis") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
            homepageUrl
          }
        }
      }
    }
  }
`;

export const useGitHubPinnedRepos = (): UseGitHubPinnedReposReturn => {
  const [repos, setRepos] = useState<PinnedRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;

        if (!token) {
          throw new Error("GitHub token not configured");
        }

        const response = await fetch(GITHUB_GRAPHQL_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const pinnedRepos = data.data.user.pinnedItems.nodes;
        setRepos(pinnedRepos);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch pinned repositories:", err);
        setError(err instanceof Error ? err : new Error("Unknown error"));
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  return { repos, loading, error };
};
