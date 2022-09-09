module.exports = function countingValleys(s) {
    let valley = 0, valleyprev=0,totalvalley=0;
    for(var i = 0; i < s.length; i++){
        if(s[i].toUpperCase() == "U")
        valley++;
        if(s[i].toUpperCase() == "D")
        valley--;
        if(s[i].toUpperCase() == "F")
        valley= valley;
        if(valleyprev == -1 && valley == 0){
            totalvalley++
        }    
        valleyprev=valley;    
    }
    return totalvalley;
  }
