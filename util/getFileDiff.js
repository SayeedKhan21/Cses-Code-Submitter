

function isCategoryPresent(prev ,category){
    return prev?.list?.find((prob) => prob.category === category)
}

function areObjectsEqualWithJSON(obj1, obj2) {
    const str1 = JSON.stringify(obj1);
    const str2 = JSON.stringify(obj2);
  
    return str1 === str2;
  }
function getDiffList(prev ,doc){
    const prevDoc = prev?.list?.find((prob) => prob.category === doc.category)
    const diffList = []
    for(let docProblem of doc.problemList){
        const isProblemPresent = prevDoc.problemList.find((prob) => {
            return areObjectsEqualWithJSON(prob ,docProblem)
        })
        if(isProblemPresent === undefined){
            diffList.push(docProblem)
        }
    }
    return diffList
    
}

const getFileDiff = (prev , recent) => {
    const newProblems = {list : []}
    for (let  doc of recent.list){
        let newProblem = {}
        if(!isCategoryPresent(prev , doc.category)){
            newProblem = doc
        }
        else {
            
            const d = getDiffList(prev , doc)
            if(d.length){
                
              newProblem.category = doc.category
              newProblem.problemList = d
            }
        }

        if(Object.entries(newProblem).length !== 0){
            newProblems.list.push(newProblem)
        }
    }

    if(newProblems.list.length){
        return newProblems
    }
    else {
        return {}
    }
}

export default getFileDiff