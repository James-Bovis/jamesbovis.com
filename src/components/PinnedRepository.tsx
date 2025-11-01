import { Star, GitFork, ExternalLink } from "lucide-react";
import type { PinnedRepository as PinnedRepositoryType } from "../hooks/useGitHubPinnedRepos";

interface PinnedRepositoryProps {
  repo: PinnedRepositoryType;
}

export const PinnedRepository = ({ repo }: PinnedRepositoryProps) => {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
          {repo.name}
        </h3>
        <ExternalLink className="w-4 h-4 text-neutral-400 dark:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 min-h-[2.5rem]">
        {repo.description || "No description provided"}
      </p>

      <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500">
        {repo.primaryLanguage && (
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: repo.primaryLanguage.color }}
            />
            <span>{repo.primaryLanguage.name}</span>
          </div>
        )}

        {repo.stargazerCount > 0 && (
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5" />
            <span>{repo.stargazerCount}</span>
          </div>
        )}

        {repo.forkCount > 0 && (
          <div className="flex items-center gap-1">
            <GitFork className="w-3.5 h-3.5" />
            <span>{repo.forkCount}</span>
          </div>
        )}
      </div>
    </a>
  );
};
