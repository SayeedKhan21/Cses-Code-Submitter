
const getHeadCommitOidQuery = 

 `query ($repositoryOwner: String!, $repositoryName: String!, $branchName: String!) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      ref(qualifiedName: $branchName) {
        target {
          ... on Commit {
            oid
          }
        }
      }
    }
  }
  `
export default getHeadCommitOidQuery