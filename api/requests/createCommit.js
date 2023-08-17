import createCommitMutation from "../mutations/createCommitMutation.js"


const mutation = (obj) => {
    return {

        "name": "createCommit",
        "query": createCommitMutation,
        "variables": {
            "input": {
                "branch": {
                    "repositoryNameWithOwner": `${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPO_NAME}`,
                    "branchName": "master"
                },
                "message": {
                    "headline": "Added solution",
                },
                "expectedHeadOid": obj.headOid,
                "fileChanges": {
                    "additions": [
                        {
                            "path": obj.path,
                            "contents": obj.content
                        }
                    ]
                }
            }
        }
    }

}

// console.log(mutation({headOid : 1 ,path : "adf" , content : "agd"}))

const headers = {
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + process.env.GITHUB_API_TOKEN
}



async function createCommit(obj) {
    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(mutation(obj))
    }
    const res = await fetch(process.env.GITHUB_GRAPHQL_ENDPOINT, options)
    const jsonres = await res.json()
    return jsonres
}

export default createCommit