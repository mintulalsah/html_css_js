var item = new Array(10).fill("1")

var nextListItem = function() {
    
    if (item.length) {
        item.pop();
        
setTimeout(() => {
    nextListItem()
    
}, 1);    }
};

nextListItem();