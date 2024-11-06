import login from "../../POM/login"
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const Login = new login

Given('I am on the login page', ()=>{
  Login.page()
})

When ('I enter email address',()=>{
  Login.email()
})

And ('I enter password',()=>{
  Login.password()
})

And ('I click on the login button',()=>{
  Login.loginBut()
})
Then ('I am on the dashboard',()=>{
  Login.dasboard()
})