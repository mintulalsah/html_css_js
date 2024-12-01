const list=[-5,900,1,18,3,23,2,24]
        for (let i = 0; i < list.length; i++) {
            let minvalue=list[i];
            let minindex=0;
            for (let j = i+1; j < list.length; j++) {
                if (list[j]<minvalue) {
                    minvalue=list[j];
                    minindex=j;
                }
            }
            if (minindex>i) {
                list[i]=list[minindex]+list[i];
            list[minindex]=list[i]-list[minindex];
           list[i]=list[i]-list[minindex];
            }
        
        }
        console.log(list);