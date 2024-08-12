
import { BrowserContext, Locator, Page, expect } from "@playwright/test";

export class Login {
    page: Page
    url: string
    username: Locator
    password: Locator
    card: Locator
    addbutton: Locator
    licensetype:Locator
    itemcategory: Locator
    itemdescription:Locator
    quantity:Locator
    itemUOM:Locator
    PID:Locator
    checkbox:Locator
    radiobutton:Locator
    radiobutton2:Locator
    datepicker:Locator
    currentDay:Locator
    attachment:Locator
    attach:Locator
    file:Locator
    filetype:Locator
    uploadbutton:Locator
 
    constructor(page: Page) {
        this.page = page;
        this.url = 'https://procurementqat.caresoftglobal.com/';
        this.username = this.page.locator('[name="username"]')
        this.password = this.page.locator('[id="txtPassword"]')
        this.card = this.page.getByRole('heading', { name: 'Software' })
        this.addbutton = this.page.locator('#btnadd')
        this.licensetype=this.page.getByPlaceholder('Please enter License type')
        this.itemcategory=this.page.locator('[id="ddlItemCategory"]')
        this.itemdescription=this.page.locator('#ddlItemdescriptions')
        this.quantity=this.page.locator('#txtQty')
        this.itemUOM=this.page.locator('[id="ddlQtyUOM"]')
        this.PID=this.page.locator('[class="multiselect-selected-text"]')
        this.checkbox=this.page.locator('[type="checkbox"][value="BAYONE13179C000"]')
        this.radiobutton=this.page.locator('[id="RdnBillabeyes"]')
        this.radiobutton2=this.page.locator('[id="RdnWorkPlaceCustomer"]')
        this.datepicker=this.page.locator('[id="txtExpiryDate"]')
        this.currentDay=this.page.locator('[class="today active start-date active end-date in-range available"]')
        this.attachment=this.page.locator('[id="btnAttachment"]')
        this.attach=this.page.locator('[id="fileUpload"]')
        this.filetype=this.page.locator('#ddlDocType')
        this.uploadbutton=this.page.locator('#btnUpload')
    }
 
    public async loginmethod()
    {
        await this.page.waitForTimeout(5000)           
        await this.page.goto(this.url);
        await expect(this.page).toHaveURL(this.url)     
        console.log('Url Matched')
        await this.page.waitForSelector('this.username')    
        await expect(this.username).toBeEnabled()       
        await this.username.fill('101479')              
        await expect(this.password).not.toBeDisabled()  
        await this.password.fill('Caresoft')           
        await this.password.press('Enter')              
        await this.page.waitForLoadState('networkidle') 
    }
 
    public async selectCard() {
        await this.card.click()                         
    }
 
    public async addRequest() {
        await this.addbutton.click()                              
        await this.licensetype.fill('Public')                    
        await this.itemcategory.selectOption('Subscription')    
        await this.itemdescription.selectOption('ANSA')           
        await this.quantity.fill('10')
              
        await this.itemUOM.selectOption('Units')
        await this.PID.click()                                      
        await expect(this.checkbox).not.toBeChecked()             
        await this.checkbox.check()                                
         if(await this.radiobutton.isChecked)                         
         {
             if(await expect(this.radiobutton2).not.toBeChecked)
                 {
                     await this.radiobutton2.check()
                     console.log('checked')
                 }
         }
        await this.datepicker.focus()                                   
        await this.currentDay.dblclick()                               
       
         await this.attachment.click()
         await this.filetype.selectOption('Invoice')
         const fileInput = this.attach
         await this.attach.click()
         await fileInput.setInputFiles('')
         await this.uploadbutton.click()
         await this.page.pause()
 
       
       
        }
   
}

