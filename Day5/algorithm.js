var newarray = [1, 2, 3, 4, 5, 6];

function reverse(arr)
{
    for(var i = 0; i<arr.length/2; i++) {
        // catching value of current index and holding so the value isn't lost during the reversal
        var temp = arr[i];
        // set current index to the value of index on opposite side of array
        arr[i] = arr[arr.length - 1 - i];
        // now set the opposite side to the value we were holding in temp to finish reversing the two values.
        arr[arr.length - 1 - i] = temp;

    }

    console.log(arr)
}

reverse(newarray);
