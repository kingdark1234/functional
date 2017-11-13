var arrayN = [5,4,3,2,1];
var copy = [];

function pushArray(n){
    return arrayN.push(n);
}

function popArray(){
    return arrayN.pop();
}
pushArray(Math.random()*(10-0)+0);
console.log(arrayN);
console.log(popArray());
console.log("New Array Is:",arrayN);

arrayN.forEach(function(ele){
    copy.push(ele);
});

console.log("copyArray = ",copy);

arrayN.forEach(function(ele, currentIndex, listObj){
    copy[currentIndex] = listObj[listObj.length-(currentIndex+1)];
    //console.log(ele + ', ' + currentIndex + ', ' + listObj); 
});
console.log("copyRevest = ",copy);
console.log("==============================================");
console.log("result:"+[7,6,1,4,3].sort(function(a,b){
    console.log("compareRes:"+a+" - "+b+" = ",a-b)
    return a-b;
}))

console.log("resultINDEX:"+[7,6,1,4,3].indexOf(7))