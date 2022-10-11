Array
.prototype.max = 
function
() {
  return Math.max.apply(null, this);
};
let p = [35,2,65,7,8,9,12,121,33,99];
console.log(`Max value is: ${p.max()}`);