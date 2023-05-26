

const fetch = async (page) => {
    
    await page.goto('https://cses.fi/problemset/list/')

    const links = await page.evaluate(()=> {
        const topics = Array.from(document.querySelectorAll('h2') , (e) => e.textContent)
        topics.shift()
      
        let problems = {}
  
       const ulElements = Array.from(document.querySelectorAll('ul.task-list'))
       for(let i = 0 ;i < ulElements.length ; ++i ) {
            let questionList = []
            let liElements = Array.from(ulElements[i].querySelectorAll('li.task'))
            let atLeastOne =  0 
            liElements.forEach((liElement) => {
                let spanElements = Array.from(liElement.querySelectorAll('span'))
    
                let spanElement = spanElements[1]
               
                if(spanElement.classList.contains('full')){
                    atLeastOne = 1
                     let question = (liElement.querySelector('a').text)
                     questionList.push(question)
                }
            })
            
            if(i && atLeastOne)
                problems[topics[i-1]] = questionList
        }
       return problems
    })
    return links

}


export default fetch
