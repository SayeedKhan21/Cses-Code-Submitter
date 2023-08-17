import addRepo from "./addRepo.js"
import fetchRepo from "./fetchRepo.js"

const addOrFetch = async() => {

   
    let res 
    try {
        
        res = await fetchRepo()
        
        if(res.errors)throw new Error('REPO NOT FOUND ,CREATING NEW ')
    }
    catch(err){
        console.log(err)
        res = await addRepo()

    }
   
    return res

}

export default addOrFetch