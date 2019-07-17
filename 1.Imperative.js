const triple = (arr)=>{
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(arr[i]*3);
    }
    return result;
}

let arr = [1,2,3,4];
console.log(triple(arr));

const sum = (arr)=>{
    let result = 0;
    for(let i=0;i<arr.length;i++){
        result +=arr[i];
    }
    return result;
}

console.log(sum(arr));
