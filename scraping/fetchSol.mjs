import getNewList from "./getNewList.mjs"
import getNewProblems from "../util/getNewProblems.mjs"

export default async function fetchSol(page) {
    // console.log("INSIDE FETCHSOL")
    await getNewList(page)
    const newList = await getNewProblems()
    
    
    
    for (let i in newList.list) {
        
        const problems = {category : '' , problemList : []}
        problems.category = i
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
            // return d.className
            let children = Array.from(d.querySelectorAll('[class ^= "L"]'))
            children.forEach((child) => {
                res += (child.textContent)
                res += "\n"
            })
            
            return res
           })
           console.log(sol)
        }
        
    }
   

}