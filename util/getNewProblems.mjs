import fs from "fs"

const getNewProblems =  async () => {
    console.log("INSIDE GET NEW LIST")
    try {
        const fileContent = await new Promise((resolve, reject) => {
            fs.readFile('./data/newProblems.json', 'utf-8', (err, content) => {
              if (err) {
                reject(err);
              } else {
                resolve(content);
              }
            });
          });
      
          if (!fileContent.length) {
            return [];
          } else {
            const problems = JSON.parse(fileContent);
            return problems;
          }
    }
    catch(err){
        console.error(err)
        throw err
    }

}

export default getNewProblems