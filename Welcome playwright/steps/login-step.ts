import { createBdd } from "playwright-bdd";

import{test} from './fixtures/fixture'
// import { When } from 'playwright-bdd/decorators';
// import {Then } from 'playwright-bdd/decorators';
// import { Given } from 'playwright-bdd/decorators';
 
const{Given, When, Then,} = createBdd(test)
 
Then("login",async({Login })=>{
    await Login.loginmethod();
 
 
})
