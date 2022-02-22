// Làm bài tập tại đây
// const groupByLength=(arr)=>{
//     // arr.forEach(item=>{
//     // arr[item].length==arr[item]
//     // })
//     var arrLength=new Object();
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i].length==arr[j].length){
//                 arrLength.
//             }
//         }
//     }

// }
const arr=['one','two','three','four','five']
const groupByLength=(arr)=>{
    let temp=[...arr]
    let result={}
    while(temp.length>0){
      let currentLenght=temp[0].length
    
      result[currentLenght]=temp.filter(item=>item.length===currentLenght)
      temp=temp.filter(item=>item.length!==currentLenght)
    }
    return result;
}
console.log(groupByLength(arr))
