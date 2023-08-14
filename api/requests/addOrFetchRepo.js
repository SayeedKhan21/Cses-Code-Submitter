import fetchRepo from "./fetchRepo.js"
import addRepo from "./addRepo.js";
import { Octokit } from '@octokit/core'
import endpoints from "../endpoints.js";

const addOrFetch = async() => {
    
    const octokit = new Octokit({
        auth : process.env.GITHUB_API_TOKEN
    })
    
    if(parseInt(process.env.delete) === 1){
        console.log("DELETING EXISTING REPO")
        await octokit.request(endpoints.DELETE_REPO_ENDPOINT , endpoints.DELETE_REPO_CONFIG)    
    }
   
    let res 
    try {
        res = await fetchRepo()
    }
    catch(err){
        if(err.status === 404){
            console.log("CREATING NEW REPO")
            res = await addRepo()
        }
        else 
            console.log(err)
    }

    
   
    return res


}

export default addOrFetch