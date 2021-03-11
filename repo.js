const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

octokit.repos
  .listForUser({
    username: "lazaros-katiniotis",
    type: "public",
  })
  .then(({ data }) => {
    data.forEach(repo => {
      console.log();
      console.log(`Title: ${repo.name}`);
      console.log(`Description: ${repo.description}`);
      console.log(`URL: ${repo.html_url}`);
      console.log(`Homepage: ${repo.homepage}`);
      console.log(`Language: ${repo.language}`);
    })
  });