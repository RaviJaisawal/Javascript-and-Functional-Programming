const triple = (arr)=> arr.map((currentitem)=> currentitem *3 )

const arr = [1,2,3,4,5]

console.log(triple(arr))

const sum = (arr)=> arr.reduce((previositem ,currentitem)=> previositem + currentitem ,0 )

console.log(sum(arr))
