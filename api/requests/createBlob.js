import endpoints from '../endpoints.js'
import { Octokit } from '@octokit/core'


const createBlob = async (obj) => {
 // Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: process.env.GITHUB_API_TOKEN
  })
  
  const res = await octokit.request(endpoints.CREATE_BLOB_ENDPOINT ,endpoints.CREATE_BLOB_ENDPOINT_CONFIG(obj))
  return res
    
    
}

export default createBlob