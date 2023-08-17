import puppeteer from 'puppeteer'

import login from './login.js'
import fetchSol from './fetchSol.js'
// import submit from "../api/submit.js"


async function init(){
    const browser = await puppeteer.launch({headless : true})
    const page = await browser.newPage()

    await Promise.all([
        await login(page),
        await fetchSol(page)
    ])
    // await submit()
    await browser.close()
}

init()