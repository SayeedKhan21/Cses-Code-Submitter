const fetchReposQuery =  
    
        `query
         {
            viewer
            {
                name  ,
                repositories(last : 10){
                        nodes{
                            name
                        }
                    }
            }
        }`

export default fetchReposQuery