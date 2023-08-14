import { Octokit } from "@octokit/core"
import endpoints from "../endpoints.js"

const getSHA = async () => {

    const octokit = new Octokit({
        auth: process.env.GITHUB_API_TOKEN
  })
  
  const res = await octokit.request(endpoints.GET_HEAD_COMMIT_SHA_ENDPOINT, endpoints.GET_HEAD_COMMIT_SHA_CONFIG)
  return res
  
}

export default getSHA