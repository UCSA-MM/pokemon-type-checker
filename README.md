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
I initially wanted to do something more elegant with an actual testing framework, but in the end it really was not worth it so i just switched to something more simple.  
The website is not performance heavy so loading one more script won't change much.  
At the bottom of ```index.html``` the file ```bad-tests.js``` is included. This file stores all of the tests for the website. It is likely they will be split in the future, but they are not for now.  
To run the tests just open the browser console with f12 (or whatever bound key your browser has) and write ```TEST()```. The output of the tests will be printed in the console.
