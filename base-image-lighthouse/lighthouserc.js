module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 1,
      settings: { chromeFlags: "--no-headers" },
      url: ["https://www.nmas.com.mx/"],
      //chromePath: "/usr/bin/google-chrome",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
