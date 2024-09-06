function makeAllCaps(array) {
    // Mengembalikan sebuah promise baru.
    return new Promise((resolve, reject) => {
        // Cek inputan array atau engga
      if (!Array.isArray(array)) {
        reject('Input harus berupa array');
      }
  
      const capitalizedArray = array.map(word => word.toUpperCase());
      resolve(capitalizedArray); //sama kaya return
    });
  }
  
  function sortWords(array) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array)) {
        reject('Input harus berupa array');
      }
  
      const sortedArray = array.sort();
      resolve(sortedArray);
    });
  }
  
  // Soal
  const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];
  const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log("error complicated array"));