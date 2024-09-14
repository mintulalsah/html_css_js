const cardcolors=['heart','shades','club','diamond']
const cardnum=['A',"2",'3',"4",'5','6','7','8','9','10','j','Q','K']
let card=[];//{cardnum:"",cardcolor:1}

for(i=0;i<cardnum.length;i++){
    for(j=0;j<cardcolors.length;j++){
        card.push({
            cardnum:cardnum[i],cardcolors:cardcolors[j]
        })
    }
}

console.log(card);

function checkexistornot(cardnum){
card.filter(()=>{

})
}

function showRandomCardAndRemove(){

    const randomecard=Math.floor(Math.random() * card.length);
    console.log("this one is random slected",randomecard,card[randomecard]);


    
    card.splice(0,2)
    console.log("crads left",card.length);
    
// console.log(card[randomecard])
    // checkexistornot(randomecard);


}

let m=3;
while(m){
    showRandomCardAndRemove();
    m--;
}


