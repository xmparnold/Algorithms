var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

var istrue = false;

function isPresent2d(arr2ds, value) {
    for (x = 0; x < arr2ds.length; x++) {
        for (y = 0; y < arr2ds[x].length; y++) {
            if (arr2ds[x][y] == value) {
                istrue = true;
            }
        }
    }
    return istrue;
}

var result = isPresent2d(arr2d, 7);
console.log(result);



