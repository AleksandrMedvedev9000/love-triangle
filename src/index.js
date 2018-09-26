/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  k = 0;
  var i, j, l;
  for (i=0; i<preferences.length; i++) {
    for (j=0; j<preferences.length; j++) {
      if (preferences[i] == j+1 && preferences[j] != preferences[i]) {
        for (l=0; l<preferences.length; l++) {
          if (preferences[j] == l+1 && preferences[l] == i+1 && preferences[j] != preferences[l]) {
            k = k+1;
            }
        }
      }
    }
  }
  return k/3;
};
