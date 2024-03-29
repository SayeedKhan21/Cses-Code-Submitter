import fs from "fs"

const getSolutions =  async () => {
    
    try {
        const fileContent = await new Promise((resolve, reject) => {
            fs.readFile('./data/solutions.json', (err, content) => {
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
      console.log("------------------------ ERROR OCCURRED --------------------------------")
        // console.error(err)
        throw err
    }

}

export default getSolutions