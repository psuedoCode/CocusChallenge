# Cocus Playwright Framework
Asos Ecommerce website test automation suite
# Asos Playwright Automation Tests

##Dependencies
node
playwright
Typescript

## Framework setup and installation
1. Clone the repository
	1.a. add the .env file from the google shared folder(https://drive.google.com/drive/folders/1REbbX6L1RDvnaprF14JtmqS3wZEaqqAO?usp=sharing
) to the root folder of the cloned repo
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

## SOON TO BE ADDED IMPROVEMENTS
To separate file for Variables to store the locators to make it easy to edit locators incase of dynamic DOM changes
To explicit waits instead of just relying on playwright built in implicit waits
To include parrallel excecution of the tests by adding docker
