const collectionNumber = [1, 2, 3, 4, 5, 6]
/**
 * Manipulasi array sederhana
 * Buat array baru berisi angka2 yg merupakan hasil perkalian 3 dari setiap element array collectionNumber
 */
const multipliedNumbers = collectionNumber.map(
    number => number * 3
);

console.log(multipliedNumbers);


const colors = ["blue", "black", "purple", "white", "pink"]
/**
 * buat array baru yang isinya element yang hurufnya lebih dari 4 berdasarkan array colors
 */

const longColors = colors.filter(
    color => color.length > 4
);

console.log(longColors);