const addRepoMutation = 
    `
    mutation($input : CreateRepositoryInput!){
        createRepository(input : $input){
          repository{
            name
          }
        }
      }
    `
export default addRepoMutation