//takes in an array
//sort left of array
//sort right of array
//merge both arrays
//recursion base, if one element in array, return

function mergeSort(arr) {
    
    if (arr.length === 1) {
        return arr;
    } else {
        let arrL = arr.slice(0,arr.length/2); 
        let arrR = arr.slice(arr.length/2,arr.length);
        let arrMerged = [];

        arrL = mergeSort(arrL);
        arrR = mergeSort(arrR);
        
        while (arrL.length >= 1 && arrR.length>=1) {
            if (arrL[0]<=arrR[0]) {
                arrMerged.push(arrL[0]);
                arrL.shift();
            } else {
                arrMerged.push(arrR[0]);
                arrR.shift();
            }

        }

        if (arrL.length !== 0 && arrR.length == 0) {
            arrMerged.push(...arrL);
            arrL=[];
        }

        if (arrL.length == 0 && arrR.length !== 0) {
            arrMerged.push(...arrR);
            arrR=[];
        }

        return arrMerged;
    
    }

}

console.log(mergeSort([3, 2, 1, 13]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([0]));
console.log(mergeSort([105, 79, 100, 110]));

