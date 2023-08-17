import getSolutions from "../util/getSolutions.js";
import addOrFetch from "./requests/addOrFetchRepo.js";
import createCommit from "./requests/createCommit.js";
import getHeadCommit from "./requests/getHeadCommitOid.js";

let topicLen;
let topicIndex = 0
let probIndex = 0
getSolutions().then(async (data) => {
  
  topicLen = data.list.length;
  await submitProb(data);
});

const submitProb = async (data) => {

  const res = await addOrFetch()
  addOrFetch().then(async () => {
    let problemsLen = data.list[topicIndex].problemList.length;
    const obj = data.list[topicIndex];
    const prob = obj.problemList[probIndex];

    getHeadCommit().then(async (res) => {
      try {
   
        const commitObj = {
          headOid: res.data.repository.ref.target.oid,
          content: Buffer.from(prob.solution).toString("base64"),
          path: `${obj.category}/${prob.title.replace(" ", "_")}.cpp`,
        };

        createCommit(commitObj)
        .then(() => {
          if(probIndex == problemsLen - 1){
            probIndex = 0
            topicIndex ++ 
            if(topicIndex == topicLen){
              return 
            }
          }
          else probIndex ++ 
          submitProb(data)
        })
      } catch (err) {
        console.error("ERROR OCCURRED :", err);
      }
    });
  });
};
