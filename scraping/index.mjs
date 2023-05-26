import puppeteer from 'puppeteer'

import login from './login.mjs'
import fetch from './fetch.mjs'

async function init(){
    const browser = await puppeteer.launch({headless : true})
    const page = await browser.newPage()

    await login(page)
    const prob  = await fetch(page)
    console.log(prob)

    await browser.close()
}

init()