const config = {
  schema: "http://localhost:5500/graphql",
  documents: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/": {
      preset: "client",
    },
  },
};

export default config;
