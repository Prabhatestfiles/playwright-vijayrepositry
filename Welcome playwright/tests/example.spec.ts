import { test, expect } from '@playwright/test';
import { Login } from '../src/pages/login-page';


test('has title', async ({ page }) => {
  const dymnamic = new Login(page)
await dymnamic.loginmethod()
//await dymnamic.loginButton

});
  



