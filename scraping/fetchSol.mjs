import fetchQues from "./fetchQues.mjs";
import fs from "fs"

export default async function fetchSol(page){
    const prob = await fetchQues(page)
    let solvedProblems = []
    for (let  i in prob){
        for( let j of prob[i]){
            let k = JSON.stringify(j)
            solvedProblems.push(k)
        }
    }
    solvedProblems = solvedProblems.toString()

    fs.appendFile('solvedProblems.json' , solvedProblems ,(err) => {
        if(err){
            console.error("ERROR OCCURED")
        }
        else {
            console.log('File updated')
        }
    } )
    
}