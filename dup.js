// PRACTICE WORK

// 1. INPUT: 1214
// OUTPUT:
// Uniques are: 2 4
// Dublicate is : 1

// 2. Input : 2788
// output:
// 2-> 1
// 7-> 1
// 8-> 2


arr = prompt("Enter a number:").split("").map(Number)//"4546"
console.log(arr)
emp=[],uni="",dup=""
for(i of arr) {
if(!emp.includes(i)) {
emp.push(i)
}
}
console.log(emp)
for(i of emp) {
c=0
for(j of arr) {
if(i==j){
c++
}
}
if(c==1){
uni=uni+i+" "
}
else{
dup+=i+" "
}
}
if(uni.length==2){
console.log("Unique is: "+uni)
}
else{
console.log("Uniques are: "+uni)
}
if(dup.length==2){
console.log("Duplicate is: "+dup)
}
else{
console.log("Duplicates are: "+dup)
}