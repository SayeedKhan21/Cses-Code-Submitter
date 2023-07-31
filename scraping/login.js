

const login = async (page) => {

    
    await page.goto('https://cses.fi/login')
    const usernameInput = await page.$('input[name="nick"]')
    const passwordInput = await page.$('input[name="pass"]')

    await usernameInput.type(process.env.CSES_USERNAME , {delay : 500})
    await passwordInput.type(process.env.CSES_PASSWORD , {delay : 500})


    await Promise.all([
        page.waitForNavigation(),
        page.click('input[type="submit"]')
      ]);    
}

export default login