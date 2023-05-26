const fetchReposQuery =  
    
        `query($numberOfRepos : Int!)
         {
            viewer
            {
                name  ,
                repositories(last : $numberOfRepos){
                        nodes{
                            name
                        }
                    }
            }
        }`
export default fetchReposQuery