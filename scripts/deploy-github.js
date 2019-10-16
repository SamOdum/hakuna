const ghpages = require("gh-pages");

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://samodum.github.io/hakuna/"
  },
  () => console.log("Deploy Complete!")
);
