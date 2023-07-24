import fetchQues from "./fetchQues.mjs"
import getSolvedProblems from "../util/getSolvedProblems.mjs"
import fs from "fs"
import getFileDiff from "../util/getFileDiff.mjs"

const getNewList = async (page) => {
    const prob = await fetchQues(page)
    
    let solvedProblems = []
    for (let i in prob) {
        const problems = {category : '' , problemList : []}
        problems.category = i
        for (let j of prob[i]) {
    
            problems.problemList.push(j)
        }
        solvedProblems.push(problems)
    }
    
    const recentFetchedProbs = {list : solvedProblems}
    
        
    const prevSolvedProbs = await  getSolvedProblems()

    const newProbs = getFileDiff(prevSolvedProbs , recentFetchedProbs)
    fs.writeFile('./data/newProblems.json' , JSON.stringify(newProbs) , (err) => {
        if(err){
            console.error(err)
        }
    })
}

export default getNewList