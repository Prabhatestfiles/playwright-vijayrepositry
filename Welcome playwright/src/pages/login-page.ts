
import { BrowserContext, Locator, Page, expect } from "playwright/test";

export class Login {
    page: Page;
    userid: Locator;
    password: Locator;
    signin: Locator;
    url: string;
    textcontent: Locator
    workassg: Locator
    tobemty:Locator
    ediatble:Locator
    disable:Locator
    packagedes: Locator
    autofill: Locator
    filldata: Locator
    date: Locator
    picdate: Locator
    projectlocation: Locator
    selectlocation: Locator
    psdate: Locator
    picpsdate: Locator
    selectpsdate:Locator
    textinck: Locator
    create: Locator
    ignor: Locator
    close:Locator


    constructor(page: Page) {
        this.page = page;
        this.url = 'https://adaptiveqat.caresoftglobal.com/';


        this.userid = this.page.locator('[id="frmLogin"] [id="txtUserID"][name="username"]').nth(0);
        this.password = this.page.locator('[id="txtPassword"][name="password"]').nth(0)
        this.signin = this.page.locator('#btnSubmit').nth(0);
        this.textcontent=this.page.getByRole('heading', { name: 'Adaptive Service Management' })
        this.workassg = this.page.locator('[id="Add"]').getByText('Add Work Package');
        //this.tobemty =this.page.locator('[name="Package Description"][class="form-control txtarea ctl  "]')
        //this.ediatble =this.page.locator('[name="Package Description"][class="form-control txtarea ctl  "]')
        this.packagedes = this.page.locator('[name="Package Description"][class="form-control txtarea ctl  "]');
        this.autofill = this.page.locator('[id="9A19F52D-2A38-4987-9D18-28CE16A45A1E"]');
        //this.filldata = this.page.locator('[text="HUNTER JAMES - WN525"]');
        this.date = this.page.locator('input[name="Requested Delivery Date"]');
        this.picdate = this.page.locator('td[data-handler="selectDay"] a[data-date="8"]');
        this.projectlocation = this.page.locator('[role="textbox"]').nth(16);
        this.selectlocation = this.page.locator('[role="option"]').nth(1);
        this.psdate = this.page.locator('input[name="Planned Start Date"]');
        this.selectpsdate = this.page.locator('')

        this.disable = this.page.locator('[class="col-md-6 form-control  ctl"]').nth(1)
        this.picpsdate = this.page.locator('[id="expand-addon"]');
        this.textinck = this.page.locator('[class="btn-close feedbackformclose"]').nth(-1);
        this.create = this.page.locator('[id="Create"]').nth(0);
        this.ignor =this.page.locator('[class="swal-button swal-button--confirm"]');
        this.close =this.page.locator('[class="btn-close"]').nth(0);
        



    }
    public async loginmethod() {
        await this.page.goto(this.url)
        //await expect(this.page).toHaveURL('https://adaptiveqat.caresoftglobal.c')
        await expect.soft(this.page).toHaveURL('https://adaptiveqat.caresoftglobal.c')

        //this.textcontent=this.page.getByRole('heading', { name: 'Adaptive Service Management' })
        console.log('The text is present')

        //await this.page.waitForTimeout(1000);
        await this.page.waitForLoadState('networkidle')
        await this.userid.waitFor({ state: 'visible' })
        await this.userid.fill('103095')
        await this.password.fill('Infinity*!99')
        await this.signin.click()
        await this.page.waitForTimeout(2000);
        await this.workassg.click()
        await expect(this.packagedes).toBeEditable()
        console.log('Text field is able to editable')
        await expect(this.packagedes).toBeEmpty()
        console.log('The field is empty')
        await this.packagedes.fill('Test package')
        await this.date.click()
        await this.picdate.click()
        await this.projectlocation.click()
        await this.selectlocation.click()
        await this.psdate.click()
        await this.selectpsdate.click()
        await expect(this.disable).toBeDisabled()
        console.log('Email id field is disable')
        await this.picpsdate.click()
        await this.textinck.click()
        await this.create.click()
        await this.ignor.click()
        await this.close.click()



        //await this.textinck('body.cke_editable','Your text here');
       //await this.page.pause()


        //await expect(this.textcontent).toContainText('Adaptive Service Management')
        //console.log('Given text is avilable so the test case pass')



    }

}

