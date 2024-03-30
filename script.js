const sampleNews = `As software developers, the natural tendency is to start developing applications 
based on your own hands-on experience and knowledge right away. However, overtime issues in the 
application arise, adaptations to changes, and new features happen.`
let empty=0
let point=0
let comma=0
for (let i = 0; i < sampleNews.length; i++) {
   if (sampleNews[i]===` `){
    empty++
   }
  else if (sampleNews[i]===`,`){
    comma++
   }
   else if(sampleNews[i]===`.`){
    point++
   }
    
}
console.log( "bosluq "+empty)
console.log("noqte "+point)
console.log("vergul "+comma)