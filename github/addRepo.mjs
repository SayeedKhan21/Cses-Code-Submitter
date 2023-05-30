import addRepoMutation from "./mutations/addRepoMutation.mjs";
import fetch from "node-fetch"


const mutation = {
    name : "createRepo" ,
    query : addRepoMutation ,
    variables : {
        input: {
            "name" : "CSES_SOLUTIONS"  ,
            "description": "Repoitory  to maintain cses code solutions",
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
    console.log(jsonres)
}
addRepo()
// export default addRepo 