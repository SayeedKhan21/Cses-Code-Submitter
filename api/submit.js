import addOrFetch from "./requests/addOrFetchRepo.js"
import getSolutions from "../util/getSolutions.js"
import createBlob from "./requests/createBlob.js"
import getSHA from "./requests/getSha.js"
import createTree from "./requests/createTree.js"
import createCommit from "./requests/addRepoContent.js"

const submit = async () => {
    // console.log("SUBMISSION STARTED ... ")


    await addOrFetch()

    const res = await getSHA()
    const baseTreeSHA = (res.data.commit.commit.tree.sha)

    console.log(baseTreeSHA)

    const data = await getSolutions()
    console.log("STARTED TO SUBMIT ", data)
    // data.list.forEach(async obj => {
        const obj = data.list[0]
        console.log("CATEGORY = " )
        // obj.problemList.forEach(async prob => {
            const prob = obj.problemList[0]
            console.log("TITLE = " , prob.title)
            try {
                const blobSha = await createBlob({ content: prob.solution })
                const treeObj = {
                    baseTreeSHA,
                    path: `${prob.title.replace(' ', '_')}.cpp`,
                    blobSha : blobSha.data.sha
                }
                
                // console.log(blobSha)
                const res = await createTree(treeObj)
                // console.log(res.data.tree)
                const treeSha = res.data.sha
                const commitObj = {
                    message : 'Initial commit' ,
                    baseTreeSHA,
                    // treeSha,
                }
                
                const commit = await createCommit(commitObj)
                console.log(commit)
             

            }
            catch (err) {
                console.error("PROCESS STOPPED ", err)
            }
            
        // })
    // })


}
submit()
// export default submit    