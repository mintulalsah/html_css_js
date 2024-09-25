/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const toBe=(toBeval)=>{
       return toBeval===val?true:"Not Equal"
    }
     const notToBe=(notToBeval)=>{
       return notToBe!==val?true:"Equal"
    }

    return {
        toBe:toBe
    }
};


 /* expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
 expect(5).toBe(5);