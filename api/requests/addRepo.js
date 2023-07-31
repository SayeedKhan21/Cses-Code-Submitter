import endpoints from '../endpoints.js'
import { Octokit } from '@octokit/core'


const addRepo = async () => {
    const octokit = new Octokit({
        auth : process.env.GITHUB_API_TOKEN
    })

    const res = await octokit.request(endpoints.ADD_REPO_ENDPOINT , endpoints.ADD_REPO_CONFIG)
    return res
}

export default addRepo