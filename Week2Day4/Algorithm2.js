// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    var rows = arr2d.length;
    var col = arr2d[0].length;
    for (x = 0; x < arr2d.length; x++) {
        for (y = 0; y < arr2d[x].length; y++) {
            flat.push(arr2d[x][y]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]