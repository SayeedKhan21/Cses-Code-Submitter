import endpoints from "../endpoints.js";
import { Octokit } from "@octokit/core";
const addRepoContent = async(obj) => {
    
    const octokit = new Octokit({
        auth : process.env.GITHUB_API_TOKEN
    })

    await octokit.request(endpoints.ADD_REPO_CONTENT_ENDPOINT , endpoints.ADD_REPO_CONTENT_CONFIG(obj))
}

export default addRepoContent