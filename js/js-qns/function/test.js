//this is call tagged templat eliterals
function greeting(one, two,...abc) {
    return console.log(one,two,abc);
    
}

const genderji="male"
const name1="mintu"
greeting`${genderji} hi bro how are you ${name1}${"manto"}`;



// undefined i am mlae
// hi brow how are you ['male',"mintu"]