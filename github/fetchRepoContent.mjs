import fetchRepoQuery from "./queries/fetchRepoQuery.mjs"
import fetch from "node-fetch"
import fs from "fs"

const query = {
    name : "fetchRepo" ,
    query : fetchRepoQuery ,
    variables : {
        ownerName : "SayeedKhan21" , 
        repoName : "drf-project" ,
        subfolderPath : "master"
    },
}

const headers = {
    'Content-type' : 'application/json' ,
    'Authorization' : 'Bearer ' + process.env.GITHUB_API_TOKEN
}

const options = {
    method : "POST" ,
    headers,
    body : JSON.stringify(query)
}

async function getRepoContent () {
    const res = await fetch(process.env.GITHUB_GRAPHQL_ENDPOINT,options) 
    const jsonres = await res.json()

    let problemsSolved = []

    fs.readFile('solvedProblems.json' ,(err ,data) =>{
        console.log(data)
    })

    // jsonres.data.repository.object.entries.forEach((node) => {
        // console.log(node)
    // })
    
}

getRepoContent()