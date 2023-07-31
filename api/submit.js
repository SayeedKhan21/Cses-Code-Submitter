import addOrFetch from "./requests/addOrFetchRepo.js"
import getSolutions from "../util/getSolutions.js"
import addRepoContent from "./requests/addRepoContent.js"


const submit = async () => {
    console.log("SUBMISSION STARTED ... ")
    const res = await addOrFetch()
    console.log("REPO CREATED " ,res)
    const data = await getSolutions()
    console.log("Started to submit " , data)
    data.list.forEach(async obj => {
        // console.log("-------------- TITLE ----------------")
        // console.log(obj.category)
        // obj.problemList.forEach(async prob => {
        const prob = obj.problemList[0]
        console.log("--- PROBLEM ----")
        console.log(prob.title)
        try{
            await addRepoContent({path  : `${obj.category}/${prob.title.replace(' ', '_')}.cpp` , data : prob.solution })
        }
        catch(err){
            console.error("PROCESS STOPPED " , err)
        }
        // })
    })
    
    
}

export default submit