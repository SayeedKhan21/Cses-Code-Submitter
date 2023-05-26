import fetchReposQuery from "./queries/fetchRepoQuery.mjs"

// console.log(fetchReposQuery)
const query = {
    name : "fetchRepo" ,
    query : fetchReposQuery ,
    variables : {
        numberOfRepos : 3
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

fetch(process.env.GITHUB_GRAPHQL_ENDPOINT,options) 
.then(res => res.json())
.then(data => {
    data = data['data']
    data.viewer.repositories.nodes.forEach((node) => {
        console.log(node.name)
    })
})