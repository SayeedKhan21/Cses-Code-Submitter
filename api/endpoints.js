const ownerName = process.env.GITHUB_USERNAME
const repoName = process.env.GITHUB_REPO_NAME
const endpoints = {

    GET_REPO_ENDPOINT: 'GET /repos/{owner}/{repo}',
    GET_REPO_CONFIG: {
        owner: ownerName,
        repo: repoName,
        headers: {
            'X-Github-Api-Version': '2022-11-28'
        }
    },

    GET_REPO_CONTENT_ENDPOINT: 'GET /repos/{owner}/{repo}/contents/{path}',
    GET_REPO_CONTENT_CONFIG: {
        owner: ownerName,
        repo: repoName,
        path: '',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    },

    ADD_REPO_ENDPOINT: 'POST /user/repos',
    ADD_REPO_CONFIG: {
        name: repoName,
        description: 'Repository to maintain Cses Problem Solutions',
        private: true,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    },


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
    },

    DELETE_REPO_ENDPOINT: 'DELETE /repos/{owner}/{repo}',
    DELETE_REPO_CONFIG: {
        owner: ownerName,
        repo: repoName,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    },

    GET_HEAD_COMMIT_SHA_ENDPOINT : 'GET /repos/{owner}/{repo}/branches/{branch}' ,
    GET_HEAD_COMMIT_SHA_CONFIG : {
        owner: ownerName,
        repo: repoName,
        branch: "master",
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    },


    CREATE_BLOB_ENDPOINT : 'POST /repos/{owner}/{repo}/git/blobs' ,
    CREATE_BLOB_ENDPOINT_CONFIG : ({content}) => {
        return {

            owner: ownerName,
            repo: repoName,
            content,
            encoding: 'utf-8',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }
      } ,

      CREATE_TREE_ENDPOINT : 'POST /repos/{owner}/{repo}/git/trees' ,
      CREATE_TREE_ENDPOINT_CONFIG : (obj) => {
        return {
            owner: ownerName,
            repo: repoName,
            base_tree: obj.baseTreeSHA,
            tree: [
              {
                path: obj.path,
                mode: '100644',
                type: 'blob',
                sha : obj.blobSha
              }
            ],
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
        }
      } ,


      CREATE_COMMIT_ENDPOINT: 'POST /repos/{owner}/{repo}/git/commits',
      CREATE_COMMIT_CONFIG: ({baseTreeSHA , treeSha, message }) => {
          return {
              owner: ownerName,
              repo: repoName,
              message,
              tree: baseTreeSHA,
            //   parents : [treeSha] ,
              headers: {
                  'X-GitHub-Api-Version': '2022-11-28'
              }
          }
      },
    


  
 
}

export default endpoints