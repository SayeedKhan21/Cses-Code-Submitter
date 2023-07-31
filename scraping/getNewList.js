import fetchQues from "./fetchQues.js"
import getSolvedProblems from "../util/getSolvedProblems.js"
import fs from "fs"
import getFileDiff from "../util/getFileDiff.js"

const getNewList = async (page) => {

    console.log("FETCHING QUESTIONS .... ")
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
    
    
    
    const prevSolvedProbs = await  getSolvedProblems()
    const recentFetchedProbs = {list : solvedProblems}
    
    const newProbs = getFileDiff(prevSolvedProbs , recentFetchedProbs)
    fs.writeFile('./data/newProblems.json' , JSON.stringify(newProbs) , (err) => {
        if(err){
            console.error(err)
        }
    })
    fs.writeFile('./data/solvedProblems.json' , JSON.stringify(recentFetchedProbs) , (err) => {
        if(err){
            console.error(err)
        }
    })
}

export default getNewList