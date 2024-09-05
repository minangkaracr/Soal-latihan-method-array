const videoData = [
    {
      name: 'Miss Scarlet',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Rusty',
      present: false,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Colonel Mustard',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Professor Plum',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    }
  ]
  
  // Task
  // 1. Lakukan filter terhadap data di bawah yang memiliki nilai present = true. 
  // 2. Kemudian cetak berapa banyak hasilnya dan cetak hasilnya dengan console.log
  // Answer
  let presents = videoData.filter(
    present=>present.present === true
  )
  
  let count = presents.length
  
  console.log(`Jumlah data yang memiliki nilai present true sebanyak ${count}`)
  console.log(presents)