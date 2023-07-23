import getProblemList from "../util/getSolvedProblems.mjs"
import getFileDiff from "../util/getFileDiff.mjs";
import fetchQues from "./fetchQues.mjs"

export default async function fetchSol(page) {
    const prob = await fetchQues(page)
    
    let solvedProblems = []
    console.log("CHECKING FOR FILE DIFF")
    for (let i in prob) {
        const problems = {category : '' , problemList : []}
        problems.category = i
        for (let j of prob[i]) {


            // getSubmission(j , page)
        //     await page.goto(`https://cses.fi/problemset/view/${j.code}`)
        //     const submissionLink = await page.evaluate(() => {
        //         const link = document.querySelector('a.details-link').href
        //         return link
        //     })

        //     await Promise.all([

        //         page.waitForNavigation()   ,
        //         page.goto(submissionLink) ,
        //     ])
        //    const sol = await page.evaluate(() => {
        //     res = ""
        //     let d = document.querySelector('div.linenums')
        //     // return d.className
        //     let children = Array.from(d.querySelectorAll('[class ^= "L"]'))
        //         children.forEach((child) => {
        //             res += (child.textContent)
        //             res += "\n"
        //         })
        //         return res

        //    })
            
            problems.problemList.push(j)

        }
        
        solvedProblems.push(problems)
        
    }
    const recentFetchedProbs = {list : solvedProblems}
    
    const prevSolvedProbs = await  getProblemList()

    const newProbs = getFileDiff(prevSolvedProbs , recentFetchedProbs)

    newProbs.list.forEach(doc => {
        console.log(doc)
    })

}