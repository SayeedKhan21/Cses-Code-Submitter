const ownerName = process.env.GITHUB_USERNAME
const repoName = process.env.GITHUB_REPO_NAME
const endpoints = {

    ADD_REPO_CONTENT_ENDPOINT: 'PUT /repos/{owner}/{repo}/contents/{path}',
    ADD_REPO_CONTENT_CONFIG: ({ path, data,  message }) => {
        return {
            owner: ownerName,
            repo: repoName,
            path,
            message,
            content: Buffer.from(data).toString('base64'),
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }
    }

}

export default endpoints