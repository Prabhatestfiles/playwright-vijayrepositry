import{test as base, createBdd} from 'playwright-bdd';

 import { Login } from '../../src/pages/login-page';
type allStepClass ={
    Login:Login;
}
export const test=base.extend<allStepClass>({
    Login:async({page}, use )=>{await use(new Login(page));}
 
})

