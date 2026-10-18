"use client";

import { useState, useEffect } from "react";

export interface GitHubReleaseInfo {
  tagName: string;
  releaseName: string;
  publishedAt: string;
  apkUrl: string;
  apkName: string;
  apkSizeMb: string;
  totalDownloads: number;
  releaseNotes: string;
  htmlUrl: string;
  isLoading: boolean;
  isError: boolean;
  isFallback: boolean;
}

const GITHUB_OWNER = "iamkamleshmali";
const GITHUB_REPO = "wallet-manager-app";

const DEFAULT_RELEASE: GitHubReleaseInfo = {
  tagName: "Latest",
  releaseName: "Wallet Manager — Double-Entry Ledger & Cloud Sync",
  publishedAt: "Latest Stable",
  apkUrl: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest/download/app-release.apk`,
  apkName: "app-release.apk",
  apkSizeMb: "~30 MB",
  totalDownloads: 0,
  releaseNotes: "• Encrypted Google Drive AppData sync\n• SQLite local database export & import\n• Reinforced multi-account balance sheets\n• High-performance interactive donut statistics",
  htmlUrl: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`,
  isLoading: false,
  isError: false,
  isFallback: true,
};

export function useGitHubRelease() {
  const [release, setRelease] = useState<GitHubReleaseInfo>({
    ...DEFAULT_RELEASE,
    isLoading: true,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchRelease() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API responded with status ${response.status}`);
        }

        const data = await response.json();

        if (!isMounted) return;

        // Find .apk asset
        const apkAsset = data.assets?.find((asset: { name?: string }) =>
          asset.name?.toLowerCase().endsWith(".apk")
        );

        // Compute decimal MB (bytes / 1,000,000) matching Android & Chrome download view
        const sizeInMb = apkAsset?.size
          ? (apkAsset.size / 1_000_000).toFixed(1) + " MB"
          : "~30 MB";

        const formattedDate = data.published_at
          ? new Date(data.published_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : "Recently";

        const downloadCount =
          data.assets?.reduce(
            (acc: number, item: { download_count?: number }) =>
              acc + (item.download_count || 0),
            0
          ) || (apkAsset?.download_count || 0);

        const tagName = data.tag_name || "Latest";
        const assetName = apkAsset?.name || "app-release.apk";
        const directApkUrl =
          apkAsset?.browser_download_url ||
          `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest/download/${assetName}`;

        setRelease({
          tagName: tagName,
          releaseName: data.name || `Release ${tagName}`,
          publishedAt: formattedDate,
          apkUrl: directApkUrl,
          apkName: assetName,
          apkSizeMb: sizeInMb,
          totalDownloads: downloadCount,
          releaseNotes: data.body || DEFAULT_RELEASE.releaseNotes,
          htmlUrl: data.html_url || DEFAULT_RELEASE.htmlUrl,
          isLoading: false,
          isError: false,
          isFallback: false,
        });
      } catch (err) {
        if (!isMounted) return;
        // Fallback gracefully on rate limit / network error
        setRelease({
          ...DEFAULT_RELEASE,
          isLoading: false,
          isError: true,
          isFallback: true,
        });
      }
    }

    fetchRelease();

    return () => {
      isMounted = false;
    };
  }, []);

  return release;
}
