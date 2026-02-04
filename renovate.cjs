module.exports = {
  endpoint: "https://gitlab.cloud.xxxx.org/api/v4/",
  platform: "gitlab",
  onboardingConfig: {
    extends: ["config:recommended"],
  },
  baseBranchPatterns: ["development"],
  repositories: [
    {
      repository: "repos/renovate-reproduction-project",
    },
  ],
  enabledManagers: ["composer", "npm"],
  branchConcurrentLimit: 15,
  prConcurrentLimit: 10,
  prHourlyLimit: 10,
  configMigration: true,
  repositoryCache: 'reset',
};
