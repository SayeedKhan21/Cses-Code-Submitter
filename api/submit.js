import getSolutions from "../util/getSolutions.js";
import addOrFetch from "./requests/addOrFetchRepo.js";
import createCommit from "./requests/createCommit.js";
import getHeadCommit from "./requests/getHeadCommitOid.js";

const submit = () => {
  let topicLen;
  let topicIndex = 0;
  let probIndex = 0;
  getSolutions().then(async (data) => {
    topicLen = data.list.length;
    console.log(
      "----------------- CATEGORY = ",
      data.list[0].category,
      "------------\n"
    );
    await submitProb(data);
  });

  const submitProb = async (data) => {
    await addOrFetch();
    let problemsLen = data.list[topicIndex].problemList.length;
    const obj = data.list[topicIndex];
    const prob = obj.problemList[probIndex];
    console.log("PROBLEM = ", prob.title, "\n");

    const res = await getHeadCommit();
    if (res?.data?.repository?.ref?.target === undefined) {
      submitProb(data)
    } else {
      try {
        const commitObj = {
          headOid: res.data.repository.ref.target.oid,
          content: Buffer.from(prob.solution).toString("base64"),
          path: `${obj.category}/${prob.title.replace(" ", "_")}.cpp`,
        };

        const result = await createCommit(commitObj);
        if (result.errors) {
          submitProb(data);
        } else {
          console.log(result, "\n");
          if (probIndex == problemsLen - 1) {
            probIndex = 0;
            topicIndex++;
            if (topicIndex >= topicLen) {
              console.log("SUBMISSION COMPLETED");
              return;
            }
            console.log(
              "----------- CATEGORY = ",
              data.list[topicIndex].category,
              "--------\n"
            );
          } else probIndex++;
          submitProb(data);
        }
      } catch (err) {
        console.error("ERROR OCCURRED :", err);
      }
    }
  };
};

export default submit;
