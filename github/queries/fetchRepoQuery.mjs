const  fetchRepoQuery = 

    `query($ownerName:String! ,$repoName:String!,$subfolderPath:String!) { 
      repository(owner : $ownerName , name : $repoName){
        object(expression : $subfolderPath) {
          id
          ... on Tree{
            entries{
              name
              type
            }
          }
        }
      }
    }
    `

export default fetchRepoQuery