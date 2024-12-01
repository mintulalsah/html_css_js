const arr=[0,0,1,1,1,2,2,3,3,4];
for (let i = 0; i < arr.length; i++) {
 
    let minindex=i;
    for (let j = i+1; j < arr.length; j++) {
        
        if (arr[i]<arr[j]) {
            
            minindex=j;
        }

        //swap
// a=a+b;//a=3,b=4,4+3
// b=a-b;//3
// a=a-b;//4
        arr[i]=arr[i]+arr[minindex]
        arr[j]=arr[i]-arr[minindex];
        arr[i]=arr[i]-arr[minindex];
    }
}

console.log(arr);
