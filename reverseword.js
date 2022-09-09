module.export = function reverseWords(str){
    let a = "";
    const data = [];
    for (var i =0; i < str.length; i++){
        if(str[i] != " "){
            a = a + str[i];
            
        }else {
            data.push(a);
            a = "";
        }
        if ( str[i+1] == undefined){
            data.push(a);
            a = "";      
        }
    }
    return (data.reverse()).join(' ');

    //resultado deseado  -> return str.split(' ').reverse().join(' ');
  }
