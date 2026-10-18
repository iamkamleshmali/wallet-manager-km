/**
 * Global website configuration
 * Single source of truth for repository information and external URLs.
 */
export const SITE_CONFIG = {
  name: "Wallet Manager",
  siteUrl: "https://wallet-manager-km.vercel.app",
  author: "Kamlesh Mali",
  github: {
    owner: "iamkamleshmali",
    repo: "wallet-manager-km",
    repoUrl: "https://github.com/iamkamleshmali/wallet-manager-km",
    releasesUrl: "https://github.com/iamkamleshmali/wallet-manager-km/releases",
    latestReleaseUrl: "https://github.com/iamkamleshmali/wallet-manager-km/releases/latest",
    latestReleaseApiUrl: "https://api.github.com/repos/iamkamleshmali/wallet-manager-km/releases/latest",
    latestApkDownloadUrl: "https://github.com/iamkamleshmali/wallet-manager-km/releases/latest/download/app-release.apk",
    issuesUrl: "https://github.com/iamkamleshmali/wallet-manager-km/issues",
    profileUrl: "https://github.com/iamkamleshmali",
  },
} as const;

export const GITHUB_OWNER = SITE_CONFIG.github.owner;
export const GITHUB_REPO = SITE_CONFIG.github.repo;
export const GITHUB_REPO_URL = SITE_CONFIG.github.repoUrl;
export const GITHUB_RELEASES_URL = SITE_CONFIG.github.releasesUrl;
export const GITHUB_API_LATEST_RELEASE = SITE_CONFIG.github.latestReleaseApiUrl;
export const GITHUB_LATEST_APK_URL = SITE_CONFIG.github.latestApkDownloadUrl;
export const GITHUB_ISSUES_URL = SITE_CONFIG.github.issuesUrl;
export const GITHUB_PROFILE_URL = SITE_CONFIG.github.profileUrl;
