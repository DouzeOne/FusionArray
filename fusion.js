/**Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

Utilisez une fonction de ce genre (selon votre langage) :
sorted_fusion(array1, array2) {
 # your algo
 return (new_array)
} */

function sorted_fusion(array1, array2) {
    let mergedList = [];
    let index1 = 0;
    let index2 = 0;
  
    while (index1 < array1.length && index2 < array2.length) {
      if (array1[index1] < array2[index2]) {
        mergedList.push(array1[index1]);
        index1++;
      } else {
        mergedList.push(array2[index2]);
        index2++;
      }
    }
  
    while (index1 < array1.length) {
      mergedList.push(array1[index1]);
      index1++;
    }
  
    while (index2 < array2.length) {
      mergedList.push(array2[index2]);
      index2++;
    }
  
    return mergedList;
  }
  
  let array1 = [5, 15, 25, 35];
  let array2 = [10, 20, 30, 40];
  
  let mergedList = sorted_fusion(array1, array2);
  console.log("La fusion des deux tableau est : " + mergedList.join(', '));
