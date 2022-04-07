module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 1,
      url: ["https://www.nmas.com.mx/"],
      chromePath: "/usr/bin/google-chrome",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
