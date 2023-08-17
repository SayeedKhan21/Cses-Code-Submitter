import getHeadCommitOidQuery from "../queries/getHeadCommitOidQuery.js"


const mutation = {
  name: "getHeadCommit",
  query: getHeadCommitOidQuery,
  variables: {
    "repositoryOwner": process.env.GITHUB_USERNAME ,
    "repositoryName" : process.env.GITHUB_REPO_NAME,
    "branchName" : "master"
  },
}

const headers = {
  'Content-type': 'application/json',
  'Authorization': 'Bearer ' + process.env.GITHUB_API_TOKEN
}

const options = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(mutation)
}

async function fetchRepo() {
  const res = await fetch(process.env.GITHUB_GRAPHQL_ENDPOINT, options)
  const jsonres = await res.json()
  
  return jsonres
}

export default fetchRepo