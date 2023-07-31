const endpoints =  {

    GET_REPO_ENDPOINT : 'GET /repos/{owner}/{repo}' ,
    GET_REPO_CONFIG : {
        owner : process.env.GITHUB_USERNAME ,
        repo : process.env.GITHUB_REPO_NAME ,
        headers : {
          'X-Github-Api-Version' : '2022-11-28' 
        }
    },

    ADD_REPO_ENDPOINT : 'POST /user/repos' ,
    ADD_REPO_CONFIG : {
        name: process.env.GITHUB_REPO_NAME,
        description: 'Repository to maintain Cses Problem Solutions',
        private: true,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    },


    ADD_REPO_CONTENT_ENDPOINT : 'POST /repos/{owner}/{repo}/contents/{path}' ,
    ADD_REPO_CONTENT_CONFIG : ({path ,data}) => {
        return {
            owner: process.env.GITHUB_USERNAME,
            repo: process.env.GITHUB_REPO_NAME,
            path,
            message: 'Added solution',
            content: Buffer.from(data).toString('base64'),
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }
    }
}

export default endpoints