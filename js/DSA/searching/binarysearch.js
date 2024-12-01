let search = 123;
const bsearch = (arr) => {
  let bisec = Math.floor(arr.length / 2);  // Fixing bisec to be an integer
  console.log(bisec, "bisec value");

  if (search === arr[bisec]) {
    return arr[bisec];
  } else if (arr[bisec] > search) {
    return bsearch(arr.slice(0, bisec));  // Correct slice bounds
  } else if (arr[bisec] < search) {
    return bsearch(arr.slice(bisec + 1));  // Correct slice bounds
  }
  else{
    return ""
  }
};

console.log(bsearch([1, 2, 3, 4, 5, 6, 78, 89,123]) ? "found" : "not found");
