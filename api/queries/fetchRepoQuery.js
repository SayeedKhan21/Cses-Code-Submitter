const fetchRepoQuery = 
`
 query($owner :String! , $name :String!) { 
       repository(owner :$owner ,name: $name) { 
         id
       }
     }
`

export default fetchRepoQuery