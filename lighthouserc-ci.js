module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 3,
      url: ["https://www.nmas.com.mx/"],
      // chromePath: '/usr/bin/google-chrome',
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.6 }],
        "categories:accessibility": ["error", { minScore: 0.6 }],
        "categories:best-practices": ["error", { minScore: 0.6 }],
        "categories:seo": ["error", { minScore: 0.6 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
