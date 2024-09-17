# CocusChallenge
Asos website test automation challenge
# Asos Playwright Automation Tests

##Dependencies
node
playwright
Typescript

## Framework setup and installation
1. Clone the repository
	1.a. add the .env file from the google shared folder to the root folder of the cloned repo
2. Install node
3. npm init -y
4. npm install playwright
5. npm install typescript @types/node --save-dev
6. npx playwright install
   
  
## Test execution
npx playwright test   //run e2e test
npx playwright test --grep "test case description"    //run individual testcases


## Viewing reports
npx playwright test --reporter=html
npx playwright show-report
