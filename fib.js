//solves fibonacci sequence using iteration
console.log('Start: FIBONACCI ITERATIVE')

function fibs(n) {

    let array = [];
    array[0] = 0;
    array[1] = 1;

    if (n == 0) {
        return;
    }

    if (n == 1) {
        return console.log(array.slice(0,1));
    }

    if (n == 2) {
        return console.log(array.slice(0,2));
    }

    for(i = 2; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }

    return console.log(array);
}

fibs(1);
fibs(2);
fibs(5);

//solves fibonacci sequence using recursion

console.log('Start: FIBONACCI ITERATIVE')

function fibRec(n) {
    if (n === 0 ) {
        return [];
    } else if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0,1]
    } else {
        var arr = fibRec(n-1);
        arr.push(arr[arr.length-1] + arr[arr.length-2]) //using arr.length instead of n here as n indicates desired length of sequence and not current length of sequence being built. 
        return arr;
    }
}

console.log(fibRec(4))
console.log(fibRec(8))



