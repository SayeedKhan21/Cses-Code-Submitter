import fetchAllReposQuery from "./queries/fetchAllReposQuery.mjs"
import fetch from "node-fetch"


const query = {
    name : "fetchRepos" ,
    query : fetchAllReposQuery ,
    variables : {
        numberOfRepos : 14
    },
}

const headers = {
    'Content-type' : 'application/json' ,
    'Authorization' : 'Bearer ' + process.env.GITHUB_API_TOKEN
}

const options = {
    method : "POST" ,
    headers  : headers ,
    body : JSON.stringify(query)
}

async function getAllRepos () {
    const res = await fetch(process.env.GITHUB_GRAPHQL_ENDPOINT,options) 
    const jsonres = await res.json()
    return jsonres
}

export default getAllRepos