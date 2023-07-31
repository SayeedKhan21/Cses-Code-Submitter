import fetchRepo from "./fetchRepo.js"
import addRepo from "./addRepo.js";


const addOrFetch = async() => {
   
    let res 
    try {
        res = await fetchRepo()
    }
    catch(err){
        if(err.status === 404){
            res = await addRepo()
        }
        else 
            console.log(err)
    }
   
    return res


}

export default addOrFetch