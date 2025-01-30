const N = 6, K = 1, A = [0, 2, 3, 5, 4,2];
function iterationneed(N,K,A){
    
    let iteration=0;
    
   for(let i=0;i<N;i++){
        while(A[i]>K){
            [A[i],K]= [K,A[i]];
            iteration++;

            if(A.slice(1).every((val,idx)=>val>=A[idx])){
                return iteration
            }
        }



   }

   if(!A.slice(1).every((val,idx)=>val>=A[idx])){
    return -1
}
   return iteration
}
console.log(iterationneed(N, K, A)); // Output: 3