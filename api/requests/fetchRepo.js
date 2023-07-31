import endpoints from '../endpoints.js'
import { Octokit } from '@octokit/core'

const  fetchRepo = async () => {
  const octokit = new Octokit({
    auth : process.env.GITHUB_API_TOKEN
  })
  
  const res = await octokit.request(endpoints.GET_REPO_ENDPOINT , endpoints.GET_REPO_CONFIG)
  return res
}
export default fetchRepo