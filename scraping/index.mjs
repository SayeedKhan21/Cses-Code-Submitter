import puppeteer from 'puppeteer'

import login from './login.mjs'
import fetchSol from './fetchSol.mjs'

async function init(){
    const browser = await puppeteer.launch({headless : true})
    const page = await browser.newPage()

    await login(page)
    const solutions  = await fetchSol(page)
    await browser.close()
}

init()