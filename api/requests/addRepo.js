import endpoints from '../endpoints.js'
import { Octokit } from '@octokit/core'


const addRepo = async () => {
    const octokit = new Octokit({
        auth : process.env.GITHUB_API_TOKEN
    })
    

    await octokit.request(endpoints.ADD_REPO_ENDPOINT , endpoints.ADD_REPO_CONFIG)
    await octokit.request(endpoints.ADD_REPO_CONTENT_ENDPOINT , endpoints.ADD_REPO_CONTENT_CONFIG({path : "README.md" , data : "Repository to maintain CSES Solutions" , message : "Added Readme"}))
    
    
}

export default addRepo