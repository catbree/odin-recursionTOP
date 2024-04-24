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