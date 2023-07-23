import getAllRepos from "./fetchRepos.mjs";
import fetchRepoContent from "./fetchRepoContent.mjs"
import addRepo from "./addRepo.mjs"
import fs from "fs"

const getSolvedProblems = () => {
    fs.readFile('solvedProblems.json' , (err , content) => {
        if(err){
            console.error(err)
        }
        else {
            let data = JSON.parse(content)
        }
    })
    return 
}

const  AddOrFetchRepo = async () => {
    const res = await getAllRepos()
    let isPresent = res.data.viewer.repositories.nodes.find((node) => node.name === 'CSES-SOLUTIONS') 
    let repo
    if(!isPresent){
        await addRepo()
    }

}

AddOrFetchRepo()