import addRepoMutation from "../mutations/addRepoMutation.js";
import endpoints from '../endpoints.js'
import { Octokit } from '@octokit/core'



const mutation = {
    name : "createRepo" ,
    query : addRepoMutation ,
    variables : {
        input: {
            "name" : process.env.GITHUB_REPO_NAME  ,
            "description": "Repoitory  to maintain CSES code Solutions",
            "visibility": "PRIVATE"
        }
    },
}

const headers = {
    'Content-type' : 'application/json' ,
    'Authorization' : 'Bearer ' + process.env.GITHUB_API_TOKEN
}

const options = {
    method : "POST" ,
    headers  : headers ,
    body : JSON.stringify(mutation)
}

async function addRepo () {
    const res = await fetch(process.env.GITHUB_GRAPHQL_ENDPOINT,options) 
    const jsonres = await res.json()

    
    const octokit = new Octokit({
        auth : process.env.GITHUB_API_TOKEN
    })
    
    await octokit.request(endpoints.ADD_REPO_CONTENT_ENDPOINT , endpoints.ADD_REPO_CONTENT_CONFIG({path : "README.md" , data : "Repository to maintain CSES Solutions" , message : "Added Readme"}))
    return jsonres
    
}

export default addRepo