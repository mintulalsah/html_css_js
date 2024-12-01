//bubble sort
// console.log('Z'.charCodeAt(0));
// 65+26=88
const list=[5,90,1,18,3,23,2,24]
// const sortedarr=[];
for (let i = 0; i < list.length; i++) {
    for (let j = i+1; j < list.length; j++) {
        // console.log(i,j);
        // console.log(list[i],list[j]);
        if (list[i]<list[j]) {
            list[i]=list[j]+list[i];
             list[j]=list[i]-list[j];
            list[i]=list[i]-list[j];
        }
    }
}
console.log(list);
