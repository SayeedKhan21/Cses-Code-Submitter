const createCommitMutation = 
`
mutation($input: CreateCommitOnBranchInput!) {
    createCommitOnBranch(input: $input) {
      commit {
        oid
      }
    }
  }
`

export default createCommitMutation