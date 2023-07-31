import getNewList from "./getNewList.js"
import getNewProblems from "../util/getNewProblems.js"
import fs from "fs"

export default async function fetchSol(page) {
    // console.log("INSIDE FETCHSOL")
    await getNewList(page)
    const newList = await getNewProblems()
    
    const solutions = {list : []}

    console.log("FETCHING SOLUTIONS ... ")
    
    for (let i in newList.list) {
        
        const solution = {category : '' , problemList : []}
        solution.category = newList.list[i].category
        for (let j of newList.list[i].problemList) {
            
            
            await page.goto(`https://cses.fi/problemset/view/${j.code}`)
            
            const link = await page.$('a.details-link');

            // Extract the link and text content of the <a> tag
            const submissionLink = await link.evaluate(el => el.getAttribute('href'));
            

            await Promise.all([
                page.waitForNavigation()   ,
                page.goto(`https://cses.fi/${submissionLink}`) ,
            ])
           const sol = await page.evaluate(() => {
            res = ""
            let d = document.querySelector('div.linenums')
            
            let children = Array.from(d.querySelectorAll('[class ^= "L"]'))
            children.forEach((child) => {
                res += (child.textContent)
                res += "\n"
            })
            
            return res
           })
           solution.problemList.push({...j , solution : sol})
           
        }

        solutions.list.push(solution)
        
    }
   
   fs.writeFile('./data/solutions.json' , JSON.stringify(solutions) , (err) => {
    console.log("SOLUTIONS FETCHED")
    if(err){
        console.error(err)
    }
   })

}