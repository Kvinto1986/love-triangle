/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count=0;
for(var i = 0; i < preferences.length; i++) {

    var lover_a;
    var lover_b;
    var lover_c;
    lover_a=preferences[i];
    lover_b=preferences[lover_a-1];
    lover_c=preferences[lover_b-1];
    if(lover_c===i+1 & lover_a!==lover_b & lover_a!==lover_c){
        count++;
    }
else continue;
}
var love_triangles=count/3;
return love_triangles;
};
