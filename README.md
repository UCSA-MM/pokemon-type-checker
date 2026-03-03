# pokemon-type-checker
Website for checking type weaknesses and strenghts of a given pokemon team.  
Currently heavily WIP, hopefully finished in time for champions.  
The website is basically me experimenting on website creation so it sucks (you can even see me struggling with git in the commit history, plus my struggles with testing)

## TODO
- [ ] Fix table scaling on small viewport (low prio)
- [X] Finish pokemon sv json
- [X] Change json parsing to store data in local storage
- [X] Implement the actual type chart
- [ ] Finish testing for pokemon insertion and type chart

### Testing guide
to test this, I am currently using vitest + playwright. The tests used are contained in the repo, the setup is not.  
to set it up:  
- npm install vitest and npx whatever vitest uses for browser mode
- by running the npx the basic package setup should be done automatically
- in vitest.browser.config.js add under test ``` include: ["tests/*"] ```, add under browser ```testerHtmlPath: "../index.html"``` and select the browser instance (in my case I am using chromium)
- ```npm run test:browser```
