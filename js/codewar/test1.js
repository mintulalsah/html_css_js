// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
let camelcasestr="";
let specialcharposition;
for (let index = 0; index < str.length; index++) {
    if(['-','_'].includes(str[index])){
        specialcharposition=index+1;
    }
    else{
        if (specialcharposition===index) {
            camelcasestr=camelcasestr+str[index].toLocaleUpperCase();
        }
        else{
      
            camelcasestr=camelcasestr+str[index];
    
        }
    }
   
    
}
return camelcasestr;
}


console.log(toCamelCase('The_Stealth_Warrior'));
