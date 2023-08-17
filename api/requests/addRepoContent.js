import endpoints from "../endpoints.js";
import { Octokit } from "@octokit/core";
const createCommit = async(obj) => {
    
    const octokit = new Octokit({
        auth : process.env.GITHUB_API_TOKEN
    })

    await octokit.request(endpoints.CREATE_COMMIT_ENDPOINT , endpoints.CREATE_COMMIT_CONFIG(obj))
}

export default createCommit