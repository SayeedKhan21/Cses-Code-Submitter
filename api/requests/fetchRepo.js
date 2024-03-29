import fetchRepoQuery from "../queries/fetchRepoQuery.js"


const query = {
  name: "fetchRepo",
  query: fetchRepoQuery,
  variables: {
    "owner": process.env.GITHUB_USERNAME ,
    "name" : process.env.GITHUB_REPO_NAME
  },
}

const headers = {
  'Content-type': 'application/json',
  'Authorization': 'Bearer ' + process.env.GITHUB_API_TOKEN
}

const options = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query)
}

async function fetchRepo() {
  
  const res = await fetch(process.env.GITHUB_GRAPHQL_ENDPOINT, options)
  const jsonres = await res.json()
  return jsonres
}

export default fetchRepo