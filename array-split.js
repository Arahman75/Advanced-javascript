const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2,5);
console.log(nums);

const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2,5);

console.log(nums);
console.log(part);

const nums = [1,2,3,4,5,6,7,8,9];
const removed = nums.splice(2,5);

console.log(nums);
console.log(removed);

const nums = [1,2,3,4,5,6,7,8,9];
const removed = nums.splice(2,3, 22,33,44);
console.log(nums);
console.log(removed);

const nums = [1,2,3,4,5,6,7,8,9];
const removed = nums.splice(2,3, 22,33,44);
// console.log(nums);
// console.log(removed);
const add = nums.join('');
console.log(add);

const nums = [1,2,3,4,5,6,7,8,9];
const removed = nums.splice(2,3, 22,33,44);

const add = nums.join(' ');
console.log(add);

const nums = [1,2,3,4,5,6,7,8,9];
const removed = nums.splice(2,3, 22,33,44);

const add = nums.join(',');
console.log(add);

const nums = [1,2,3,4,5,6,7,8,9];
const removed = nums.splice(2,3, 22,33,44);

const add = nums.join(' hi');
console.log(add);